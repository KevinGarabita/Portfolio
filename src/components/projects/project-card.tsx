import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { joinClassNames } from "@/lib/class-names";
import { getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

import { ProjectStatus } from "./project-status";
import { ProjectVisual } from "./project-visual";

/**
 * Stacked: media on top, text below (half the grid width from md up).
 * Wide: full grid width; from lg up the media sits beside the text.
 */
export type ProjectCardLayout = "stacked" | "wide";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
  layout: ProjectCardLayout;
}

const mediaSizes: Record<ProjectCardLayout, string> = {
  stacked: "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw",
  wide: "(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw",
};

/**
 * A project on the home page. The name is the only link; its ::after covers the whole
 * card ("stretched link"), so the card is clickable without nesting interactive
 * elements, and nothing else inside may be a link or a button. On hover or keyboard
 * focus the card lifts, the gradient ring and the glow fade in and the media zooms a
 * little (globals.css, .project-card).
 */
export function ProjectCard({
  project,
  locale,
  dictionary,
  layout,
}: ProjectCardProps) {
  const isWide = layout === "wide";

  return (
    <article
      className={joinClassNames(
        "project-card hover-glow gradient-ring flex h-full flex-col rounded-section border border-hairline bg-raised",
        isWide && "lg:grid lg:grid-cols-12",
      )}
    >
      <div
        className={joinClassNames(
          "project-card-media relative aspect-16/10 overflow-hidden rounded-t-section border-b border-hairline bg-raised-strong",
          isWide &&
            "lg:col-span-7 lg:aspect-auto lg:min-h-96 lg:rounded-l-section lg:rounded-tr-none lg:border-r lg:border-b-0",
        )}
      >
        <ProjectVisual
          project={project}
          locale={locale}
          sizes={mediaSizes[layout]}
        />
      </div>

      <div
        className={joinClassNames(
          "flex flex-1 flex-col gap-4 p-6 sm:p-8",
          isWide && "lg:col-span-5 lg:justify-center",
        )}
      >
        {project.status ? (
          <ProjectStatus
            status={project.status}
            statusNote={project.statusNote}
            locale={locale}
            dictionary={dictionary}
          />
        ) : null}

        <h4 className="font-display text-title font-bold">
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="text-heading no-underline after:absolute after:inset-0 after:z-(--layer-raised) after:rounded-section hover:underline"
          >
            {localize(project.name, locale)}
          </Link>
        </h4>

        <p className="text-small text-muted">
          {project.client} · {localize(project.context, locale)}
        </p>

        <p>{localize(project.summary, locale)}</p>

        {isWide && project.results.length > 0 ? (
          <div className="border-l-2 border-accent pl-4">
            <p className="text-small font-bold text-heading">
              {dictionary.projects.sections.results}
            </p>
            <ul className="mt-1 flex flex-col gap-1">
              {project.results.map((result) => (
                <li key={result.es}>{localize(result, locale)}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-auto flex flex-col gap-5 pt-2">
          <p className="sr-only">{dictionary.projects.facts.technologies}:</p>
          <ul className="flex flex-wrap gap-2">
            {getProjectTechnologies(project).map((technology) => (
              <li key={technology}>
                <Tag>{technology}</Tag>
              </li>
            ))}
          </ul>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 font-bold text-accent"
          >
            {dictionary.projects.viewCaseStudy}
            <ArrowRightIcon className="project-card-arrow" />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Which cards get the full grid width: featured ones, and the last one left alone in a row. */
export function getProjectCardLayouts(
  projects: Project[],
): Map<string, ProjectCardLayout> {
  const regularProjects = projects.filter((project) => !project.isFeatured);
  const lonelyLastProject =
    regularProjects.length % 2 === 1 ? regularProjects.at(-1) : undefined;

  return new Map(
    projects.map((project) => [
      project.slug,
      project.isFeatured || project === lonelyLastProject ? "wide" : "stacked",
    ]),
  );
}
