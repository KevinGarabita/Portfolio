import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { englishDictionary } from "./dictionaries/english";
import { spanishDictionary, type Dictionary } from "./dictionaries/spanish";
import { isSupportedLocale, type Locale } from "./locales";

const dictionariesByLocale: Record<Locale, Dictionary> = {
  es: spanishDictionary,
  en: englishDictionary,
};

/** Locale of the current request, read from the [lang] segment. Server Components only. */
export async function getCurrentLocale(): Promise<Locale> {
  const locale = await lang();
  if (!isSupportedLocale(locale)) notFound();
  return locale;
}

/** Interface text for the current request's locale. Server Components only. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionariesByLocale[await getCurrentLocale()];
}
