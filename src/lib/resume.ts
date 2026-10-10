import { profile } from "@/content/profile";
import { supportedLocales, type Locale } from "@/i18n/locales";

/**
 * The CV PDF for a page's language and the language the PDF is written in, for the
 * link's hrefLang. Only Spanish and English CVs exist; Portuguese and French pages link
 * to the English one, so the PDF's language is the first locale that uses the same file.
 */
export function getResumeLink(locale: Locale): {
  href: string;
  language: Locale;
} {
  const href = profile.resumeFiles[locale];
  const language =
    supportedLocales.find(
      (candidate) => profile.resumeFiles[candidate] === href,
    ) ?? locale;

  return { href, language };
}
