import type { LocalizedText } from "@/types/content";

import type { Locale } from "./locales";

/** Returns the version of a localized text for the given locale. */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
