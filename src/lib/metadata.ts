import type { Metadata } from "next";

import { supportedLocales, type Locale } from "@/i18n/locales";

/**
 * Canonical URL and hreflang links for a page that exists in every language.
 * `pathWithoutLocale` starts with "/" ("/" for the home page, "/projects/x" for a project).
 * x-default points to the unprefixed path, which redirects visitors by browser language.
 */
export function buildLanguageAlternates(
  pathWithoutLocale: string,
  currentLocale: Locale,
): Metadata["alternates"] {
  const localizedPath = (locale: Locale) =>
    pathWithoutLocale === "/" ? `/${locale}` : `/${locale}${pathWithoutLocale}`;

  return {
    canonical: localizedPath(currentLocale),
    languages: {
      ...Object.fromEntries(
        supportedLocales.map((locale) => [locale, localizedPath(locale)]),
      ),
      "x-default": pathWithoutLocale,
    },
  };
}
