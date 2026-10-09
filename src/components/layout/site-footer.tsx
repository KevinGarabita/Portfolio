import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { SocialIconLink } from "@/components/ui/social-icon-link";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Monogram, name and role, then WhatsApp, the profiles and the CV. No year, so nothing goes stale. */
export async function SiteFooter() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-col gap-6 py-10 text-small sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark />
          <p>
            <span className="font-bold text-heading">
              {profile.displayName}
            </span>
            <span className="block text-muted">
              {localize(profile.role, locale)}
            </span>
          </p>
        </div>
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
                rel="me"
              />
            </li>
          ))}
          <li className="ml-3">
            <a
              href={profile.resumeFiles[locale]}
              download
              hrefLang={locale}
              type="application/pdf"
              className="inline-block py-2"
            >
              {dictionary.resume.download}
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
