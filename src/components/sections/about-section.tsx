import { Container } from "@/components/ui/container";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they sit on the blue field. */
const languagesGroupId = "languages";

/**
 * The one royal blue field of the home page, full width, so the page is not black from
 * top to bottom: the heading, the CV paragraph at statement size in white, and below a
 * hairline what Kevin builds (four short phrases) beside his place and languages, set as
 * plain columns rather than chips.
 *
 * Then, back on black, the skills as a dense index like a sitemap: one column per CV
 * group (Backend, AI & automation...), its name in muted text and its tools under it,
 * each with its logo. Tools without a logo (REST APIs, webhooks...) only feed the
 * structured data.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { location } = profile;
  const titleId = `${homeSectionIds.about}-title`;

  const technicalSkillGroups = skillGroups.filter(
    (group) => group.id !== languagesGroupId,
  );
  const languages =
    skillGroups.find((group) => group.id === languagesGroupId)?.items ?? [];

  return (
    <section id={homeSectionIds.about} aria-labelledby={titleId}>
      <div className="bg-accent-fill text-on-accent">
        <Container className="py-16 lg:py-28">
          <h2
            id={titleId}
            className="font-display text-title font-bold text-on-accent"
          >
            {dictionary.about.sectionTitle}
          </h2>
          {profile.about.map((paragraph) => (
            <p
              key={paragraph.es}
              className="mt-8 max-w-[28ch] font-display text-statement font-bold text-on-accent lg:mt-10"
            >
              {localize(paragraph, locale)}
            </p>
          ))}

          <div className="mt-14 grid gap-10 border-t border-on-accent/30 pt-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h3 className="sr-only">{dictionary.about.focusAreas}</h3>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {profile.focusAreas.map((area) => (
                  <li
                    key={area.es}
                    className="text-subtitle font-bold text-on-accent"
                  >
                    {localize(area, locale)}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-5">
              <div>
                <dt className="text-small text-on-accent-muted">
                  {dictionary.contact.location}
                </dt>
                <dd className="mt-1 font-bold">
                  {location.city}, {location.region},{" "}
                  {localize(location.country, locale)}
                </dd>
              </div>
              {languages.length > 0 ? (
                <div>
                  <dt className="text-small text-on-accent-muted">
                    {dictionary.about.facts.languages}
                  </dt>
                  <dd>
                    <ul className="mt-1 flex flex-col gap-1">
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
        </Container>
      </div>

      <Container className="py-14 lg:py-24">
        <h3 className="font-display text-subtitle font-bold">
          {dictionary.skills.sectionTitle}
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-hairline pt-8 md:grid-cols-3 lg:grid-cols-5">
          {technicalSkillGroups.map((group) => {
            const tools = group.items.flatMap((item) =>
              item.logo ? [{ name: item.name, logo: item.logo }] : [],
            );

            return (
              <div key={group.id}>
                <h4 className="text-small text-muted">
                  {localize(group.title, locale)}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {tools.map((tool) => (
                    <li
                      key={tool.logo}
                      className="flex items-center gap-2.5 text-small font-bold text-heading"
                    >
                      <TechnologyLogo logo={tool.logo} className="size-5" />
                      {localize(tool.name, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
