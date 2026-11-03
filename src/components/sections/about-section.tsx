import type { ReactNode } from "react";

import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/** The CV lists languages among the skills; here they are a row of the profile sheet. */
const languagesGroupId = "languages";

interface SheetRowProps {
  label: string;
  children: ReactNode;
}

/** One row of the profile sheet: the label in muted text, the value beside it. */
function SheetRow({ label, children }: SheetRowProps) {
  return (
    <div className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
      <dt className="text-small text-muted sm:pt-0.5">{label}</dt>
      <dd className="text-heading">{children}</dd>
    </div>
  );
}

/**
 * Who Kevin is, in his own words, on the black ground: the lead line at statement size,
 * then why he builds (a solution in production, used every day) in regular weight, and
 * beside them a profile sheet split by hairlines: role, focus areas, base and languages.
 * His studies live in the experience ledger, not here.
 *
 * Then the skills as Kevin liked them: a row per CV group (Backend, AI & automation...),
 * its name on the left from sm and its tools beside it as pills, each with its logo.
 * Tools without a logo (REST APIs, webhooks...) only feed the structured data.
 */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { location } = profile;
  const [lead, ...paragraphs] = profile.about;

  const technicalSkillGroups = skillGroups.filter(
    (group) => group.id !== languagesGroupId,
  );
  const languages =
    skillGroups.find((group) => group.id === languagesGroupId)?.items ?? [];

  return (
    <PageSection
      id={homeSectionIds.about}
      title={dictionary.about.sectionTitle}
      layout="stacked"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {lead ? (
            <p className="max-w-[18ch] font-display text-statement font-bold text-heading">
              {localize(lead, locale)}
            </p>
          ) : null}
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.es}
              className="mt-6 max-w-[40ch] text-subtitle leading-normal text-muted"
            >
              {localize(paragraph, locale)}
            </p>
          ))}
        </div>

        <dl className="self-end border-t border-hairline lg:col-span-5">
          <SheetRow label={dictionary.about.facts.role}>
            {localize(profile.role, locale)}
          </SheetRow>
          <SheetRow label={dictionary.about.focusAreas}>
            <ul className="flex flex-col gap-1">
              {profile.focusAreas.map((area) => (
                <li key={area.es}>{localize(area, locale)}</li>
              ))}
            </ul>
          </SheetRow>
          <SheetRow label={dictionary.contact.location}>
            {location.city}, {location.region},{" "}
            {localize(location.country, locale)}
          </SheetRow>
          {languages.length > 0 ? (
            <SheetRow label={dictionary.about.facts.languages}>
              <ul className="flex flex-col gap-1">
                {languages.map((language) => (
                  <li key={language.name.es}>
                    {localize(language.name, locale)}
                  </li>
                ))}
              </ul>
            </SheetRow>
          ) : null}
        </dl>
      </div>

      <h3 className="mt-20 font-display text-subtitle font-bold lg:mt-28">
        {dictionary.skills.sectionTitle}
      </h3>
      <dl className="mt-4 divide-y divide-hairline border-t border-hairline">
        {technicalSkillGroups.map((group) => {
          const tools = group.items.flatMap((item) =>
            item.logo ? [{ name: item.name, logo: item.logo }] : [],
          );

          return (
            <div
              key={group.id}
              className="grid gap-x-6 gap-y-3 py-5 sm:grid-cols-[11rem_minmax(0,1fr)]"
            >
              <dt className="text-small font-bold text-muted sm:pt-2.5">
                {localize(group.title, locale)}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <li
                      key={tool.logo}
                      className="inline-flex min-h-10 items-center gap-2 rounded-tag border border-hairline bg-raised py-1.5 pr-3.5 pl-2.5 text-small font-bold text-heading"
                    >
                      <TechnologyLogo logo={tool.logo} className="size-5" />
                      {localize(tool.name, locale)}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          );
        })}
      </dl>
    </PageSection>
  );
}
