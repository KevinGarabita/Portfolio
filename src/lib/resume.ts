import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/locales";

/**
 * The CV PDF for a page's language and the language the PDF is written in, for the
 * link's hrefLang. A page links to the CV in its own language when there is one and to
 * the Spanish CV otherwise (Kevin's choice); today that is the case of Portuguese and
 * French.
 */
export function getResumeLink(locale: Locale): {
  href: string;
  language: Locale;
} {
  const ownLanguageFile = profile.resumeFiles[locale];

  return ownLanguageFile
    ? { href: ownLanguageFile, language: locale }
    : { href: profile.resumeFiles.es, language: "es" };
}
