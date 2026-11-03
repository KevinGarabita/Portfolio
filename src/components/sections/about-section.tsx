import { MapPinIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they sit in the panel, as plain text. */
const languagesGroupId = "languages";

/**
 * The one orange block of the home page, so the page is not black from top to bottom:
 * the CV paragraph at a large size in black on orange, what Kevin builds as keyword
 * chips, and a dark card with his place and spoken languages. Below it the skills as a
 * bento grid, one card per CV group (Backend, AI & automation...), the first one wide,
 * each tool with its logo. Tools without a logo (REST APIs, webhooks...) only feed the
 * structured data.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { location } = profile;

  const technicalSkillGroups = skillGroups.filter(
    (group) => group.id !== languagesGroupId,
  );
  const languages =
    skillGroups.find((group) => group.id === languagesGroupId)?.items ?? [];

  return (
    <PageSection
      id={homeSectionIds.about}
      title={dictionary.about.sectionTitle}
      eyebrow={dictionary.about.eyebrow}
      layout="stacked"
    >
      <div className="panel-accent reveal grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
        <div className="lg:col-span-7">
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.es}
              className="font-display text-subtitle leading-snug font-bold lg:text-[1.75rem]"
            >
              {localize(paragraph, locale)}
            </p>
          ))}

          <h3 className="sr-only">{dictionary.about.focusAreas}</h3>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {profile.focusAreas.map((area) => (
              <li
                key={area.es}
                className="rounded-tag bg-page px-4 py-2 text-small font-bold text-heading"
              >
                {localize(area, locale)}
              </li>
            ))}
          </ul>
        </div>

        <dl className="flex flex-col gap-5 self-end rounded-media bg-page p-6 text-body lg:col-span-5">
          <div>
            <dt className="text-small font-bold tracking-[0.12em] text-accent uppercase">
              {dictionary.contact.location}
            </dt>
            <dd className="mt-1.5 inline-flex items-center gap-2 font-bold text-heading">
              <MapPinIcon className="size-4 text-accent" />
              {location.city}, {location.region},{" "}
              {localize(location.country, locale)}
            </dd>
          </div>
          {languages.length > 0 ? (
            <div>
              <dt className="text-small font-bold tracking-[0.12em] text-accent uppercase">
                {dictionary.about.facts.languages}
              </dt>
              <dd>
                <ul className="mt-1.5 flex flex-col gap-1.5">
                  {languages.map((language) => (
                    <li key={language.name.es} className="text-small">
                      {localize(language.name, locale)}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>

      <h3 className="mt-16 font-display text-subtitle font-bold lg:mt-20">
        {dictionary.skills.sectionTitle}
      </h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technicalSkillGroups.map((group, index) => {
          const tools = group.items.flatMap((item) =>
            item.logo ? [{ name: item.name, logo: item.logo }] : [],
          );
          const isWide = index === 0;

          return (
            <li
              key={group.id}
              className={joinClassNames(
                "card reveal p-5 sm:p-6",
                isWide && "sm:col-span-2",
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-bold text-heading">
                  {localize(group.title, locale)}
                </h4>
                <p className="text-small text-muted">
                  {dictionary.skills.toolCount(tools.length)}
                </p>
              </div>
              <ul
                className={joinClassNames(
                  "mt-5 gap-2",
                  isWide ? "grid grid-cols-2 sm:grid-cols-3" : "flex flex-wrap",
                )}
              >
                {tools.map((tool) => (
                  <li
                    key={tool.logo}
                    className="flex min-h-11 items-center gap-2.5 rounded-control border border-hairline bg-page px-3 py-2 text-small font-bold text-heading"
                  >
                    <TechnologyLogo logo={tool.logo} className="size-5" />
                    {localize(tool.name, locale)}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
}
