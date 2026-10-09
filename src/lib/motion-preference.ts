/**
 * Shared motion state for the client components (browser only): reduced motion, from
 * the operating system (prefers-reduced-motion), read with useSyncExternalStore.
 */

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

export function subscribeToReducedMotion(onChange: () => void): () => void {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia(reducedMotionQuery).matches;
}

/** Server snapshot: no reduced motion, which matches the HTML the server sends. */
export function getServerMotionSnapshot(): boolean {
  return false;
}
