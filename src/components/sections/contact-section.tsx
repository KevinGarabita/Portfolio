import Link from "next/link";
import type { ReactNode } from "react";

import { AvailabilityNote } from "@/components/recruiter/availability-note";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
import { getResumeLink } from "@/lib/resume";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ContactDetailProps {
  label: string;
  children: ReactNode;
}

function ContactDetail({ label, children }: ContactDetailProps) {
  return (
    <div>
      <dt className="text-small font-bold text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * The close of the page. Recruiters first: one line that speaks to both audiences, in
 * the hero's voice and a step smaller; Kevin's availability; the same two actions as the
 * hero, the CV (primary) and WhatsApp; and a short way in for clients, to the services
 * page. Under them the address (the one email link), the place and the profiles (which
 * open in a new tab), side by side from sm.
 */
export async function ContactSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.contact;
  const { location } = profile;
  const resume = getResumeLink(locale);

  return (
    <PageSection id={homeSectionIds.contact} title={labels.sectionTitle}>
      <p className="max-w-[20em] font-display text-title font-bold text-heading">
        {labels.homeLead}
      </p>

      <AvailabilityNote
        locale={locale}
        dictionary={dictionary}
        className="mt-6"
      />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink
          href={resume.href}
          hrefLang={resume.language}
          type="application/pdf"
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon={<ExternalLinkIcon className="size-4" />}
        >
          {dictionary.resume.view}
          <span className="sr-only"> ({dictionary.opensInNewTab})</span>
        </ButtonLink>
        <ButtonLink
          href={buildWhatsAppUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          leadingIcon={<WhatsAppLogoIcon colors="brand" />}
        >
          {dictionary.hero.writeOnWhatsApp}
          <span className="sr-only"> ({dictionary.opensInNewTab})</span>
        </ButtonLink>
      </div>

      <p className="mt-6 flex flex-wrap items-center gap-x-2 text-muted">
        <span>{labels.servicesPrompt}</span>
        <Link
          href={`/${locale}/services`}
          className="group inline-flex min-h-11 items-center gap-1.5 font-bold"
        >
          {labels.servicesLink}
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </p>

      <dl className="mt-10 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-3 sm:gap-6">
        <ContactDetail label={labels.email}>
          <a href={`mailto:${profile.email}`} className="wrap-anywhere">
            {profile.email}
          </a>
        </ContactDetail>

        <ContactDetail label={labels.location}>
          {location.city}, {location.region},{" "}
          {localize(location.country, locale)}
        </ContactDetail>

        <ContactDetail label={labels.profiles}>
          <ul className="-mt-2.5">
            {profile.socialProfiles.map((socialProfile) => (
              <li key={socialProfile.network}>
                <a
                  href={socialProfile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2"
                >
                  <SocialNetworkLogo network={socialProfile.network} />
                  {socialNetworkNames[socialProfile.network]}
                  <span className="sr-only"> ({dictionary.opensInNewTab})</span>
                </a>
              </li>
            ))}
          </ul>
        </ContactDetail>
      </dl>
    </PageSection>
  );
}
