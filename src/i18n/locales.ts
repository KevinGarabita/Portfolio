export const supportedLocales = ["es", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

/** Language served when the visitor's browser prefers neither Spanish nor English. */
export const fallbackLocale: Locale = "en";

export function isSupportedLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value);
}
