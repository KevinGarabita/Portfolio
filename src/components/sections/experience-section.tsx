import Link from "next/link";

import { PageSection } from "@/components/ui/page-section";
import { workExperience } from "@/content/experience";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/types/content";

/** Work history: role, employer, place and dates, the CV bullet points and related case studies. */
export async function ExperienceSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.experience}
      title={dictionary.experience.sectionTitle}
    >
      <div className="flex flex-col gap-14">
        {workExperience.map((job) => {
          const relatedProjects = job.relatedProjectSlugs
            .map((slug) => getProjectBySlug(slug))
            .filter((project): project is Project => project !== undefined);

          return (
            <article key={job.id}>
              <h3 className="font-display text-subtitle font-bold">
                {localize(job.role, locale)}
                <span className="font-normal text-body">
                  {" · "}
                  {job.organization}
                </span>
              </h3>
              <p className="mt-1 text-small text-muted">
                {localize(job.location, locale)} ·{" "}
                {formatDateRange(
                  job.period,
                  locale,
                  dictionary.experience.present,
                )}
              </p>

              <ul className="mt-6 flex max-w-prose list-disc flex-col gap-3 pl-5 marker:text-muted">
                {job.highlights.map((highlight) => (
                  <li key={highlight.es}>{localize(highlight, locale)}</li>
                ))}
              </ul>

              {relatedProjects.length > 0 ? (
                <div className="mt-6 max-w-prose border-t border-hairline pt-4">
                  <p className="text-small text-muted">
                    {dictionary.experience.relatedProjects}
                  </p>
                  <ul className="mt-1 flex flex-col gap-1">
                    {relatedProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/${locale}/projects/${project.slug}`}
                          className="inline-block py-1"
                        >
                          {localize(project.name, locale)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </PageSection>
  );
}
