import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";

/** "About" text followed by the skills list, grouped as in the CV. */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">{dictionary.about.sectionTitle}</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph.es}>{localize(paragraph, locale)}</p>
      ))}

      <h3>{dictionary.skills.sectionTitle}</h3>
      <dl>
        {skillGroups.map((group) => (
          <div key={group.id}>
            <dt>{localize(group.title, locale)}</dt>
            <dd>
              {group.items.map((item) => localize(item, locale)).join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
