import Link from "next/link";

import { ChevronDownIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { workExperience } from "@/content/experience";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/types/content";

/**
 * Work history, compact: per job the role, the employer, the period and place, and the
 * first highlight (the CV's summary of the job). The other highlights wait behind "More
 * details" (a native <details>, so it works without JavaScript and stays in the page
 * for search engines). The related case studies close each job as plain links.
 */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const labels = dictionary.experience;

  return (
    <PageSection id={homeSectionIds.experience} title={labels.sectionTitle}>
      <ol className="flex flex-col gap-16">
        {workExperience.map((job) => {
          const [firstHighlight, ...otherHighlights] = job.highlights;
          const relatedProjects = job.relatedProjectSlugs
            .map((slug) => getProjectBySlug(slug))
            .filter((project): project is Project => project !== undefined);

          return (
            <li key={job.id}>
              <article>
                <h3 className="font-display text-subtitle font-bold">
                  {localize(job.role, locale)}
                </h3>
                <p className="mt-1">{job.organization}</p>
                <p className="mt-1 text-small text-muted">
                  {formatDateRange(job.period, locale, labels.present)},{" "}
                  {localize(job.location, locale)}
                </p>

                {firstHighlight ? (
                  <p className="mt-5 max-w-prose">
                    {localize(firstHighlight, locale)}
                  </p>
                ) : null}

                {otherHighlights.length > 0 ? (
                  <details className="group mt-3">
                    <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-link [&::-webkit-details-marker]:hidden">
                      {labels.moreDetails}
                      <ChevronDownIcon className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-3 flex max-w-prose flex-col gap-3">
                      {otherHighlights.map((highlight) => (
                        <li key={highlight.es} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-accent"
                          />
                          <span>{localize(highlight, locale)}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}

                {relatedProjects.length > 0 ? (
                  <>
                    <h4 className="mt-8 text-small font-bold text-muted">
                      {labels.relatedProjects}
                    </h4>
                    <ul className="mt-2 flex flex-col">
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
    </PageSection>
  );
}
