import type { LocalizedText } from "@/types/content";

import { supportedLocales, type Locale } from "./locales";

/** Returns the version of a localized text for the given locale. */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

/** For names that read the same in every language, such as "n8n" or "Docker". */
export function sameInEveryLanguage(text: string): LocalizedText {
  return Object.fromEntries(
    supportedLocales.map((locale) => [locale, text]),
  ) as LocalizedText;
}
