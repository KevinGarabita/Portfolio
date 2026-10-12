import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { WhatsAppLogoIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { LanguageSwitcher } from "./language-switcher";
import { SiteHeaderFrame } from "./site-header-frame";
import { SiteNavigation } from "./site-navigation";

/**
 * Sticky header, one row: the name (links home), the section links, the WhatsApp button
 * and the language menu. WhatsApp is always on screen: a green 44 px button with the
 * logo on phones, and with the word "WhatsApp" from sm. Below lg the section links fold
 * into a menu button (SiteNavigation), so the row fits down to 320 px; on the narrowest
 * phones (under 22.5rem) the name steps down to the body size. Its height is
 * --header-height in globals.css (used by scroll-padding-top).
 */
export async function SiteHeader() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const navigation = dictionary.siteNavigation;

  // "Proyectos" opens the page with every project; the rest are home page sections.
  const navigationLinks = [
    { href: `/${locale}/projects`, label: navigation.projects },
    {
      href: getHomeSectionHref(locale, homeSectionIds.experience),
      label: navigation.experience,
    },
    {
      href: getHomeSectionHref(locale, homeSectionIds.about),
      label: navigation.about,
    },
    {
      href: getHomeSectionHref(locale, homeSectionIds.contact),
      label: navigation.contact,
    },
  ];

  return (
    <SiteHeaderFrame>
      <Container>
        <div className="flex h-16 items-center gap-1 sm:gap-2 lg:h-18 lg:gap-4">
          <Link
            href={`/${locale}`}
            className="mr-auto flex min-h-11 items-center font-display text-subtitle font-bold whitespace-nowrap text-heading no-underline max-[22.5rem]:text-base"
          >
            {profile.displayName}
          </Link>

          <SiteNavigation
            label={navigation.label}
            menuLabel={navigation.menu}
            links={navigationLinks}
          />

          <ButtonLink
            href={buildWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="compact"
            leadingIcon={<WhatsAppLogoIcon />}
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
          />
        </div>
      </Container>
    </SiteHeaderFrame>
  );
}
