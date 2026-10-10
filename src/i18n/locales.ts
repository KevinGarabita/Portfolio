export const supportedLocales = ["es", "en", "pt", "fr"] as const;

export type Locale = (typeof supportedLocales)[number];

/** Language served to a visitor who has not picked one in the switcher (no cookie). */
export const defaultLocale: Locale = "en";

export function isSupportedLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value);
}

/** Cookie set by the language switcher; the proxy prefers it over the default language. */
export const preferredLocaleCookieName = "preferred-locale";

/**
 * Each language in its own words, for the language switcher. Endonyms read the same in
 * every interface language, so they need no translation.
 */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
};

/**
 * The regional variant each language is written in (BCP 47): Mexican Spanish, US
 * English, Brazilian Portuguese and French from France. Dates (lib/format-date.ts) and
 * Open Graph locales (lib/metadata.ts) follow it; the switcher shows the matching flag.
 */
export const regionalLocaleTags: Record<Locale, string> = {
  es: "es-MX",
  en: "en-US",
  pt: "pt-BR",
  fr: "fr-FR",
};
