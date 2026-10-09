import type { ReactNode } from "react";

import { PageSection } from "@/components/ui/page-section";
import { profile } from "@/content/profile";
import { supportedLocales } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { formatUtcOffset } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { socialNetworkNames } from "@/lib/social-networks";

interface ContactDetailProps {
  label: string;
  children: ReactNode;
  /** Spans both columns on wider screens. */
  isWide?: boolean;
}

function ContactDetail({
  label,
  children,
  isWide = false,
}: ContactDetailProps) {
  return (
    <div
      className={joinClassNames(
        "border-t border-hairline py-4",
        isWide && "sm:col-span-2",
      )}
    >
      <dt className="text-small text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * The site's one ink block. Email first and largest, then three pairs on wider screens:
 * phone and place, work mode and availability (with its time zone), CV and profiles.
 * The WhatsApp link appears only once Kevin confirms the number uses it.
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

  return (
    <PageSection
      id={homeSectionIds.contact}
      title={labels.sectionTitle}
      spacing="spacious"
      surface="inverse"
    >
      <dl className="grid gap-x-10 sm:grid-cols-2">
        <ContactDetail label={labels.email} isWide>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block py-1 font-display text-subtitle font-bold wrap-anywhere sm:text-title"
          >
            {profile.email}
          </a>
        </ContactDetail>

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
            {phone.hasWhatsApp === true ? (
              <li>
                <a
                  href={`https://wa.me/${phone.international.replace(/\D/g, "")}`}
                  className="inline-block py-1"
                >
                  {labels.whatsApp}
                </a>
              </li>
            ) : null}
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
                  className="inline-block py-1"
                >
                  {socialNetworkNames[socialProfile.network]}
                </a>
              </li>
            ))}
          </ul>
        </ContactDetail>
      </dl>
    </PageSection>
  );
}
