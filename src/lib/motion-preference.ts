/**
 * Shared motion state for the client components (browser only).
 *
 * - Reduced motion comes from the operating system (prefers-reduced-motion).
 * - "Paused" is the visitor's own choice from the hero button. It is stored on <html> as
 *   data-motion="paused" (the CSS stops the looping decoration with it) and remembered
 *   in localStorage when the browser allows it.
 *
 * Both are read with useSyncExternalStore, so every component sees the same value.
 */

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const pausedAttributeName = "data-motion";
const pausedAttributeValue = "paused";
const storageKey = "motion-paused";
const pauseChangeEventName = "motion-pause-change";

export function subscribeToReducedMotion(onChange: () => void): () => void {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia(reducedMotionQuery).matches;
}

export function subscribeToMotionPause(onChange: () => void): () => void {
  window.addEventListener(pauseChangeEventName, onChange);
  return () => window.removeEventListener(pauseChangeEventName, onChange);
}

export function isMotionPaused(): boolean {
  return (
    document.documentElement.getAttribute(pausedAttributeName) ===
    pausedAttributeValue
  );
}

export function setMotionPaused(isPaused: boolean): void {
  if (isPaused) {
    document.documentElement.setAttribute(
      pausedAttributeName,
      pausedAttributeValue,
    );
  } else {
    document.documentElement.removeAttribute(pausedAttributeName);
  }

  try {
    if (isPaused) {
      window.localStorage.setItem(storageKey, "true");
    } else {
      window.localStorage.removeItem(storageKey);
    }
  } catch {
    // Storage can be blocked (private windows, strict settings); the choice then lasts
    // until the page is closed.
  }

  window.dispatchEvent(new Event(pauseChangeEventName));
}

/** Applies the choice remembered from an earlier visit. */
export function restoreMotionPause(): void {
  let wasPaused = false;
  try {
    wasPaused = window.localStorage.getItem(storageKey) === "true";
  } catch {
    // Same as above: without storage there is nothing to restore.
  }

  if (wasPaused && !isMotionPaused()) setMotionPaused(true);
}

/** Server snapshot: no reduced motion and no pause, which matches the HTML the server sends. */
export function getServerMotionSnapshot(): boolean {
  return false;
}
