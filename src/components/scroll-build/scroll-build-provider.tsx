"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type { ActionLabels } from "./actions";
import { BuildDebug } from "./build-debug";
import { BuildIntro } from "./build-intro";
import {
  DEBUG_QUERY_PARAMETER,
  REPLAY_PER_SESSION,
  SESSION_STORAGE_KEY,
} from "./config";
import {
  createScrollBuild,
  type BuildStatus,
  type ScrollBuild,
} from "./engine";
import { SwarmCursors } from "./swarm-cursors";

interface ScrollBuildProviderProps {
  /** The cursors' pills ("typing", "inserting image"...), in the page's language. */
  labels: ActionLabels;
  children: ReactNode;
}

interface BuildDecision {
  play: boolean;
  withIntro: boolean;
  debug: boolean;
}

function isDebugRequested() {
  return new URLSearchParams(window.location.search).has(DEBUG_QUERY_PARAMETER);
}

/**
 * Whether the build plays, and with the intro. On a full load the inline script of the
 * layout already decided it before the first paint (html.sb); otherwise (a client-side
 * navigation to the home page) the same rules apply here: never with reduced motion,
 * once per session unless REPLAY_PER_SESSION or ?debug-build, and no intro when the
 * visitor lands on a section (#contact).
 */
function decide(): BuildDecision {
  const html = document.documentElement;
  const debug = isDebugRequested();
  const no = { play: false, withIntro: false, debug };

  // The inline script gave up waiting for JavaScript: the page already shows built.
  if (html.hasAttribute("data-sb-timeout")) return no;
  if (html.classList.contains("sb")) {
    return {
      play: true,
      withIntro: html.classList.contains("sb-intro"),
      debug,
    };
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return no;
  try {
    if (
      !debug &&
      !REPLAY_PER_SESSION &&
      sessionStorage.getItem(SESSION_STORAGE_KEY)
    ) {
      return no;
    }
  } catch {
    return no;
  }
  return { play: true, withIntro: !window.location.hash, debug };
}

/**
 * The home page's scroll build: renders the sections (children, server HTML untouched)
 * with the intro and the cursors on top, and runs the engine. Everything the animation
 * does is a layer over the content: the sections only carry data-build attributes, so
 * without JavaScript, with reduced motion or once seen in the session the page is
 * simply the page.
 *
 * Starts in a layout effect, before the browser paints, so a client-side navigation
 * shows the blueprint from its first frame too. Leaving the page (or switching
 * language) destroys the engine and leaves everything built.
 */
export function ScrollBuildProvider({
  labels,
  children,
}: ScrollBuildProviderProps) {
  const cursorsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<ScrollBuild | null>(null);
  // Decided once: React's development double effect must not see the session flag the
  // first run just wrote.
  const decisionRef = useRef<BuildDecision | null>(null);
  const [isDebug, setIsDebug] = useState(false);
  const [status, setStatus] = useState<BuildStatus | null>(null);
  // Read by the engine when a cursor starts a task, so new labels never restart it.
  const labelsRef = useRef(labels);

  useEffect(() => {
    labelsRef.current = labels;
  }, [labels]);

  useLayoutEffect(() => {
    const html = document.documentElement;
    // Tells the inline script that JavaScript arrived in time.
    html.setAttribute("data-sb-ready", "");

    decisionRef.current ??= decide();
    const decision = decisionRef.current;
    const cursorsLayer = cursorsRef.current;
    const intro = introRef.current;
    if (!decision.play || !cursorsLayer || !intro) {
      html.classList.remove("sb", "sb-intro");
      return;
    }

    const engine = createScrollBuild({
      cursors: Array.from(
        cursorsLayer.querySelectorAll<HTMLElement>(".sb-cursor"),
      ),
      selections: Array.from(
        cursorsLayer.querySelectorAll<HTMLElement>(".sb-selection"),
      ),
      intro,
      getLabels: () => labelsRef.current,
      onStatusChange: decision.debug ? setStatus : undefined,
    });
    engineRef.current = engine;
    engine.start(decision.withIntro);
    setIsDebug(decision.debug);

    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <>
      {children}
      <BuildIntro ref={introRef} />
      <SwarmCursors ref={cursorsRef} />
      {isDebug ? (
        <BuildDebug
          status={status}
          onReplay={() => engineRef.current?.start(true)}
        />
      ) : null}
    </>
  );
}
