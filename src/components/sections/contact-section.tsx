import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppLogoIcon, MailIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import { profile } from "@/content/profile";
import { supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatUtcOffset } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ContactDetailProps {
  label: string;
  children: ReactNode;
}

function ContactDetail({ label, children }: ContactDetailProps) {
  return (
    <div className="border-t border-hairline py-4">
      <dt className="text-small text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * The closing panel: the email, large, with WhatsApp and email buttons, then every
 * other detail in a grid (phone, place, work mode, availability with its time zone,
 * CV and profiles). The panel has the gradient ring and a soft orange glow.
 */
export async function ContactSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.contact;
  const { location, phone } = profile;
  // The visitor's language first.
  const resumeLocales = [
    locale,
    ...supportedLocales.filter((resumeLocale) => resumeLocale !== locale),
  ];
  const whatsAppUrl = buildWhatsAppUrl(locale);

  return (
    <PageSection
      id={homeSectionIds.contact}
      title={labels.sectionTitle}
      spacing="spacious"
    >
      <div className="gradient-ring rounded-section border border-transparent bg-raised p-6 sm:p-10 lg:p-14">
        {/* The glow is clipped by its own box, so the panel can keep its gradient ring. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
        >
          <div className="absolute -top-1/2 -right-1/4 aspect-square w-[min(48rem,120%)] rounded-full bg-[radial-gradient(closest-side,var(--tint-accent),transparent)]" />
        </div>

        <p className="text-small text-muted">{labels.email}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-2 inline-block font-display text-subtitle font-extrabold wrap-anywhere sm:text-title lg:text-headline"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            leadingIcon={<WhatsAppLogoIcon />}
          >
            {dictionary.hero.writeOnWhatsApp}
            <span className="sr-only"> ({dictionary.opensInNewTab})</span>
          </ButtonLink>
          <ButtonLink
            href={`mailto:${profile.email}`}
            variant="secondary"
            leadingIcon={<MailIcon className="text-accent" />}
          >
            {labels.sendEmail}
          </ButtonLink>
        </div>

        <dl className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          <ContactDetail label={labels.phone}>
            <ul>
              <li>
                <a
                  href={`tel:${phone.international}`}
                  className="inline-block py-1"
                >
                  {phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1"
                >
                  <WhatsAppLogoIcon colors="brand" />
                  {labels.whatsApp}
                  <span className="sr-only"> ({dictionary.opensInNewTab})</span>
                </a>
              </li>
            </ul>
          </ContactDetail>

          <ContactDetail label={labels.location}>
            {location.city}, {location.region},{" "}
            {localize(location.country, locale)}
          </ContactDetail>

          <ContactDetail label={labels.workMode}>
            {localize(profile.workMode, locale)}
          </ContactDetail>

          <ContactDetail label={labels.availability}>
            {localize(profile.availability, locale)}{" "}
            <span className="text-muted">
              {labels.timeZoneNote(
                location.city,
                formatUtcOffset(profile.timeZone),
              )}
            </span>
          </ContactDetail>

          <ContactDetail label={labels.resume}>
            <ul>
              {resumeLocales.map((resumeLocale) => (
                <li key={resumeLocale}>
                  <a
                    href={profile.resumeFiles[resumeLocale]}
                    download
                    hrefLang={resumeLocale}
                    type="application/pdf"
                    className="inline-block py-1"
                  >
                    {dictionary.resume.inLanguage[resumeLocale]}
                  </a>
                </li>
              ))}
            </ul>
          </ContactDetail>

          <ContactDetail label={labels.profiles}>
            <ul>
              {profile.socialProfiles.map((socialProfile) => (
                <li key={socialProfile.network}>
                  <a
                    href={socialProfile.url}
                    rel="me"
                    className="inline-flex items-center gap-2 py-1"
                  >
                    <SocialNetworkLogo network={socialProfile.network} />
                    {socialNetworkNames[socialProfile.network]}
                  </a>
                </li>
              ))}
            </ul>
          </ContactDetail>
        </dl>
      </div>
    </PageSection>
  );
}
