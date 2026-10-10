"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";

import { CheckIcon, ChevronDownIcon } from "@/components/ui/icons";
import { LocaleFlag } from "@/components/ui/locale-flag";
import {
  localeNames,
  preferredLocaleCookieName,
  supportedLocales,
  type Locale,
} from "@/i18n/locales";
import { joinClassNames } from "@/lib/class-names";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  /** "Language", in the current language: names the landmark and the button. */
  label: string;
}

const oneYearInSeconds = 60 * 60 * 24 * 365;

/** Remembers the choice for the next visit: proxy.ts sends unprefixed URLs there. */
function rememberLocale(locale: Locale) {
  document.cookie = `${preferredLocaleCookieName}=${locale}; path=/; max-age=${oneYearInSeconds}; samesite=lax`;
}

/**
 * A button with the current language's flag that opens the list of languages; each one
 * links to the same page in that language (/en/projects/x → /pt/projects/x).
 *
 * Disclosure pattern, like the project filters: the button has aria-expanded and the
 * options are plain links, reached with Tab. Escape closes the list and returns focus to
 * the button; a click outside or moving focus out of it also closes it. Below lg the
 * button shrinks to the flag and the language code (EN), so the header row still fits
 * on phones and, from 52rem, on one line with the section links.
 *
 * The button's name is "Language: English" from lg and "Language: English, EN" below
 * it: the visible code stays part of the name (WCAG 2.5.3), and the parts are separated
 * so neither the name nor the text runs words together.
 */
export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const pathWithoutLocale = pathname.replace(
    new RegExp(`^/${currentLocale}(?=/|$)`),
    "",
  );

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

  /** Tabbing past the last language (or back past the button) closes the list. */
  function closeWhenFocusLeaves(event: FocusEvent<HTMLDivElement>) {
    const nextFocused = event.relatedTarget;
    if (nextFocused && !event.currentTarget.contains(nextFocused)) {
      setIsOpen(false);
    }
  }

  /** Saves the choice and keeps the current section (#contact) and search. */
  function switchLanguage(
    event: MouseEvent<HTMLAnchorElement>,
    locale: Locale,
    href: string,
  ) {
    setIsOpen(false);
    if (locale === currentLocale) {
      event.preventDefault();
      return;
    }

    rememberLocale(locale);

    const { hash, search } = window.location;
    const isPlainClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;
    if (!isPlainClick || (!hash && !search)) return;

    event.preventDefault();
    router.push(`${href}${search}${hash}`);
  }

  return (
    <nav aria-label={label}>
      <div
        ref={containerRef}
        onBlur={closeWhenFocusLeaves}
        className="relative"
      >
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={listId}
          onClick={() => setIsOpen((open) => !open)}
          className={joinClassNames(
            "inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-1 rounded-control border px-1.5 text-small font-bold text-heading transition-colors hover:bg-raised-strong sm:gap-2 sm:px-3",
            isOpen ? "border-hairline bg-raised-strong" : "border-transparent",
          )}
        >
          <LocaleFlag locale={currentLocale} />
          <span className="sr-only">{label}: </span>
          <span lang={currentLocale} className="max-lg:sr-only">
            {localeNames[currentLocale]}
            {/* Read only below lg, where the code follows: "Español, ES". */}
            <span className="lg:hidden">,</span>
          </span>{" "}
          {/* Below lg the code stands in for the name. It is read too, so the visible
              text stays part of the button's accessible name. */}
          <span className="font-mono lg:hidden">
            {currentLocale.toUpperCase()}
          </span>
          <ChevronDownIcon
            className={joinClassNames(
              "size-4 text-muted transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        <ul
          id={listId}
          hidden={!isOpen}
          className="absolute top-full right-0 z-(--layer-header) mt-2 w-max min-w-48 rounded-control border border-hairline bg-raised-strong p-1.5 shadow-(--shadow-floating)"
        >
          {supportedLocales.map((locale) => {
            const isCurrent = locale === currentLocale;
            const href = `/${locale}${pathWithoutLocale}`;

            return (
              <li key={locale}>
                <Link
                  href={href}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={(event) => switchLanguage(event, locale, href)}
                  className={joinClassNames(
                    "flex min-h-11 items-center gap-3 rounded-[0.5rem] px-3 text-small no-underline transition-colors hover:bg-control-border",
                    isCurrent ? "font-bold text-heading" : "text-body",
                  )}
                >
                  <LocaleFlag locale={locale} />
                  <span className="flex-1">{localeNames[locale]}</span>
                  {isCurrent ? (
                    <CheckIcon className="size-4 text-accent" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
