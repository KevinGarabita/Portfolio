"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { joinClassNames } from "@/lib/class-names";
import {
  getServerMotionSnapshot,
  isMotionPaused,
  prefersReducedMotion,
  subscribeToMotionPause,
  subscribeToReducedMotion,
} from "@/lib/motion-preference";

/** How long each title stays on screen. */
const rotationIntervalInMilliseconds = 3000;

interface RotatingTitleProps {
  titles: string[];
  /** Classes for the box that holds the titles (size, spacing, entrance). */
  className?: string;
  /** Classes for each title, e.g. gradient text (it must sit on the text itself). */
  titleClassName?: string;
}

interface RotationState {
  activeIndex: number;
  /** The title fading out, until its transition ends; then it waits below again. */
  leavingIndex: number | null;
}

/**
 * Visual-only title that changes every 3 seconds with a fade and a short rise.
 *
 * - No layout shift: all titles share one grid cell (globals.css, .rotating-title),
 *   so the box always has the size of the largest one.
 * - Screen readers: hidden (aria-hidden). The heading around it carries every title
 *   as static text, so nothing is announced on each change.
 * - Reduced motion shows the first title and never rotates; the hero's pause button
 *   stops it where it is.
 */
export function RotatingTitle({
  titles,
  className,
  titleClassName,
}: RotatingTitleProps) {
  const isReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    prefersReducedMotion,
    getServerMotionSnapshot,
  );
  const isPaused = useSyncExternalStore(
    subscribeToMotionPause,
    isMotionPaused,
    getServerMotionSnapshot,
  );
  const [rotation, setRotation] = useState<RotationState>({
    activeIndex: 0,
    leavingIndex: null,
  });
  const canRotate = titles.length > 1 && !isReducedMotion && !isPaused;

  useEffect(() => {
    if (!canRotate) return;

    const intervalId = window.setInterval(() => {
      setRotation(({ activeIndex }) => ({
        activeIndex: (activeIndex + 1) % titles.length,
        leavingIndex: activeIndex,
      }));
    }, rotationIntervalInMilliseconds);

    return () => window.clearInterval(intervalId);
  }, [canRotate, titles.length]);

  const shownIndex = isReducedMotion ? 0 : rotation.activeIndex;

  function getTitleState(index: number): "active" | "leaving" | "waiting" {
    if (index === shownIndex) return "active";
    if (index === rotation.leavingIndex && !isReducedMotion) return "leaving";
    return "waiting";
  }

  return (
    <span
      aria-hidden="true"
      className={joinClassNames("rotating-title", className)}
    >
      {titles.map((title, index) => (
        <span
          key={title}
          data-state={getTitleState(index)}
          className={joinClassNames("block", titleClassName)}
          onTransitionEnd={(event) => {
            if (
              event.propertyName === "opacity" &&
              index === rotation.leavingIndex
            ) {
              setRotation((current) => ({ ...current, leavingIndex: null }));
            }
          }}
        >
          {title}
        </span>
      ))}
    </span>
  );
}
