import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";

export async function ContactSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.contact;

  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">{labels.sectionTitle}</h2>
      <dl>
        <dt>{labels.email}</dt>
        <dd>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </dd>
        <dt>{labels.phone}</dt>
        <dd>
          <a href={`tel:${profile.phone.international}`}>
            {profile.phone.display}
          </a>
        </dd>
      </dl>
      <p>
        {profile.location.city}, {profile.location.region},{" "}
        {localize(profile.location.country, locale)} ·{" "}
        {localize(profile.workMode, locale)}
      </p>
      <p>{localize(profile.availability, locale)}</p>
      <a href={profile.resumeFiles[locale]} download>
        {labels.downloadResume}
      </a>
    </section>
  );
}
