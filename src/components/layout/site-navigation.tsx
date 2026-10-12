"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FocusEvent } from "react";

import { CloseIcon, MenuIcon } from "@/components/ui/icons";

interface NavigationLink {
  href: string;
  label: string;
}

interface SiteNavigationProps {
  /** "Main navigation", in the page's language: names the landmark. */
  label: string;
  /** "Menu": the accessible name of the button that opens the list below lg. */
  menuLabel: string;
  links: NavigationLink[];
}

/**
 * The section links of the header. From lg they sit in the header row, each with an
 * orange underline that grows on hover or focus (.nav-link). Below lg the same list is
 * a menu: a 44 px button with three lines opens it as a panel under the header, one
 * link per row.
 *
 * Disclosure pattern, like the language switcher: the button has aria-expanded and the
 * links are plain links, reached with Tab. Escape closes the list and returns focus to
 * the button; a click outside, moving focus out of it or following a link also closes
 * it. data-menu-open keeps the header's background solid while the panel is open.
 */
export function SiteNavigation({
  label,
  menuLabel,
  links,
}: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /** Tabbing past the last link (or back past the button) closes the list. */
  function closeWhenFocusLeaves(event: FocusEvent<HTMLElement>) {
    const nextFocused = event.relatedTarget;
    if (nextFocused && !event.currentTarget.contains(nextFocused)) {
      setIsOpen(false);
    }
  }

  const ToggleIcon = isOpen ? CloseIcon : MenuIcon;

  return (
    <nav
      ref={containerRef}
      aria-label={label}
      onBlur={closeWhenFocusLeaves}
      data-menu-open={isOpen ? "" : undefined}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-control text-heading transition-colors hover:bg-raised-strong lg:hidden"
      >
        <ToggleIcon className="size-6" />
        <span className="sr-only">{menuLabel}</span>
      </button>

      {/* Below lg: a panel across the whole header (positioned against the sticky
          header), hidden until the button opens it. From lg: the row of links. */}
      <ul
        id={listId}
        data-open={isOpen ? "" : undefined}
        className="max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:hidden max-lg:flex-col max-lg:border-b max-lg:border-hairline max-lg:bg-page max-lg:px-0 max-lg:py-2 max-lg:shadow-(--shadow-floating) max-lg:data-open:flex sm:max-lg:px-2 lg:flex lg:items-center"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-link flex min-h-12 items-center rounded-control px-4 font-bold text-heading transition-colors max-lg:hover:bg-raised-strong lg:min-h-11 lg:px-3 lg:text-small lg:text-muted lg:hover:text-heading"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
