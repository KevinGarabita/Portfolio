import Link from "next/link";

import { PageSection } from "@/components/ui/page-section";
import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { labelColon, localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/types/content";

/**
 * Work and studies in one section, so a thin history does not spread over two empty
 * bands. Per job: the role, the employer and what it is (a visitor may not know
 * Kobler y Asociados is a marketing agency), the period and place, the CV's summary of the
 * job and then every highlight in plain sight (the client outcomes are the strongest
 * proof on the page, too valuable to sit behind a "More details"). The related case
 * studies close each job as small links. Then the studies: the degree, the school and
 * its place, and the period, semester and expected graduation on one wrapping line.
 */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.experience;

  return (
    <PageSection id={homeSectionIds.experience} title={labels.sectionTitle}>
      <ol className="flex flex-col gap-16">
        {workExperience.map((job) => {
          const [summary, ...highlights] = job.highlights;
          const relatedProjects = job.relatedProjectSlugs
            .map((slug) => getProjectBySlug(slug))
            .filter((project): project is Project => project !== undefined);

          return (
            <li key={job.id}>
              <article>
                <h3
                  data-build="type"
                  data-build-tag="h3"
                  className="font-display text-subtitle font-bold"
                >
                  {localize(job.role, locale)}
                </h3>
                <p data-build="type" data-build-tag="p" className="mt-1">
                  {job.organization}
                  {job.organizationDescription ? (
                    <span className="text-muted">
                      , {localize(job.organizationDescription, locale)}
                    </span>
                  ) : null}
                </p>
                <p
                  data-build="type"
                  data-build-tag="p.fecha"
                  className="mt-1 text-small text-muted"
                >
                  {formatDateRange(job.period, locale, labels.present)},{" "}
                  {localize(job.location, locale)}
                </p>

                {summary ? (
                  <p
                    data-build="type"
                    data-build-tag="p"
                    className="mt-5 max-w-[60ch] text-heading"
                  >
                    {localize(summary, locale)}
                  </p>
                ) : null}

                {highlights.length > 0 ? (
                  <ul className="mt-4 flex max-w-[60ch] flex-col gap-3">
                    {highlights.map((highlight) => (
                      <li
                        key={highlight.es}
                        data-build="type"
                        data-build-tag="li"
                        className="flex gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-accent"
                        />
                        <span>{localize(highlight, locale)}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {relatedProjects.length > 0 ? (
                  <>
                    <h4
                      data-build="type"
                      data-build-tag="h4"
                      className="mt-8 text-small font-bold text-muted"
                    >
                      {labels.relatedProjects}
                    </h4>
                    <ul
                      data-build="drag"
                      data-build-tag="ul.casos"
                      className="mt-1 flex flex-col text-small"
                    >
                      {relatedProjects.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/${locale}/projects/${project.slug}`}
                            className="inline-flex min-h-11 items-center"
                          >
                            {localize(project.name, locale)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>

      <div className="mt-14 flex flex-col gap-10 border-t border-hairline pt-10">
        {education.map((studies) => (
          <article key={studies.id}>
            <h3
              data-build="type"
              data-build-tag="h3"
              className="font-display text-subtitle font-bold"
            >
              {localize(studies.degree, locale)}
            </h3>
            <p data-build="type" data-build-tag="p" className="mt-1">
              {studies.institution}, {localize(studies.location, locale)}
            </p>
            <ul
              data-build="drag"
              data-build-tag="ul.datos"
              className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-small text-muted"
            >
              <li>{formatDateRange(studies.period, locale, labels.present)}</li>
              {studies.note ? <li>{localize(studies.note, locale)}</li> : null}
              {studies.expectedGraduation ? (
                <li>
                  {dictionary.education.expectedGraduation}
                  {labelColon(locale)}{" "}
                  {formatYearMonth(studies.expectedGraduation, locale)}
                </li>
              ) : null}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
