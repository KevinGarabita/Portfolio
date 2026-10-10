import { englishDictionary } from "./dictionaries/english";
import { frenchDictionary } from "./dictionaries/french";
import { portugueseDictionary } from "./dictionaries/portuguese";
import { spanishDictionary, type Dictionary } from "./dictionaries/spanish";
import type { Locale } from "./locales";

/**
 * Interface text of every language. A Record, so adding a language to supportedLocales
 * fails the type check until its dictionary is registered here. Safe to import anywhere
 * (pages, route handlers such as the Open Graph images, the global 404); inside the
 * [lang] tree, Server Components use getDictionary() from request-locale.ts instead.
 */
export const dictionariesByLocale: Record<Locale, Dictionary> = {
  es: spanishDictionary,
  en: englishDictionary,
  pt: portugueseDictionary,
  fr: frenchDictionary,
};
