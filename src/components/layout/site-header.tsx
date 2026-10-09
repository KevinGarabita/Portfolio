import Link from "next/link";

import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";

import { LanguageSwitcher } from "./language-switcher";

/**
 * Name, section links and language switch. On phones the name and the language share
 * the first row and the section links wrap onto a second one, so nothing scrolls sideways.
 */
export async function SiteHeader() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const navigation = dictionary.siteNavigation;

  const navigationLinks = [
    { sectionId: homeSectionIds.projects, label: navigation.projects },
    { sectionId: homeSectionIds.experience, label: navigation.experience },
    { sectionId: homeSectionIds.about, label: navigation.about },
    { sectionId: homeSectionIds.contact, label: navigation.contact },
  ];

  return (
    <header className="bg-page">
      <Container>
        <div className="flex flex-wrap items-center gap-x-8 border-b border-hairline py-2 sm:py-3">
          <Link
            href={`/${locale}`}
            className="py-2 font-display text-subtitle font-extrabold text-heading no-underline"
          >
            {profile.displayName}
          </Link>

          <nav
            aria-label={navigation.label}
            className="order-last w-full sm:order-0 sm:ml-auto sm:w-auto"
          >
            <ul className="-ml-2 flex flex-wrap text-small sm:ml-0">
              {navigationLinks.map((navigationLink) => (
                <li key={navigationLink.sectionId}>
                  <Link
                    href={getHomeSectionHref(locale, navigationLink.sectionId)}
                    className="inline-block px-2 py-2"
                  >
                    {navigationLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto text-small sm:ml-0 sm:border-l sm:border-hairline sm:pl-6">
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.languageSwitcher.label}
              otherLanguageName={dictionary.languageSwitcher.otherLanguage}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
