"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const pendingRevealSelector = "[data-reveal]:not([data-revealed])";
const revealReadyClassName = "js-reveal-ready";

function markRevealed(element: Element): void {
  element.setAttribute("data-revealed", "");
}

/**
 * Page-wide motion setup, rendered once in the layout. It renders nothing.
 *
 * Scroll reveal: elements marked data-reveal fade and rise in when they enter the
 * viewport. Progressive enhancement: the content is visible in the HTML; this first
 * marks everything already on screen (or above it) as revealed and only then adds
 * .js-reveal-ready to <html>, which is what lets the CSS hide the rest. Without
 * JavaScript, or with reduced motion (globals.css), nothing is ever hidden.
 *
 * It runs again on every client-side navigation, for the new page's elements.
 */
export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const pendingElements = Array.from(
      document.querySelectorAll(pendingRevealSelector),
    );

    const viewportHeight = window.innerHeight;
    for (const element of pendingElements) {
      if (element.getBoundingClientRect().top < viewportHeight) {
        markRevealed(element);
      }
    }
    document.documentElement.classList.add(revealReadyClassName);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          markRevealed(entry.target);
          observer.unobserve(entry.target);
        }
      },
      // Reveal a little before the element is fully in view.
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of pendingElements) {
      if (!element.hasAttribute("data-revealed")) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
