import type { Ref } from "react";

interface BuildIntroProps {
  ref: Ref<HTMLDivElement>;
}

/**
 * The intro over the page: black with a dim "K." in the middle, which the cursors orbit
 * before they burst out and mark the screen. It is in the server HTML but only shows
 * under html.sb-intro (set before the first paint), so it covers the page from the very
 * first frame. Decorative: hidden from screen readers.
 */
export function BuildIntro({ ref }: BuildIntroProps) {
  return (
    <div ref={ref} aria-hidden="true" className="sb-intro-layer">
      <span className="sb-intro-logo">
        K<span className="text-accent">.</span>
      </span>
    </div>
  );
}
