import Link from "next/link";

import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { joinClassNames } from "@/lib/class-names";
import { getProjectCredit, getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

import { ProjectStatus } from "./project-status";
import { ProjectVisual } from "./project-visual";

/**
 * "tile": the screenshot on top and the caption under it (every grid).
 * "feature": from lg, the screenshot on the left (7 of 12 columns) and the caption
 * beside it, larger; below lg it is a tile. For the lead project of the home page.
 */
type ProjectCardVariant = "tile" | "feature";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
  /** h3 under a home section (h2); h2 on the projects page, right under its h1. */
  headingLevel?: "h2" | "h3";
  /**
   * Preload the card's screenshot: only for the page's LCP image, the first card of the
   * projects page and the lead project of the home page on phones.
   */
  preloadMedia?: boolean;
  variant?: ProjectCardVariant;
  /**
   * next/image `sizes` of the screenshot: the width the card really takes in its grid.
   * The default is the projects page's grid (ProjectCard's own `tileSizes`).
   */
  mediaSizes?: string;
}

/** How many technologies a card names; the case study lists all of them. */
const visibleTechnologyCount = 4;

/**
 * Width of a tile in the projects page's grid: one column on phones, two from sm, three
 * from lg, inside the page container (16, 24 or 40 px of side padding; 1200 px wide
 * from 1280 px and 1328 px from 1800 px) with 24 px gaps (32 px from lg).
 */
const tileSizes =
  "(min-width: 1800px) 421px, (min-width: 1280px) 379px, (min-width: 1024px) calc(33.3vw - 48px), (min-width: 640px) calc(50vw - 36px), calc(100vw - 2rem)";

/**
 * A project as a screenshot with its caption, with no panel around them: the status
 * ("En producción" is the only one in orange) and who the work was for, the name, its
 * one line of value (the tagline; the summary, cut to two lines, until the project has
 * one) and up to four technologies. The full story lives on the case-study page.
 *
 * The name is the only link; its ::after covers the whole card ("stretched link"), so
 * every part of the card opens the case study without nesting interactive elements. On
 * hover or keyboard focus the screenshot's frame turns orange, the screenshot comes a
 * little closer and the name is underlined (globals.css, .project-tile).
 */
export function ProjectCard({
  project,
  locale,
  dictionary,
  headingLevel: Heading = "h3",
  preloadMedia = false,
  variant = "tile",
  mediaSizes = tileSizes,
}: ProjectCardProps) {
  const isFeature = variant === "feature";
  const technologies = getProjectTechnologies(project).slice(
    0,
    visibleTechnologyCount,
  );
  const valueLine = project.tagline ?? project.summary;

  return (
    <article
      className={joinClassNames(
        "project-tile relative flex h-full flex-col",
        isFeature && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10",
      )}
    >
      <div
        className={joinClassNames(
          "project-tile-media @container relative aspect-video overflow-hidden rounded-media border bg-raised-strong",
          isFeature && "lg:col-span-7",
        )}
      >
        <ProjectVisual
          project={project}
          locale={locale}
          sizes={mediaSizes}
          preload={preloadMedia}
        />
      </div>

      <div
        className={joinClassNames(
          "flex flex-1 flex-col pt-5",
          isFeature && "lg:col-span-5 lg:pt-0",
        )}
      >
        <p className="flex min-h-7 flex-wrap items-center gap-x-3 gap-y-2 text-small text-muted">
          {project.status ? (
            <>
              <ProjectStatus
                status={project.status}
                locale={locale}
                dictionary={dictionary}
              />
              {/* Read "En producción, Freelance", not two glued words. */}
              <span className="sr-only">, </span>
            </>
          ) : null}
          <span>{dictionary.projects.credit[getProjectCredit(project)]}</span>
        </p>

        <Heading
          className={joinClassNames(
            "mt-3 font-display font-bold text-pretty",
            isFeature ? "text-subtitle lg:text-title" : "text-subtitle",
          )}
        >
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="project-tile-name text-heading decoration-accent decoration-2 outline-offset-4 after:absolute after:inset-0 after:z-(--layer-raised)"
          >
            {localize(project.name, locale)}
          </Link>
        </Heading>

        <p
          className={joinClassNames(
            "mt-2 text-body",
            isFeature ? "line-clamp-2 lg:line-clamp-3" : "line-clamp-2",
          )}
        >
          {localize(valueLine, locale)}
        </p>

        <p className="sr-only">{dictionary.projects.facts.technologies}:</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-small text-muted">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
