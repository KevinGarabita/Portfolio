import { Container } from "@/components/ui/container";
import { SocialIconLink } from "@/components/ui/social-icon-link";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getResumeLink } from "@/lib/resume";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Name and role, then WhatsApp, the profiles and the CV. Every link opens in a
 * new tab (the CV opens in the browser's PDF viewer). No year, so nothing goes stale.
 */
export async function SiteFooter() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const resume = getResumeLink(locale);

  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-col gap-6 py-10 text-small sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-bold text-heading">{profile.displayName}</span>
          <span className="block text-muted">
            {localize(profile.role, locale)}
          </span>
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <li>
            <SocialIconLink
              network="whatsapp"
              href={buildWhatsAppUrl(locale)}
              label={dictionary.contact.whatsApp}
              opensInNewTabText={dictionary.opensInNewTab}
            />
          </li>
          {profile.socialProfiles.map((socialProfile) => (
            <li key={socialProfile.network}>
              <SocialIconLink
                network={socialProfile.network}
                href={socialProfile.url}
                label={socialNetworkNames[socialProfile.network]}
                opensInNewTabText={dictionary.opensInNewTab}
                rel="me"
              />
            </li>
          ))}
          <li className="ml-3">
            <a
              href={resume.href}
              hrefLang={resume.language}
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              className="inline-flex min-h-11 items-center"
            >
              {dictionary.resume.view}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
