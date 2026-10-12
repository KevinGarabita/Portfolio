import type { LocalizedText } from "@/types/content";

import { supportedLocales, type Locale } from "./locales";

/** Returns the version of a localized text for the given locale. */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

/**
 * The colon after a label ("Client: Controltec"), as the locale writes it. French puts a
 * space before it ("Client : Controltec"): a no-break space (U+00A0), so the colon never
 * wraps to a line of its own. The space after the colon is the caller's.
 */
export function labelColon(locale: Locale): string {
  return locale === "fr" ? "\u00A0:" : ":";
}

/** For names that read the same in every language, such as "n8n" or "Docker". */
export function sameInEveryLanguage(text: string): LocalizedText {
  return Object.fromEntries(
    supportedLocales.map((locale) => [locale, text]),
  ) as LocalizedText;
}
