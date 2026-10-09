import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
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
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a
              href={buildWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2"
            >
              {dictionary.contact.whatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </a>
          </li>
          {profile.socialProfiles.map((socialProfile) => (
            <li key={socialProfile.network}>
              <a
                href={socialProfile.url}
                rel="me"
                className="inline-block py-2"
              >
                {socialNetworkNames[socialProfile.network]}
              </a>
            </li>
          ))}
          <li>
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
