import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { TechnologyLogo } from "@/components/ui/technology-logo";
import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { technologyLogos } from "@/content/technology-logos";
import type { Locale } from "@/i18n/locales";
import { labelColon, localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import {
  countMonths,
  formatShortYearMonth,
  formatYearMonth,
} from "@/lib/format-date";
import { splitAroundPhrase } from "@/lib/highlight";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";
import type { DateRange } from "@/types/content";

interface LedgerPeriodProps {
  period: DateRange;
  locale: Locale;
  ongoingLabel: string;
  /** A second line under the dates: the job's length, the current semester. */
  detail?: string;
}

/** The left column of a ledger row: the period in Geist Mono, since it is data. */
function LedgerPeriod({
  period,
  locale,
  ongoingLabel,
  detail,
}: LedgerPeriodProps) {
  return (
    <p className="font-mono text-small text-muted tabular-nums">
      <span className="block whitespace-nowrap">
        {formatShortYearMonth(period.start, locale)} –{" "}
        {period.end ? formatShortYearMonth(period.end, locale) : ongoingLabel}
      </span>
      {detail ? (
        <span className="mt-1 block text-heading">{detail}</span>
      ) : null}
    </p>
  );
}

/**
 * Work and studies as one ledger, the way a deployment list or a well-set menu reads:
 * each entry is a row across the full width, the period on the left in mono and the
 * entry on the right, rows split by hairlines. No cards.
 *
 * The job: the role, the employer and what it is (a visitor may not know Kobler y
 * Asociados is a marketing agency), the summary at a large size with its key words in
 * blue, and the tools as a line of logos. Then a table of the clients, one row each:
 * the name, two or three keywords and the outcome in a short muted line; the row is the
 * link to the case study and fills royal blue from the left on hover or focus (the one
 * motion of the section). The rest of the job closes it in two plain lines.
 *
 * The studies: one more row of the same ledger, with the semester as its detail and
 * the expected graduation.
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
      layout="stacked"
    >
      <ol className="divide-y divide-hairline border-t border-hairline">
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
            <li key={job.id} className="ledger-row py-10 lg:py-14">
              <LedgerPeriod
                period={job.period}
                locale={locale}
                ongoingLabel={labels.present}
                detail={duration}
              />

              <article className="min-w-0">
                <h3 className="font-display text-subtitle font-bold">
                  {localize(job.role, locale)}
                </h3>
                <p className="mt-1 text-muted">
                  <span className="text-heading">{job.organization}</span>
                  {job.organizationDescription
                    ? `, ${localize(job.organizationDescription, locale)}`
                    : null}
                  {" · "}
                  {localize(job.location, locale)}
                </p>

                <p className="mt-8 max-w-[34ch] font-display text-[clamp(1.25rem,0.95rem+1.1vw,1.875rem)] leading-snug font-bold text-heading">
                  {beforeHighlight}
                  <span className="text-accent">{highlight}</span>
                  {afterHighlight}
                </p>

                {job.stack.length > 0 ? (
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {job.stack.map((logo) => (
                      <li
                        key={logo}
                        className="inline-flex items-center gap-2 text-small font-bold text-heading"
                      >
                        <TechnologyLogo logo={logo} className="size-5" />
                        {technologyLogos[logo].title}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {job.clientResults.length > 0 ? (
                  <>
                    <h4 className="mt-12 text-small font-bold text-muted">
                      {labels.clientResults}
                    </h4>
                    <ul className="mt-3 border-t border-hairline">
                      {job.clientResults.map((clientResult) => {
                        const project = clientResult.projectSlug
                          ? getProjectBySlug(clientResult.projectSlug)
                          : undefined;
                        const keywords = clientResult.keywords
                          .map((keyword) => localize(keyword, locale))
                          .join(" · ");
                        const content = (
                          <>
                            <span className="client-row-name font-display text-subtitle font-bold">
                              {clientResult.client}
                            </span>
                            <span className="client-row-text">
                              <span className="client-row-keywords block font-bold">
                                {keywords}
                              </span>
                              <span className="client-row-result mt-1 block text-small">
                                {localize(clientResult.result, locale)}
                              </span>
                            </span>
                            {project ? (
                              <ArrowRightIcon className="client-row-arrow size-5" />
                            ) : null}
                          </>
                        );

                        return (
                          <li
                            key={clientResult.client}
                            className="border-b border-hairline"
                          >
                            {project ? (
                              <Link
                                href={`/${locale}/projects/${project.slug}`}
                                className="client-row"
                              >
                                {content}
                                <span className="sr-only">
                                  {" "}
                                  ({labels.caseStudy})
                                </span>
                              </Link>
                            ) : (
                              <div className="client-row">{content}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}

                {job.responsibilities.length > 0 ? (
                  <div className="mt-10 grid gap-2 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6">
                    <h4 className="text-small font-bold text-muted sm:pt-0.5">
                      {labels.responsibilities}
                    </h4>
                    <ul className="flex flex-col gap-1.5 text-muted">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility.es}>
                          {localize(responsibility, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </li>
          );
        })}

        {education.map((studies) => (
          <li key={studies.id} className="ledger-row py-10 lg:py-14">
            <LedgerPeriod
              period={
                studies.expectedGraduation
                  ? { ...studies.period, end: studies.expectedGraduation }
                  : studies.period
              }
              locale={locale}
              ongoingLabel={labels.present}
              detail={studies.note ? localize(studies.note, locale) : undefined}
            />
            <article className="min-w-0">
              <h3 className="font-display text-subtitle font-bold">
                {localize(studies.degree, locale)}
              </h3>
              <p className="mt-1 text-muted">
                <span className="text-heading">{studies.institution}</span>
                {" · "}
                {localize(studies.location, locale)}
              </p>
              {studies.expectedGraduation ? (
                <p className="mt-4 text-small text-muted">
                  {dictionary.education.expectedGraduation}
                  {labelColon(locale)}{" "}
                  <span className="text-heading">
                    {formatYearMonth(studies.expectedGraduation, locale)}
                  </span>
                </p>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
