import { PageSection } from "@/components/ui/page-section";
import { Tag } from "@/components/ui/tag";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they go in the quick facts instead. */
const languagesGroupId = "languages";

/**
 * Two rows. First, the CV paragraph at reading size beside a short card of quick facts
 * (location and work mode, focus, languages). Then the technical skills as a grid of
 * cards, one per CV group: one column on phones, two from sm, three from lg.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.about;

  const technicalSkillGroups = skillGroups.filter(
    (group) => group.id !== languagesGroupId,
  );
  const languages =
    skillGroups.find((group) => group.id === languagesGroupId)?.items ?? [];

  const quickFacts = [
    {
      label: labels.facts.location,
      value: `${profile.location.city}, ${profile.location.region} · ${localize(profile.workMode, locale)}`,
    },
    { label: labels.facts.focus, value: localize(profile.role, locale) },
    {
      label: labels.facts.languages,
      value: languages
        .map((language) => localize(language, locale))
        .join(" · "),
    },
  ];

  return (
    <PageSection id={homeSectionIds.about} title={labels.sectionTitle}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-4 lg:col-span-7">
          {profile.about.map((paragraph) => (
            <p key={paragraph.es} className="max-w-prose leading-relaxed">
              {localize(paragraph, locale)}
            </p>
          ))}
        </div>

        <dl className="flex flex-col divide-y divide-hairline rounded-section border border-hairline bg-raised px-6 lg:col-span-5 lg:self-start">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="py-4">
              <dt className="text-small text-muted">{fact.label}</dt>
              <dd className="mt-1 font-bold text-heading">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="mt-14 font-display text-title font-bold lg:mt-20">
        {dictionary.skills.sectionTitle}
      </h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {technicalSkillGroups.map((group) => (
          <li
            key={group.id}
            className="rounded-section border border-hairline bg-raised p-5 sm:p-6"
          >
            <h4 className="font-display text-base font-bold text-heading">
              {localize(group.title, locale)}
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item.es}>
                  <Tag>{localize(item, locale)}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
