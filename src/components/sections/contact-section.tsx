import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppLogoIcon, MailIcon } from "@/components/ui/icons";
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
    <div className="border-t border-hairline py-4">
      <dt className="text-small text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * The closing panel: the email, large, with WhatsApp and email buttons, then the place
 * and the profiles (which open in a new tab) side by side from sm. The panel has the
 * gradient ring and a soft orange glow.
 */
export async function ContactSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.contact;
  const { location } = profile;
  const whatsAppUrl = buildWhatsAppUrl(locale);
  // Lets the large address break before the @, never inside the domain.
  const [emailUser, emailDomain] = profile.email.split("@");

  return (
    <PageSection
      id={homeSectionIds.contact}
      title={labels.sectionTitle}
      spacing="spacious"
    >
      <div className="gradient-ring rounded-section border p-4 min-[22.5rem]:p-6 sm:p-10 lg:p-14">
        {/* The glow is clipped by its own box, so the panel can keep its gradient ring. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
        >
          <div className="absolute -top-1/2 -right-1/4 aspect-square w-[min(48rem,120%)] rounded-full bg-[radial-gradient(closest-side,var(--tint-accent),transparent)]" />
        </div>

        <p className="text-small text-muted">{labels.email}</p>
        {/* The <wbr> would split the accessible name ("kevingarabita0 @outlook.com"). */}
        <a
          href={`mailto:${profile.email}`}
          aria-label={profile.email}
          className="mt-2 inline-block font-display text-subtitle font-extrabold wrap-anywhere sm:text-title lg:text-headline"
        >
          {emailUser}
          <wbr />@{emailDomain}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            leadingIcon={<WhatsAppLogoIcon />}
            className="max-[22.5rem]:px-4"
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

        <dl className="mt-12 grid gap-x-10 sm:grid-cols-2">
          <ContactDetail label={labels.location}>
            {location.city}, {location.region},{" "}
            {localize(location.country, locale)}
          </ContactDetail>

          <ContactDetail label={labels.profiles}>
            <ul>
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
                    <span className="sr-only">
                      {" "}
                      ({dictionary.opensInNewTab})
                    </span>
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
