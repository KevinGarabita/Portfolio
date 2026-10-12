import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { MailIcon, WhatsAppLogoIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
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
 * The close of the page: one line that invites the visitor to say what they need, in
 * the hero's voice and a step smaller, then WhatsApp (the primary action, as in the
 * hero) and email; under them the address, the place and the profiles (which open in
 * a new tab), side by side from sm.
 */
export async function ContactSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.contact;
  const { location } = profile;

  return (
    <PageSection id={homeSectionIds.contact} title={labels.sectionTitle}>
      <p className="max-w-[18em] font-display text-title font-bold text-heading">
        {labels.lead}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink
          href={buildWhatsAppUrl(locale)}
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

      <dl className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
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
