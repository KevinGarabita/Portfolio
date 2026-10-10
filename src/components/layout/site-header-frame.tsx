"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The sticky <header> element and its scroll state. While the page is at the very top
 * the header is transparent and its row sits 8 px lower (data-at-top); once the page
 * scrolls, a blurred background and a hairline fade in and the row moves up. Everything
 * changes with opacity and transform (globals.css, .site-header), so the page never shifts.
 *
 * The server renders the solid state, so without JavaScript the header still has a
 * background over scrolled content.
 */
export function SiteHeaderFrame({ children }: { children: ReactNode }) {
  const topSentinelRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const topSentinel = topSentinelRef.current;
    if (!topSentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsAtTop(entry?.isIntersecting ?? false);
    });
    observer.observe(topSentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* A small marker at the top of the document: visible = page at the top. */}
      <div
        ref={topSentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-2 w-px"
      />
      <header className="site-header" data-at-top={isAtTop ? "" : undefined}>
        {children}
      </header>
    </>
  );
}
