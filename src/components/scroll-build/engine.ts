import {
  beginAction,
  clamp,
  createTarget,
  easeInOut,
  easeOut,
  finishTarget,
  getStartPoint,
  isBuildAction,
  random,
  resetTarget,
  stepAction,
  type ActionCursor,
  type ActionLabels,
  type Box,
  type BuildTarget,
  type CursorGlyph,
} from "./actions";
import {
  CURSOR_COUNT,
  IDLE_FADE_AFTER,
  INTRO_TIMINGS,
  MOBILE_BREAKPOINT,
  MOBILE_ORBIT_FACTOR,
  MOBILE_SPEED_FACTOR,
  ORBIT_RADIUS,
  ORBIT_SPEED,
  ORBIT_VERTICAL_SCALE,
  PASSED_MARGIN,
  REVIEW_PAUSE_RANGE,
  SESSION_STORAGE_KEY,
  TRAVEL_BEND,
  TRAVEL_DURATION_RANGE,
  TRAVEL_MS_PER_PX,
  UNLOCK_VIEWPORT_RATIO,
} from "./config";

/** "waiting": built so far, the rest unlocks with the scroll. */
export type BuildStatus = "intro" | "building" | "waiting" | "done";

export interface ScrollBuildOptions {
  /** .sb-cursor elements, one per colour, and their .sb-selection boxes. */
  cursors: HTMLElement[];
  selections: HTMLElement[];
  /** The .sb-intro-layer overlay and its .sb-intro-logo. */
  intro: HTMLElement;
  /** The pills' text, read when a cursor starts a task. */
  getLabels: () => ActionLabels;
  onStatusChange?: (status: BuildStatus) => void;
}

export interface ScrollBuild {
  start(withIntro: boolean): void;
  /** Stops and leaves the page built, nothing hidden (unmount, route change). */
  destroy(): void;
}

interface Cursor extends ActionCursor {
  index: number;
  root: HTMLElement;
  arrow: HTMLElement | null;
  chip: HTMLElement | null;
  selection: HTMLElement | null;
  sizeLabel: HTMLElement | null;
  x: number;
  y: number;
  previousX: number;
  previousY: number;
  rotation: number;
  isVisible: boolean;
  state: "idle" | "travel" | "act" | "pause";
  target: BuildTarget | null;
  idleSince: number;
  stateStartedAt: number;
  travelDuration: number;
  fromX: number;
  fromY: number;
  bend: number;
  pauseDuration: number;
  orbitPhase: number;
  orbitRadius: number;
  burstX: number;
  burstY: number;
  isMarked: boolean;
}

const pinnedElements = new WeakMap<Element, boolean>();

/** Sticky or fixed: its descendants move with it, not with the page. */
function isPinned(element: Element): boolean {
  let pinned = pinnedElements.get(element);
  if (pinned === undefined) {
    const { position } = getComputedStyle(element);
    pinned = position === "sticky" || position === "fixed";
    pinnedElements.set(element, pinned);
  }
  return pinned;
}

/**
 * The element's box in the viewport from its layout position (offsetLeft/offsetTop up
 * the offsetParent chain), so the transform of a drag or a resize never moves the box
 * it is measured against. Inside the sticky header, the header's own position counts.
 */
function getNaturalBox(element: HTMLElement): Box {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = element;
  const size = { width: element.offsetWidth, height: element.offsetHeight };

  while (node) {
    x += node.offsetLeft;
    y += node.offsetTop;
    const parent: Element | null = node.offsetParent;
    if (parent instanceof HTMLElement && isPinned(parent)) {
      const parentBox = parent.getBoundingClientRect();
      return {
        left: parentBox.left + parent.clientLeft + x,
        top: parentBox.top + parent.clientTop + y,
        ...size,
      };
    }
    node = parent instanceof HTMLElement ? parent : null;
  }
  return { left: x - window.scrollX, top: y - window.scrollY, ...size };
}

function isHidden(element: HTMLElement) {
  return element.getClientRects().length === 0;
}

/**
 * Every [data-build] element in DOM order, with its build ancestor. Those inside the
 * header or the hero (data-build-section) belong to the first screen.
 */
function collectTargets(): BuildTarget[] {
  const targets = new Map<HTMLElement, BuildTarget>();

  for (const element of Array.from(
    document.querySelectorAll<HTMLElement>("[data-build]"),
  )) {
    const action = element.dataset.build;
    if (!isBuildAction(action)) continue;

    const sectionName = element.closest<HTMLElement>("[data-build-section]")
      ?.dataset.buildSection;
    const parentElement =
      element.parentElement?.closest<HTMLElement>("[data-build]");

    targets.set(
      element,
      createTarget(
        element,
        action,
        sectionName === "header" || sectionName === "hero",
        parentElement ? (targets.get(parentElement) ?? null) : null,
      ),
    );
  }
  return Array.from(targets.values());
}

/**
 * The scroll build: a single requestAnimationFrame loop that runs the intro, unlocks
 * elements as the page scrolls, hands them to free cursors in DOM order and plays each
 * action. It writes to the DOM directly (transform, clip-path, opacity, attributes);
 * nothing goes through React state. The loop sleeps when nothing is unlocked or
 * moving, wakes on scroll and resize, and ends once everything is built.
 */
export function createScrollBuild(options: ScrollBuildOptions): ScrollBuild {
  const html = document.documentElement;
  const { intro, getLabels } = options;
  const introLogo = intro.querySelector<HTMLElement>(".sb-intro-logo");

  const allCursors: Cursor[] = options.cursors.map((root, index) => {
    const selection = options.selections[index] ?? null;
    // Top left, top right, bottom left, bottom right.
    const handles = Array.from(
      selection?.querySelectorAll<HTMLElement>(".sb-handle") ?? [],
    );
    const cursor: Cursor = {
      index,
      root,
      color: root.dataset.color ?? "#ffffff",
      arrow: root.querySelector<HTMLElement>(".sb-glyph-arrow"),
      chip: root.querySelector<HTMLElement>(".sb-chip"),
      selection,
      sizeLabel: selection?.querySelector<HTMLElement>(".sb-size") ?? null,
      x: 0,
      y: 0,
      previousX: 0,
      previousY: 0,
      rotation: 0,
      isVisible: false,
      state: "idle",
      target: null,
      idleSince: 0,
      stateStartedAt: 0,
      travelDuration: 0,
      fromX: 0,
      fromY: 0,
      bend: 0,
      pauseDuration: 0,
      orbitPhase: 0,
      orbitRadius: 0,
      burstX: 0,
      burstY: 0,
      isMarked: false,
      setGlyph(glyph: CursorGlyph) {
        if (root.dataset.glyph !== glyph) root.dataset.glyph = glyph;
      },
      click() {
        delete root.dataset.clicking;
        // Restarts the ring's animation.
        void root.offsetWidth;
        root.dataset.clicking = "";
      },
      showSelection(box: Box, measure = false) {
        if (!selection) return;
        selection.dataset.on = "";
        selection.style.transform = `translate3d(${box.left.toFixed(1)}px, ${box.top.toFixed(1)}px, 0)`;
        const width = Math.max(0, box.width);
        const height = Math.max(0, box.height);
        selection.style.width = `${width}px`;
        selection.style.height = `${height}px`;
        handles.forEach((handle, corner) => {
          const x = corner % 2 ? width : 0;
          const y = corner > 1 ? height : 0;
          handle.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        });
        if (cursor.sizeLabel) {
          cursor.sizeLabel.hidden = !measure;
          cursor.sizeLabel.textContent = `${Math.round(width)} × ${Math.round(height)}`;
          cursor.sizeLabel.style.transform = `translate(${(width / 2).toFixed(1)}px, ${(height + 8).toFixed(1)}px) translateX(-50%)`;
        }
      },
    };
    return cursor;
  });

  let cursors: Cursor[] = [];
  let targets: BuildTarget[] = [];
  let phase: "off" | "intro" | "build" = "off";
  let introStartedAt = 0;
  let speed = 1;
  let orbitScale = 1;
  let hasBurst = false;
  let frameId = 0;
  let status: BuildStatus | null = null;
  const timeouts = new Set<number>();

  function setStatus(next: BuildStatus) {
    if (next === status) return;
    status = next;
    options.onStatusChange?.(next);
  }

  function later(callback: () => void, delay: number) {
    const id = window.setTimeout(() => {
      timeouts.delete(id);
      callback();
    }, delay);
    timeouts.add(id);
  }

  function wake() {
    if (!frameId && phase !== "off") frameId = requestAnimationFrame(frame);
  }

  function show(cursor: Cursor, visible: boolean) {
    if (cursor.isVisible === visible) return;
    cursor.isVisible = visible;
    cursor.root.toggleAttribute("data-on", visible);
  }

  /** Moves the cursor; the arrow turns towards where it goes and back to 0° at rest. */
  function render(cursor: Cursor) {
    const dx = cursor.x - cursor.previousX;
    const dy = cursor.y - cursor.previousY;
    const isMoving = Math.hypot(dx, dy) > 1.2;
    const goal = isMoving ? (Math.atan2(dy, dx) * 180) / Math.PI + 135 : 0;
    const difference = ((goal - cursor.rotation + 540) % 360) - 180;
    cursor.rotation += difference * (isMoving ? 0.18 : 0.08);
    cursor.previousX = cursor.x;
    cursor.previousY = cursor.y;
    cursor.root.style.transform = `translate3d(${cursor.x.toFixed(1)}px, ${cursor.y.toFixed(1)}px, 0)`;
    if (cursor.arrow) {
      cursor.arrow.style.transform = `rotate(${cursor.rotation.toFixed(1)}deg)`;
    }
  }

  function endTask(cursor: Cursor) {
    if (cursor.selection) delete cursor.selection.dataset.on;
    delete cursor.root.dataset.acting;
    cursor.setGlyph("arrow");
  }

  function goIdle(cursor: Cursor, now: number) {
    cursor.state = "idle";
    cursor.idleSince = now;
    cursor.target = null;
  }

  /** The next element a free cursor can take: unlocked, and its build ancestor done. */
  function findNextTarget() {
    return targets.find(
      (target) =>
        target.status === "idle" &&
        target.unlocked &&
        (!target.parent || target.parent.status === "done"),
    );
  }

  function frame(now: number) {
    frameId = 0;
    if (phase === "intro") {
      introFrame(now);
      frameId = requestAnimationFrame(frame);
      return;
    }

    // Unlock by scroll: it only moves forward, nothing is ever undone.
    const unlockLine = window.innerHeight * UNLOCK_VIEWPORT_RATIO;
    for (const target of targets) {
      if (target.status !== "idle") continue;
      if (isHidden(target.element)) {
        // display: none (the menu button on desktop, the link row on phones).
        finishTarget(target);
        continue;
      }
      if (!target.unlocked) {
        target.unlocked =
          target.isFirstScreen ||
          getNaturalBox(target.element).top < unlockLine;
      }
      // Scrolled past before any cursor took it: built at once.
      if (target.unlocked) {
        const box = getNaturalBox(target.element);
        if (box.top + box.height < -PASSED_MARGIN) finishTarget(target);
      }
    }

    let busyCursors = 0;
    for (const cursor of cursors) {
      if (cursor.state === "idle") {
        const next = findNextTarget();
        if (next) {
          next.status = "claimed";
          const [x, y] = getStartPoint(next, getNaturalBox(next.element));
          cursor.target = next;
          cursor.state = "travel";
          cursor.stateStartedAt = now;
          cursor.fromX = cursor.x;
          cursor.fromY = cursor.y;
          cursor.travelDuration =
            clamp(
              Math.hypot(x - cursor.x, y - cursor.y) * TRAVEL_MS_PER_PX,
              TRAVEL_DURATION_RANGE.min,
              TRAVEL_DURATION_RANGE.max,
            ) * speed;
          cursor.bend = random(-TRAVEL_BEND, TRAVEL_BEND);
          cursor.setGlyph("arrow");
          show(cursor, true);
        } else if (cursor.isVisible) {
          // Nothing to do: wander a little where it finished, then fade out.
          cursor.x += Math.sin(now / 700 + cursor.index * 1.7) * 0.35;
          cursor.y += Math.cos(now / 900 + cursor.index) * 0.3;
          if (now - cursor.idleSince > IDLE_FADE_AFTER) show(cursor, false);
        }
      }

      if (cursor.state === "travel" && cursor.target) {
        busyCursors++;
        const target = cursor.target;
        const box = getNaturalBox(target.element);
        if (box.top + box.height < -PASSED_MARGIN) {
          // The visitor scrolled past it on the way.
          finishTarget(target);
          goIdle(cursor, now);
        } else {
          // Quadratic Bézier with a sideways bend, like a hand; the end point is
          // recomputed every frame in case the page scrolls.
          const [x, y] = getStartPoint(target, box);
          const t = clamp(
            (now - cursor.stateStartedAt) / cursor.travelDuration,
          );
          const e = easeInOut(t);
          const controlX =
            (cursor.fromX + x) / 2 - (y - cursor.fromY) * cursor.bend;
          const controlY =
            (cursor.fromY + y) / 2 + (x - cursor.fromX) * cursor.bend;
          cursor.x =
            (1 - e) * (1 - e) * cursor.fromX +
            2 * (1 - e) * e * controlX +
            e * e * x;
          cursor.y =
            (1 - e) * (1 - e) * cursor.fromY +
            2 * (1 - e) * e * controlY +
            e * e * y;
          if (t >= 1) {
            cursor.state = "act";
            beginAction(target, cursor, now, speed);
            if (cursor.chip)
              cursor.chip.textContent = getLabels()[target.action];
            cursor.root.dataset.acting = "";
            [cursor.x, cursor.y] = stepAction(target, cursor, 0, box);
          }
        }
      } else if (cursor.state === "act" && cursor.target) {
        busyCursors++;
        const target = cursor.target;
        const q = clamp((now - target.startedAt) / target.duration);
        [cursor.x, cursor.y] = stepAction(
          target,
          cursor,
          q,
          getNaturalBox(target.element),
        );
        if (q >= 1) {
          finishTarget(target);
          endTask(cursor);
          cursor.state = "pause";
          cursor.stateStartedAt = now;
          cursor.pauseDuration =
            random(REVIEW_PAUSE_RANGE.min, REVIEW_PAUSE_RANGE.max) * speed;
        }
      } else if (cursor.state === "pause") {
        // Looks over what it did before taking the next task.
        busyCursors++;
        cursor.x += 0.25;
        cursor.y += 0.15;
        if (now - cursor.stateStartedAt > cursor.pauseDuration) {
          goIdle(cursor, now);
        }
      }

      render(cursor);
    }

    const isAllBuilt = targets.every((target) => target.status === "done");
    const hasVisibleCursor = cursors.some((cursor) => cursor.isVisible);
    if (isAllBuilt) setStatus("done");
    else setStatus(busyCursors > 0 ? "building" : "waiting");

    if (isAllBuilt && !hasVisibleCursor) {
      stopListening();
      return;
    }
    const hasUnlockedWork = targets.some(
      (target) => target.status === "idle" && target.unlocked,
    );
    // Asleep until the next scroll or resize when nothing moves.
    if (busyCursors > 0 || hasVisibleCursor || hasUnlockedWork) {
      frameId = requestAnimationFrame(frame);
    }
  }

  /** The swarm orbits the logo, then bursts out leaving "+" marks and guides. */
  function introFrame(now: number) {
    const elapsed = now - introStartedAt;
    const orbit = INTRO_TIMINGS.orbit * speed;
    const burst = INTRO_TIMINGS.burst * speed;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (elapsed < orbit) {
      for (const cursor of cursors) {
        const angle = cursor.orbitPhase + (elapsed / 1000) * ORBIT_SPEED;
        const radius =
          cursor.orbitRadius +
          Math.sin(elapsed / 400 + cursor.index) * 6 * orbitScale;
        cursor.x = centerX + Math.cos(angle) * radius;
        cursor.y = centerY + Math.sin(angle) * radius * ORBIT_VERTICAL_SCALE;
        show(cursor, true);
        render(cursor);
      }
      return;
    }

    if (!hasBurst) {
      hasBurst = true;
      introLogo?.setAttribute("data-hidden", "");
      cursors.forEach((cursor, index) => {
        cursor.fromX = cursor.x;
        cursor.fromY = cursor.y;
        cursor.burstX =
          window.innerWidth * (0.1 + 0.8 * ((index * 0.37 + 0.13) % 1));
        cursor.burstY =
          window.innerHeight * (0.15 + 0.7 * ((index * 0.61 + 0.3) % 1));
      });
    }

    const progress = clamp((elapsed - orbit) / burst);
    const e = easeOut(progress);
    for (const cursor of cursors) {
      cursor.x = cursor.fromX + (cursor.burstX - cursor.fromX) * e;
      cursor.y = cursor.fromY + (cursor.burstY - cursor.fromY) * e;
      if (progress >= 1 && !cursor.isMarked) {
        cursor.isMarked = true;
        cursor.setGlyph("cross");
        cursor.click();
        markIntroPoint(cursor);
      }
      render(cursor);
    }

    if (elapsed > orbit + burst + INTRO_TIMINGS.settle * speed) endIntro(now);
  }

  /** A "+" in the cursor's colour and two guides that grow from it across the screen. */
  function markIntroPoint(cursor: Cursor) {
    const plus = document.createElement("i");
    plus.className = "sb-plus";
    plus.style.left = `${cursor.burstX}px`;
    plus.style.top = `${cursor.burstY}px`;
    plus.style.color = cursor.color;

    const guideX = document.createElement("i");
    guideX.className = "sb-guide-x";
    guideX.style.top = `${cursor.burstY}px`;
    guideX.style.transformOrigin = `${cursor.burstX}px 0`;

    const guideY = document.createElement("i");
    guideY.className = "sb-guide-y";
    guideY.style.left = `${cursor.burstX}px`;
    guideY.style.transformOrigin = `0 ${cursor.burstY}px`;

    intro.append(guideX, guideY, plus);
    requestAnimationFrame(() => {
      guideX.dataset.on = "";
      guideY.dataset.on = "";
    });
  }

  function clearIntroMarks() {
    for (const mark of Array.from(intro.querySelectorAll("i"))) mark.remove();
  }

  /** The intro fades out over the waiting page and the build starts. */
  function endIntro(now: number) {
    if (phase !== "intro") return;
    phase = "build";
    intro.dataset.leaving = "";
    later(() => {
      html.classList.remove("sb-intro");
      clearIntroMarks();
    }, 800);
    unlockScroll();
    for (const cursor of cursors) {
      goIdle(cursor, now);
      cursor.setGlyph("arrow");
    }
    setStatus("building");
    wake();
  }

  // During the intro the page does not scroll; a click or a key skips it.
  function blockScroll(event: Event) {
    event.preventDefault();
  }

  function skipIntro() {
    endIntro(performance.now());
  }

  function lockScroll() {
    window.addEventListener("wheel", blockScroll, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });
    window.addEventListener("pointerdown", skipIntro);
    window.addEventListener("keydown", skipIntro);
  }

  function unlockScroll() {
    window.removeEventListener("wheel", blockScroll);
    window.removeEventListener("touchmove", blockScroll);
    window.removeEventListener("pointerdown", skipIntro);
    window.removeEventListener("keydown", skipIntro);
  }

  function startListening() {
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", wake);
  }

  function stopListening() {
    window.removeEventListener("scroll", wake);
    window.removeEventListener("resize", wake);
  }

  function stop() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    for (const id of timeouts) window.clearTimeout(id);
    timeouts.clear();
    unlockScroll();
    stopListening();
    for (const target of targets) resetTarget(target);
    for (const cursor of allCursors) {
      show(cursor, false);
      endTask(cursor);
    }
    clearIntroMarks();
    phase = "off";
  }

  function start(withIntro: boolean) {
    stop();
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
    } catch {
      // Storage blocked: the build simply plays again next time.
    }

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    speed = isMobile ? MOBILE_SPEED_FACTOR : 1;
    orbitScale = isMobile ? MOBILE_ORBIT_FACTOR : 1;
    cursors = allCursors.slice(
      0,
      isMobile ? CURSOR_COUNT.mobile : CURSOR_COUNT.desktop,
    );

    html.classList.add("sb");
    targets = collectTargets();
    // A previous engine may have left them built (React's development double effect
    // destroys the first one): every element starts hidden again.
    for (const target of targets) resetTarget(target);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    cursors.forEach((cursor, index) => {
      cursor.state = "idle";
      cursor.target = null;
      cursor.isMarked = false;
      cursor.rotation = 0;
      cursor.orbitPhase = (index / cursors.length) * Math.PI * 2;
      cursor.orbitRadius =
        (ORBIT_RADIUS.base + index * ORBIT_RADIUS.step) * orbitScale;
      cursor.x = cursor.previousX = cursor.fromX = centerX;
      cursor.y = cursor.previousY = cursor.fromY = centerY;
      cursor.setGlyph("arrow");
    });

    startListening();
    if (withIntro) {
      html.classList.add("sb-intro");
      delete intro.dataset.leaving;
      introLogo?.removeAttribute("data-hidden");
      window.scrollTo({ top: 0, behavior: "instant" });
      lockScroll();
      hasBurst = false;
      phase = "intro";
      introStartedAt = performance.now();
      setStatus("intro");
    } else {
      html.classList.remove("sb-intro");
      phase = "build";
      setStatus("building");
    }
    wake();
  }

  function destroy() {
    stop();
    for (const target of targets) finishTarget(target);
    html.classList.remove("sb", "sb-intro");
  }

  return { start, destroy };
}
