import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { workExperience } from "@/content/experience";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/types/content";

/**
 * Work history as a timeline: a gradient rail with a dot per job. Dates and place on
 * the left (from lg up), then role, employer, short highlights (the CV bullet points,
 * condensed) and the related case studies.
 */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.experience}
      title={dictionary.experience.sectionTitle}
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-0 left-1.25 w-0.5 rounded-tag bg-[linear-gradient(to_bottom,var(--color-accent),var(--color-accent-secondary)_60%,transparent)]"
        />
        <ol className="flex flex-col gap-14 pl-8 lg:pl-12">
          {workExperience.map((job) => {
            const relatedProjects = job.relatedProjectSlugs
              .map((slug) => getProjectBySlug(slug))
              .filter((project): project is Project => project !== undefined);

            return (
              <li key={job.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-8 size-3 rounded-full bg-accent ring-4 ring-page lg:-left-12"
                />
                <article className="grid gap-4 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-3">
                    <p className="font-mono text-small font-bold text-balance text-accent">
                      {formatDateRange(
                        job.period,
                        locale,
                        dictionary.experience.present,
                      )}
                    </p>
                    <p className="mt-1 text-small text-muted">
                      {localize(job.location, locale)}
                    </p>
                  </div>

                  <div className="lg:col-span-9">
                    <h3 className="font-display text-title font-bold">
                      {localize(job.role, locale)}
                    </h3>
                    <p className="mt-1 text-subtitle text-muted">
                      {job.organization}
                    </p>

                    <ul className="mt-6 flex max-w-prose flex-col gap-3">
                      {job.highlights.map((highlight) => (
                        <li key={highlight.es} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-accent"
                          />
                          <span>{localize(highlight, locale)}</span>
                        </li>
                      ))}
                    </ul>

                    {relatedProjects.length > 0 ? (
                      <div className="mt-8">
                        <p className="text-small text-muted">
                          {dictionary.experience.relatedProjects}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {relatedProjects.map((project) => (
                            <li key={project.slug}>
                              <Link
                                href={`/${locale}/projects/${project.slug}`}
                                className="button-motion inline-flex min-h-10 items-center gap-2 rounded-tag border border-hairline bg-raised px-4 py-1.5 text-small font-bold text-heading no-underline hover:border-accent"
                              >
                                {localize(project.name, locale)}
                                <ArrowRightIcon className="button-icon size-4 text-accent" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </PageSection>
  );
}
