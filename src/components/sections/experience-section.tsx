import Link from "next/link";
import type { CSSProperties } from "react";

import { ArrowRightIcon, CheckIcon, MapPinIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { technologyLogos } from "@/content/technology-logos";
import { labelColon, localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import {
  countMonths,
  formatDateRange,
  formatYearMonth,
  getPeriodProgress,
} from "@/lib/format-date";
import { splitAroundPhrase } from "@/lib/highlight";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";

/** A small label inside the section: muted capitals, quieter than the orange eyebrow. */
function BlockLabel({ children }: { children: string }) {
  return (
    <h3 className="text-small font-bold tracking-[0.12em] text-muted uppercase">
      {children}
    </h3>
  );
}

/**
 * Work and studies in one section, so a thin history does not spread over two empty
 * bands, and shaped so it can be skimmed. Per job, one card: the role, the employer and
 * what it is (a visitor may not know Kobler y Asociados is a marketing agency), the
 * period with its length and the place, the summary with its key words in orange, and
 * the tools as logos. Then one card per client, keywords first and the outcome in a
 * line, each leading to its case study (the client outcomes are the strongest proof on
 * the page); then the rest of the job as short checks. The studies close the section as
 * a card with a timeline from the first year to the expected graduation.
 */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.experience;
  const statLabels = dictionary.hero.stats;

  return (
    <PageSection
      id={homeSectionIds.experience}
      title={labels.sectionTitle}
      eyebrow={labels.eyebrow}
      glow="left"
    >
      <BlockLabel>{labels.work}</BlockLabel>
      <ol className="mt-4 flex flex-col gap-12">
        {workExperience.map((job) => {
          const months = countMonths(job.period);
          const duration = months
            ? months % 12 === 0
              ? statLabels.years(months / 12)
              : statLabels.months(months)
            : undefined;
          const [beforeHighlight, highlight, afterHighlight] =
            splitAroundPhrase(
              localize(job.summary, locale),
              localize(job.summaryHighlight, locale),
            );

          return (
            <li key={job.id}>
              <article>
                <div className="card reveal p-6 sm:p-8">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                      <h4 className="font-display text-subtitle font-bold">
                        {localize(job.role, locale)}
                      </h4>
                      <p className="mt-1 font-bold text-accent">
                        {job.organization}
                        {job.organizationDescription ? (
                          <span className="font-normal text-muted">
                            {" "}
                            · {localize(job.organizationDescription, locale)}
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-1.5 xl:items-end">
                      <p className="inline-flex w-fit flex-wrap items-center gap-x-2 rounded-tag border border-accent/40 bg-[var(--tint-accent)] px-3 py-1 text-small font-bold text-heading">
                        {formatDateRange(job.period, locale, labels.present)}
                        {duration ? (
                          <span className="whitespace-nowrap text-accent">
                            · {duration}
                          </span>
                        ) : null}
                      </p>
                      <p className="inline-flex items-center gap-1.5 text-small text-muted">
                        <MapPinIcon className="size-4" />
                        {localize(job.location, locale)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-[56ch] text-subtitle leading-snug text-heading">
                    {beforeHighlight}
                    <strong className="text-accent">{highlight}</strong>
                    {afterHighlight}
                  </p>

                  {job.stack.length > 0 ? (
                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-hairline pt-5">
                      <p className="text-small font-bold text-muted">
                        {labels.stack}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {job.stack.map((logo) => (
                          <li
                            key={logo}
                            className="inline-flex min-h-9 items-center gap-2 rounded-tag border border-hairline bg-page py-1 pr-3 pl-2 text-small font-bold text-heading"
                          >
                            <TechnologyLogo logo={logo} className="size-5" />
                            {technologyLogos[logo].title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                {job.clientResults.length > 0 ? (
                  <>
                    <div className="mt-10">
                      <BlockLabel>{labels.clientResults}</BlockLabel>
                    </div>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {job.clientResults.map((clientResult) => {
                        const project = clientResult.projectSlug
                          ? getProjectBySlug(clientResult.projectSlug)
                          : undefined;

                        return (
                          <li
                            key={clientResult.client}
                            className="card card-link reveal flex flex-col p-5"
                          >
                            <h4 className="font-display text-subtitle font-bold">
                              {project ? (
                                <Link
                                  href={`/${locale}/projects/${project.slug}`}
                                  className="text-heading no-underline after:absolute after:inset-0 after:content-['']"
                                >
                                  {clientResult.client}
                                </Link>
                              ) : (
                                clientResult.client
                              )}
                            </h4>
                            <ul className="mt-3 flex flex-wrap gap-1.5">
                              {clientResult.keywords.map((keyword) => (
                                <li
                                  key={keyword.es}
                                  className="rounded-tag bg-[var(--tint-accent)] px-2.5 py-0.5 text-small font-bold text-accent"
                                >
                                  {localize(keyword, locale)}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 text-small text-muted">
                              {localize(clientResult.result, locale)}
                            </p>
                            {project ? (
                              <p
                                aria-hidden="true"
                                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-small font-bold text-accent"
                              >
                                {labels.caseStudy}
                                <ArrowRightIcon className="size-4" />
                              </p>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}

                {job.responsibilities.length > 0 ? (
                  <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="shrink-0 text-small font-bold text-muted">
                      {labels.responsibilities}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility.es} className="flex gap-2.5">
                          <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                          <span>{localize(responsibility, locale)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>

      <div className="mt-16">
        <BlockLabel>{dictionary.education.label}</BlockLabel>
      </div>
      <div className="mt-4 flex flex-col gap-6">
        {education.map((studies) => {
          const graduation = studies.expectedGraduation;
          const progress = graduation
            ? getPeriodProgress(studies.period.start, graduation)
            : undefined;

          return (
            <article key={studies.id} className="card reveal p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="font-display text-subtitle font-bold">
                    {localize(studies.degree, locale)}
                  </h4>
                  <p className="mt-1 font-bold text-accent">
                    {studies.institution}
                    <span className="font-normal text-muted">
                      {" "}
                      · {localize(studies.location, locale)}
                    </span>
                  </p>
                </div>
                {studies.note ? (
                  <p className="w-fit shrink-0 rounded-tag bg-accent px-3 py-1 text-small font-bold text-on-accent">
                    {localize(studies.note, locale)}
                  </p>
                ) : null}
              </div>

              {graduation && progress !== undefined ? (
                <div className="mt-8">
                  <p className="mb-3 text-small font-bold text-heading">
                    {dictionary.education.timeline}
                  </p>
                  <div
                    aria-hidden="true"
                    className="study-track"
                    style={{ "--progress": progress } as CSSProperties}
                  >
                    <div className="study-track-fill" />
                  </div>
                  <div className="mt-3 flex justify-between gap-4 text-small text-muted">
                    <span>{formatYearMonth(studies.period.start, locale)}</span>
                    <span className="text-right">
                      {dictionary.education.expectedGraduation}
                      {labelColon(locale)}{" "}
                      <strong className="text-heading">
                        {formatYearMonth(graduation, locale)}
                      </strong>
                    </span>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-small text-muted">
                  {formatDateRange(studies.period, locale, labels.present)}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
