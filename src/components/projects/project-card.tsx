import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

import { ProjectBuildBadge } from "./project-build-badge";
import { ProjectStatus } from "./project-status";
import { ProjectVisual } from "./project-visual";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
  /** h3 under a home section (h2); h2 on the projects page, right under its h1. */
  headingLevel?: "h2" | "h3";
}

/** How many technologies a card lists before summing up the rest as "+N". */
const visibleTechnologyCount = 5;

/** One column on phones, two from sm, three from lg (see ProjectGrid). */
const mediaSizes =
  "(min-width: 1800px) 440px, (min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/**
 * A compact project card (home page and projects page): media on top, then the status
 * and how it was built ("Vibe coded"), name, client, a three-line summary and the main
 * technologies. The full story lives on the case-study page. The name is the only link; its ::after covers the whole card
 * ("stretched link"), so the card is clickable without nesting interactive elements.
 * On hover or keyboard focus the card lifts, the gradient ring and the glow fade in and
 * the media zooms a little (globals.css, .project-card).
 */
export function ProjectCard({
  project,
  locale,
  dictionary,
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  const technologies = getProjectTechnologies(project);
  const visibleTechnologies = technologies.slice(0, visibleTechnologyCount);
  const hiddenTechnologyCount =
    technologies.length - visibleTechnologies.length;

  return (
    <article className="project-card hover-glow gradient-ring flex h-full flex-col rounded-section border">
      <div className="project-card-media @container relative aspect-16/10 overflow-hidden rounded-t-section border-b border-hairline bg-raised-strong">
        <ProjectVisual project={project} locale={locale} sizes={mediaSizes} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        {project.status || project.buildMethod ? (
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            {project.status ? (
              <ProjectStatus
                status={project.status}
                statusNote={project.statusNote}
                locale={locale}
                dictionary={dictionary}
                stacked
              />
            ) : null}
            {project.buildMethod ? (
              <ProjectBuildBadge
                buildMethod={project.buildMethod}
                dictionary={dictionary}
              />
            ) : null}
          </div>
        ) : null}

        <Heading className="font-display text-subtitle font-bold text-pretty">
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="text-heading no-underline after:absolute after:inset-0 after:z-(--layer-raised) after:rounded-section hover:underline"
          >
            {localize(project.name, locale)}
          </Link>
        </Heading>

        <p className="text-small text-muted">
          {project.client} · {localize(project.context, locale)}
        </p>

        <p className="line-clamp-3 text-small text-body">
          {localize(project.summary, locale)}
        </p>

        <div className="mt-auto flex flex-col gap-4 pt-2">
          <p className="sr-only">{dictionary.projects.facts.technologies}:</p>
          <ul className="flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <li key={technology}>
                <Tag>{technology}</Tag>
              </li>
            ))}
            {hiddenTechnologyCount > 0 ? (
              <li>
                <Tag>
                  <span aria-hidden="true">+{hiddenTechnologyCount}</span>
                  <span className="sr-only">
                    {dictionary.projects.moreTechnologies(
                      hiddenTechnologyCount,
                    )}
                  </span>
                </Tag>
              </li>
            ) : null}
          </ul>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 text-small font-bold text-accent"
          >
            {dictionary.projects.viewCaseStudy}
            <ArrowRightIcon className="project-card-arrow" />
          </span>
        </div>
      </div>
    </article>
  );
}
