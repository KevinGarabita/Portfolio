import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { dictionariesByLocale } from "./dictionaries-by-locale";
import type { Dictionary } from "./dictionaries/spanish";
import { isSupportedLocale, type Locale } from "./locales";

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
