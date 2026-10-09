import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they go in the quick facts instead. */
const languagesGroupId = "languages";

/**
 * Column spans of a skill card, so no row is left with a hole: on the six-column lg grid
 * a short last row is shared by its cards (3 + 3, or 6); on two columns an odd last card
 * spans both.
 */
function getSkillCardSpan(index: number, count: number): string {
  const positionFromEnd = count - index;
  const remainder = count % 3;
  const largeSpan =
    remainder === 2 && positionFromEnd <= 2
      ? "lg:col-span-3"
      : remainder === 1 && positionFromEnd === 1
        ? "lg:col-span-6"
        : "lg:col-span-2";
  const smallSpan =
    count % 2 === 1 && positionFromEnd === 1 ? "sm:col-span-2" : undefined;
  return joinClassNames(smallSpan, largeSpan);
}

/**
 * Two rows. First, the CV paragraph at reading size beside a short card of quick facts
 * (location and work mode, focus, languages). Then the technical skills as a grid of
 * cards, one per CV group (one column on phones, two from sm, three from lg): the tools
 * with their logo and name, then the other skills as a short list.
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
        .map((language) => localize(language.name, locale))
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
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        {technicalSkillGroups.map((group, index) => {
          const tools = group.items.filter((item) => item.logos?.length);
          const concepts = group.items.filter((item) => !item.logos?.length);

          return (
            <li
              key={group.id}
              className={joinClassNames(
                "@container rounded-section border border-hairline bg-raised p-5 sm:p-6",
                getSkillCardSpan(index, technicalSkillGroups.length),
              )}
            >
              <h4 className="font-display text-base font-bold text-heading">
                {localize(group.title, locale)}
              </h4>
              {tools.length > 0 ? (
                <ul className="mt-4 grid gap-2 @[17rem]:grid-cols-2 @[34rem]:grid-cols-3">
                  {tools.map((tool) => (
                    <li
                      key={tool.name.es}
                      className="flex min-h-12 items-center gap-3 rounded-media border border-hairline bg-page px-3 py-2"
                    >
                      <span className="flex shrink-0 gap-1">
                        {tool.logos?.map((logo) => (
                          <TechnologyLogo key={logo} logo={logo} />
                        ))}
                      </span>
                      <span className="text-small leading-snug font-bold text-heading">
                        {localize(tool.name, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {concepts.length > 0 ? (
                <ul className="mt-4 flex flex-col gap-2 text-small text-muted">
                  {concepts.map((concept) => (
                    <li key={concept.name.es} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-accent"
                      />
                      {localize(concept.name, locale)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
