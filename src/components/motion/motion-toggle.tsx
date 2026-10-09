"use client";

import { useSyncExternalStore } from "react";

import { PauseIcon, PlayIcon } from "@/components/ui/icons";
import {
  getServerMotionSnapshot,
  isMotionPaused,
  setMotionPaused,
  subscribeToMotionPause,
} from "@/lib/motion-preference";

interface MotionToggleProps {
  label: string;
}

/**
 * Pauses the looping motion (rotating title, drifting background, orbit, floating
 * chips) for visitors who find it distracting (WCAG 2.2.2). A toggle button: pressed
 * means paused. Hidden when the system already asks for reduced motion, because then
 * nothing loops.
 */
export function MotionToggle({ label }: MotionToggleProps) {
  const isPaused = useSyncExternalStore(
    subscribeToMotionPause,
    isMotionPaused,
    getServerMotionSnapshot,
  );

  return (
    <button
      type="button"
      aria-pressed={isPaused}
      onClick={() => setMotionPaused(!isPaused)}
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-small font-bold text-muted transition-colors hover:text-heading motion-reduce:hidden"
    >
      {isPaused ? (
        <PlayIcon className="size-4" />
      ) : (
        <PauseIcon className="size-4" />
      )}
      {label}
    </button>
  );
}
