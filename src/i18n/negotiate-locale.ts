import { fallbackLocale, isSupportedLocale, type Locale } from "./locales";

interface LanguagePreference {
  languageCode: string;
  quality: number;
  position: number;
}

/** Parses an Accept-Language header such as "es-MX,es;q=0.9,en;q=0.8". */
function parseAcceptLanguage(headerValue: string): LanguagePreference[] {
  return headerValue
    .split(",")
    .map((entry, position) => {
      const [languageTag = "", ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith("q="));
      const quality = qualityParameter ? Number(qualityParameter.slice(2)) : 1;

      return {
        languageCode: languageTag.trim().toLowerCase().split("-")[0] ?? "",
        quality: Number.isFinite(quality) ? quality : 0,
        position,
      };
    })
    .filter(
      (preference) => preference.languageCode !== "" && preference.quality > 0,
    )
    .sort(
      (first, second) =>
        second.quality - first.quality || first.position - second.position,
    );
}

/** Picks the supported locale the visitor prefers most, or the fallback locale. */
export function negotiateLocale(acceptLanguageHeader: string | null): Locale {
  if (!acceptLanguageHeader) return fallbackLocale;

  for (const preference of parseAcceptLanguage(acceptLanguageHeader)) {
    if (isSupportedLocale(preference.languageCode))
      return preference.languageCode;
  }

  return fallbackLocale;
}
