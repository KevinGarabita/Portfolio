"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { supportedLocales, type Locale } from "@/i18n/locales";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  otherLanguageName: string;
}

/** Links to the same page in the other language, e.g. /es/projects/x ↔ /en/projects/x. */
export function LanguageSwitcher({
  currentLocale,
  label,
  otherLanguageName,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const otherLocale =
    supportedLocales.find((locale) => locale !== currentLocale) ??
    currentLocale;
  const pathWithoutLocale = pathname.replace(
    new RegExp(`^/${currentLocale}(?=/|$)`),
    "",
  );

  return (
    <nav aria-label={label}>
      <Link
        href={`/${otherLocale}${pathWithoutLocale}`}
        hrefLang={otherLocale}
        lang={otherLocale}
      >
        {otherLanguageName}
      </Link>
    </nav>
  );
}
