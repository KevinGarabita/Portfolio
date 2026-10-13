import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they close the list in plain text. */
const languagesGroupId = "languages";

/**
 * The CV paragraph at reading size, then the skills as one compact list: a row per CV
 * group (Backend, AI & automation...), its name on the left from sm and its tools beside
 * it, each with its logo; the spoken languages close the list. Tools without a logo
 * (REST APIs, webhooks...) only feed the structured data.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  const technicalSkillGroups = skillGroups.filter(
    (group) => group.id !== languagesGroupId,
  );
  const languages =
    skillGroups.find((group) => group.id === languagesGroupId)?.items ?? [];

  return (
    <PageSection
      id={homeSectionIds.about}
      title={dictionary.about.sectionTitle}
    >
      <div className="flex max-w-prose flex-col gap-4">
        {profile.about.map((paragraph) => (
          <p key={paragraph.es}>{localize(paragraph, locale)}</p>
        ))}
      </div>

      <h3 className="mt-12 font-display text-subtitle font-bold">
        {dictionary.skills.sectionTitle}
      </h3>
      <dl className="mt-4 border-t border-hairline">
        {technicalSkillGroups.map((group) => {
          const tools = group.items.flatMap((item) =>
            item.logo ? [{ name: item.name, logo: item.logo }] : [],
          );

          return (
            <div
              key={group.id}
              className="grid gap-x-6 gap-y-3 border-b border-hairline py-4 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <dt className="text-small font-bold text-muted sm:pt-0.5">
                {localize(group.title, locale)}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-x-5 gap-y-3">
                  {tools.map((tool) => (
                    <li key={tool.logo} className="flex items-center gap-2">
                      <TechnologyLogo logo={tool.logo} />
                      <span className="font-bold text-heading">
                        {localize(tool.name, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          );
        })}
        {languages.length > 0 ? (
          <div className="grid gap-x-6 gap-y-3 border-b border-hairline py-4 sm:grid-cols-[11rem_minmax(0,1fr)]">
            <dt className="text-small font-bold text-muted sm:pt-0.5">
              {dictionary.about.facts.languages}
            </dt>
            <dd>
              <ul className="flex flex-col gap-1">
                {languages.map((language) => (
                  <li key={language.name.es}>
                    {localize(language.name, locale)}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
      </dl>
    </PageSection>
  );
}
