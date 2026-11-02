import {
  ACTION_DURATIONS,
  CLICK_AT,
  DRAG_OFFSET,
  DRAW_RELEASE_AT,
  RESIZE_START_SCALE,
  TYPE_DURATION_RANGE,
  TYPE_MS_PER_CHARACTER,
} from "./config";

/**
 * What a cursor does to an element, declared in the markup with data-build:
 * - type: clicks at the start of the text and types it letter by letter;
 * - draw: drags a frame from corner to corner, then the image fades in;
 * - resize: pulls the element's lower right corner from a small scale to its size;
 * - drag: carries the element from an offset, tilted, to its place;
 * - click: hovers, clicks, and the element is revealed in a circle from the click;
 * - line: traces the element from left to right.
 */
export type BuildAction =
  "type" | "draw" | "resize" | "drag" | "click" | "line";

/** Text of the pill a cursor shows while it works, per action, in the page's language. */
export type ActionLabels = Record<BuildAction, string>;

export type CursorGlyph = "arrow" | "ibeam" | "cross" | "resize";

export interface Box {
  left: number;
  top: number;
  width: number;
  height: number;
}

type TypingUnit =
  | {
      kind: "text";
      start: number;
      length: number;
      text: string;
      typed: Text;
      rest: HTMLElement;
    }
  | { kind: "media"; start: number; length: number; element: Element };

interface TypingState {
  layer: HTMLElement;
  caret: HTMLElement;
  units: TypingUnit[];
  total: number;
  typedCount: number;
}

export interface BuildTarget {
  element: HTMLElement;
  action: BuildAction;
  /** Header and hero: unlocked as soon as the intro ends, wherever they are. */
  isFirstScreen: boolean;
  /** Nearest build ancestor: this element waits until it is built. */
  parent: BuildTarget | null;
  status: "idle" | "claimed" | "run" | "done";
  unlocked: boolean;
  startedAt: number;
  duration: number;
  /** Click point, as a share of the element's size. */
  clickX: number;
  clickY: number;
  /** Where the cursor holds the element while dragging it (px from its corner). */
  grabX: number;
  grabY: number;
  /** Where the drag starts (px from its place) and the tilt there (degrees). */
  offsetX: number;
  offsetY: number;
  rotation: number;
  hasClicked: boolean;
  isRevealed: boolean;
  typing: TypingState | null;
}

/** What an action needs from the cursor doing it. */
export interface ActionCursor {
  color: string;
  setGlyph(glyph: CursorGlyph): void;
  click(): void;
  showSelection(box: Box): void;
}

const buildActions: readonly string[] = [
  "type",
  "draw",
  "resize",
  "drag",
  "click",
  "line",
];

export function isBuildAction(value: unknown): value is BuildAction {
  return typeof value === "string" && buildActions.includes(value);
}

export const random = (min: number, max: number) =>
  min + Math.random() * (max - min);

export const clamp = (value: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, value));

export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Inline styles an action may write; all of them are cleared when it ends. */
const animatedProperties = [
  "transform",
  "transform-origin",
  "clip-path",
  "opacity",
  "--build-color",
] as const;

/** A target in its blueprint state, with the random choices of its action. */
export function createTarget(
  element: HTMLElement,
  action: BuildAction,
  isFirstScreen: boolean,
  parent: BuildTarget | null,
): BuildTarget {
  return {
    element,
    action,
    isFirstScreen,
    parent,
    status: "idle",
    unlocked: false,
    startedAt: 0,
    duration: 0,
    clickX: random(0.35, 0.65),
    clickY: random(0.4, 0.6),
    grabX: Math.min(element.offsetWidth * random(0.25, 0.6), 140),
    grabY: Math.min(element.offsetHeight * random(0.3, 0.6), 60),
    offsetX:
      random(DRAG_OFFSET.x.min, DRAG_OFFSET.x.max) *
      (Math.random() < 0.5 ? -1 : 1),
    offsetY: random(DRAG_OFFSET.y.min, DRAG_OFFSET.y.max),
    rotation: random(-DRAG_OFFSET.rotation, DRAG_OFFSET.rotation),
    hasClicked: false,
    isRevealed: false,
    typing: null,
  };
}

/** Back to the blueprint (the debug "Replay"): no state, no inline styles. */
export function resetTarget(target: BuildTarget) {
  clearAction(target);
  delete target.element.dataset.buildState;
  target.status = "idle";
  target.unlocked = false;
  target.hasClicked = false;
  target.isRevealed = false;
}

/** Built: the element shows exactly as the page draws it without the animation. */
export function finishTarget(target: BuildTarget) {
  if (target.status === "done") return;
  clearAction(target);
  target.element.dataset.buildState = "done";
  target.status = "done";
}

function clearAction(target: BuildTarget) {
  const { element } = target;
  if (target.typing) {
    target.typing.layer.remove();
    target.typing = null;
  }
  for (const property of animatedProperties) {
    element.style.removeProperty(property);
  }
  delete element.dataset.buildWorking;
  delete element.dataset.buildDragging;
}

/** The point where the cursor starts the action. */
export function getStartPoint(target: BuildTarget, box: Box): [number, number] {
  switch (target.action) {
    case "type":
      return [box.left + 2, box.top + box.height * 0.55];
    case "draw":
      return [box.left, box.top];
    case "resize":
      return [
        box.left + box.width * RESIZE_START_SCALE,
        box.top + box.height * RESIZE_START_SCALE,
      ];
    case "line":
      return [box.left, box.top + box.height / 2];
    case "click":
      return [
        box.left + box.width * target.clickX,
        box.top + box.height * target.clickY,
      ];
    case "drag":
      return [
        box.left + target.grabX + target.offsetX,
        box.top + target.grabY + target.offsetY,
      ];
  }
}

/** Leaves the blueprint: from here on the element shows (and the action shapes it). */
function reveal(target: BuildTarget) {
  target.isRevealed = true;
  target.element.dataset.buildState = "run";
}

/** The cursor arrives: sets the action's first frame. speed scales the duration. */
export function beginAction(
  target: BuildTarget,
  cursor: ActionCursor,
  now: number,
  speed: number,
) {
  const { element } = target;
  target.status = "run";
  target.startedAt = now;

  switch (target.action) {
    case "type": {
      // The layer copies the element's colour: out of the blueprint (transparent text)
      // and before data-build-working (transparent again while it is typed).
      reveal(target);
      target.typing = createTypingLayer(element, cursor.color);
      target.duration =
        clamp(
          target.typing.total * TYPE_MS_PER_CHARACTER,
          TYPE_DURATION_RANGE.min,
          TYPE_DURATION_RANGE.max,
        ) * speed;
      cursor.setGlyph("ibeam");
      cursor.click();
      break;
    }
    case "draw":
      target.duration = ACTION_DURATIONS.draw * speed;
      cursor.setGlyph("cross");
      cursor.click();
      break;
    case "resize":
      target.duration = ACTION_DURATIONS.resize * speed;
      element.style.transformOrigin = "0 0";
      element.style.transform = `scale(${RESIZE_START_SCALE})`;
      reveal(target);
      cursor.setGlyph("resize");
      break;
    case "line":
      target.duration = ACTION_DURATIONS.line * speed;
      element.style.clipPath = "inset(0 100% 0 0)";
      reveal(target);
      cursor.setGlyph("cross");
      break;
    case "click":
      target.duration = ACTION_DURATIONS.click * speed;
      cursor.setGlyph("arrow");
      break;
    case "drag":
      target.duration = ACTION_DURATIONS.drag * speed;
      element.dataset.buildDragging = "";
      setDragTransform(target, 1);
      reveal(target);
      cursor.setGlyph("arrow");
      cursor.click();
      break;
  }

  element.style.setProperty("--build-color", cursor.color);
  element.dataset.buildWorking = "";
}

/**
 * One frame of the action at progress q (0 to 1), over the element's natural box.
 * Returns where the cursor is.
 */
export function stepAction(
  target: BuildTarget,
  cursor: ActionCursor,
  q: number,
  box: Box,
): [number, number] {
  const { element } = target;

  switch (target.action) {
    case "type": {
      if (target.typing) updateTyping(target.typing, q);
      // The hand stays where it clicked, with a slight tremor, while the caret moves.
      return [
        box.left + 2 + Math.sin(q * 20) * 0.6,
        box.top + box.height * 0.55,
      ];
    }
    case "draw": {
      const drawn = easeInOut(clamp(q / DRAW_RELEASE_AT));
      const width = box.width * drawn;
      const height = box.height * drawn;
      cursor.showSelection({ left: box.left, top: box.top, width, height });
      if (q > DRAW_RELEASE_AT) {
        if (!target.isRevealed) reveal(target);
        const fade = easeOut(
          clamp((q - DRAW_RELEASE_AT) / (1 - DRAW_RELEASE_AT)),
        );
        element.style.opacity = fade.toFixed(3);
      }
      return [box.left + width, box.top + height];
    }
    case "resize": {
      const scale =
        RESIZE_START_SCALE + (1 - RESIZE_START_SCALE) * easeInOut(q);
      element.style.transform = `scale(${scale.toFixed(4)})`;
      const width = box.width * scale;
      const height = box.height * scale;
      cursor.showSelection({ left: box.left, top: box.top, width, height });
      return [box.left + width, box.top + height];
    }
    case "line": {
      const traced = easeInOut(q);
      element.style.clipPath = `inset(0 ${((1 - traced) * 100).toFixed(2)}% 0 0)`;
      return [box.left + box.width * traced, box.top + box.height / 2];
    }
    case "click": {
      const x = box.width * target.clickX;
      const y = box.height * target.clickY;
      if (q > CLICK_AT && !target.hasClicked) {
        target.hasClicked = true;
        cursor.click();
        element.style.clipPath = `circle(0px at ${x}px ${y}px)`;
        reveal(target);
      }
      if (target.hasClicked) {
        const farthest = Math.hypot(
          Math.max(x, box.width - x),
          Math.max(y, box.height - y),
        );
        const radius =
          easeOut(clamp((q - CLICK_AT) / (1 - CLICK_AT))) * farthest;
        element.style.clipPath = `circle(${radius.toFixed(1)}px at ${x}px ${y}px)`;
      }
      const hover = q < CLICK_AT ? Math.sin(q * 30) * 1.5 : 0;
      return [box.left + x + hover, box.top + y];
    }
    case "drag": {
      const left = 1 - easeInOut(q);
      setDragTransform(target, left);
      if (q > 0.92) delete element.dataset.buildDragging;
      return [
        box.left + target.grabX + target.offsetX * left,
        box.top + target.grabY + target.offsetY * left,
      ];
    }
  }
}

/** remaining: 1 at the start of the drag, 0 in place. */
function setDragTransform(target: BuildTarget, remaining: number) {
  target.element.style.transform = `translate(${(target.offsetX * remaining).toFixed(1)}px, ${(target.offsetY * remaining).toFixed(1)}px) rotate(${(target.rotation * remaining).toFixed(2)}deg)`;
}

/**
 * The typed copy: an aria-hidden, inert layer over the element with a copy of its
 * content, where every text run is split into typed text and a transparent rest (so
 * the lines never rewrap) and icons wait until the caret reaches them. Each run stays in
 * one span, so a flex row (an icon and its text) keeps the same items and gaps.
 */
function createTypingLayer(element: HTMLElement, color: string): TypingState {
  const layer = document.createElement("span");
  layer.className = "sb-type-layer";
  layer.setAttribute("aria-hidden", "true");
  layer.inert = true;
  // The element's own colour; it turns transparent while it is typed.
  layer.style.color = getComputedStyle(element).color;

  for (const child of Array.from(element.childNodes)) {
    layer.append(child.cloneNode(true));
  }
  removeComments(layer);
  // React separates adjacent texts with comments; one run per text, as the browser
  // lays them out.
  layer.normalize();
  for (const node of Array.from(layer.querySelectorAll("[id]"))) {
    node.removeAttribute("id");
  }
  for (const link of Array.from(layer.querySelectorAll("a"))) {
    link.style.textDecorationColor = "transparent";
  }

  const caret = document.createElement("span");
  caret.className = "sb-caret";
  caret.style.background = color;

  const units: TypingUnit[] = [];
  let total = 0;

  function collect(node: Node) {
    for (const child of Array.from(node.childNodes)) {
      if (child instanceof Text) {
        if (!child.data) continue;
        const typed = document.createTextNode("");
        const rest = document.createElement("span");
        rest.className = "sb-type-rest";
        rest.textContent = child.data;
        const run = document.createElement("span");
        run.append(typed, rest);
        child.replaceWith(run);
        units.push({
          kind: "text",
          start: total,
          length: child.data.length,
          text: child.data,
          typed,
          rest,
        });
        total += child.data.length;
      } else if (
        child instanceof SVGElement ||
        child instanceof HTMLImageElement
      ) {
        child.setAttribute("data-build-unreached", "");
        units.push({ kind: "media", start: total, length: 1, element: child });
        total += 1;
      } else if (child instanceof Element) {
        collect(child);
      }
    }
  }
  collect(layer);

  if (element.hasAttribute("data-build-static")) {
    // No containing block of its own: the layer goes first, at its static position
    // (the top left of the content box), as wide as the content.
    const style = getComputedStyle(element);
    const contentWidth =
      element.clientWidth -
      parseFloat(style.paddingLeft) -
      parseFloat(style.paddingRight);
    layer.style.inset = "auto";
    layer.style.padding = "0";
    layer.style.width = `${contentWidth}px`;
    element.prepend(layer);
  } else {
    element.append(layer);
  }
  const typing: TypingState = { layer, caret, units, total, typedCount: -1 };
  updateTyping(typing, 0);
  return typing;
}

function removeComments(root: Node) {
  for (const child of Array.from(root.childNodes)) {
    if (child.nodeType === Node.COMMENT_NODE) child.remove();
    else removeComments(child);
  }
}

function updateTyping(typing: TypingState, q: number) {
  const typedCount = Math.round(q * typing.total);
  if (typedCount === typing.typedCount) return;
  typing.typedCount = typedCount;

  let caretPlaced = false;
  let lastText: HTMLElement | null = null;
  for (const unit of typing.units) {
    const typedHere = clamp(typedCount - unit.start, 0, unit.length);
    if (unit.kind === "media") {
      unit.element.toggleAttribute("data-build-unreached", typedHere < 1);
      continue;
    }
    unit.typed.data = unit.text.slice(0, typedHere);
    unit.rest.textContent = unit.text.slice(typedHere);
    lastText = unit.rest;
    if (!caretPlaced && typedHere < unit.length) {
      unit.rest.before(typing.caret);
      caretPlaced = true;
    }
  }
  if (!caretPlaced && lastText) lastText.before(typing.caret);
}
