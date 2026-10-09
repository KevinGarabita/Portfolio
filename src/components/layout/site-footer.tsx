import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { socialNetworkNames } from "@/lib/social-networks";

/** Name and role, the profiles and the CV. No year, so nothing goes stale. */
export async function SiteFooter() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-4 border-t border-hairline py-8 text-small sm:flex-row sm:items-baseline sm:justify-between">
          <p>
            <span className="font-bold text-heading">
              {profile.displayName}
            </span>
            <span className="text-muted">
              {" · "}
              {localize(profile.role, locale)}
            </span>
          </p>
          <ul className="flex flex-wrap gap-x-6">
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
            <li>
              <a
                href={profile.resumeFiles[locale]}
                download
                hrefLang={locale}
                type="application/pdf"
                className="inline-block py-1"
              >
                {dictionary.resume.download}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
