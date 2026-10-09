import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { WhatsAppLogoIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { LanguageSwitcher } from "./language-switcher";
import { SiteHeaderFrame } from "./site-header-frame";

/**
 * Sticky header: monogram and name, section links, WhatsApp and the language switch.
 * Below 52rem the name, WhatsApp and the language share the first row and the section
 * links wrap onto a second one, so nothing scrolls sideways and no menu is needed.
 * Its height is --header-height in globals.css (used by scroll-padding-top).
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
    <SiteHeaderFrame>
      <Container>
        <div className="site-header-row relative flex flex-wrap items-center gap-x-3 pt-2 min-[52rem]:h-18 min-[52rem]:flex-nowrap min-[52rem]:gap-x-6 min-[52rem]:pt-0">
          <Link
            href={`/${locale}`}
            className="flex min-h-12 items-center gap-3 font-display text-subtitle font-extrabold text-heading no-underline"
          >
            <BrandMark className="site-header-mark" />
            <span className="max-[22.5rem]:sr-only">{profile.displayName}</span>
          </Link>

          <nav
            aria-label={navigation.label}
            className="order-last -mx-1 w-[calc(100%+0.5rem)] min-[22.5rem]:-mx-2 min-[22.5rem]:w-[calc(100%+1rem)] min-[52rem]:order-0 min-[52rem]:mx-0 min-[52rem]:ml-auto min-[52rem]:w-auto"
          >
            <ul className="flex flex-wrap">
              {navigationLinks.map((navigationLink) => (
                <li key={navigationLink.sectionId}>
                  <Link
                    href={getHomeSectionHref(locale, navigationLink.sectionId)}
                    className="nav-link inline-flex min-h-11 items-center px-1 text-small font-bold text-muted transition-colors hover:text-heading min-[22.5rem]:px-2 lg:px-3"
                  >
                    {navigationLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-3 min-[52rem]:ml-0">
            <ButtonLink
              href={buildWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="compact"
              leadingIcon={<WhatsAppLogoIcon colors="brand" />}
              className="max-sm:size-11 max-sm:gap-0 max-sm:px-0"
            >
              <span className="sr-only sm:not-sr-only">
                {dictionary.contact.whatsApp}
              </span>
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.languageSwitcher.label}
              otherLanguageName={dictionary.languageSwitcher.otherLanguage}
            />
          </div>
        </div>
      </Container>
    </SiteHeaderFrame>
  );
}
