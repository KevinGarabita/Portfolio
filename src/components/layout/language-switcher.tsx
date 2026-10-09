"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";

import {
  preferredLocaleCookieName,
  supportedLocales,
  type Locale,
} from "@/i18n/locales";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  otherLanguageName: string;
}

const oneYearInSeconds = 60 * 60 * 24 * 365;

/** Links to the same page in the other language, e.g. /es/projects/x ↔ /en/projects/x. */
export function LanguageSwitcher({
  currentLocale,
  label,
  otherLanguageName,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale =
    supportedLocales.find((locale) => locale !== currentLocale) ??
    currentLocale;
  const pathWithoutLocale = pathname.replace(
    new RegExp(`^/${currentLocale}(?=/|$)`),
    "",
  );
  const otherLocaleHref = `/${otherLocale}${pathWithoutLocale}`;

  /** Remembers the choice for the next visit and keeps the current section (#contact). */
  function switchLanguage(event: MouseEvent<HTMLAnchorElement>) {
    document.cookie = `${preferredLocaleCookieName}=${otherLocale}; path=/; max-age=${oneYearInSeconds}; samesite=lax`;

    const { hash, search } = window.location;
    const isPlainClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;
    if (!isPlainClick || (!hash && !search)) return;

    event.preventDefault();
    router.push(`${otherLocaleHref}${search}${hash}`);
  }

  return (
    <nav aria-label={label}>
      <Link
        href={otherLocaleHref}
        hrefLang={otherLocale}
        lang={otherLocale}
        onClick={switchLanguage}
        className="nav-link inline-flex min-h-11 items-center px-2 text-small font-bold text-heading"
      >
        {otherLanguageName}
      </Link>
    </nav>
  );
}
