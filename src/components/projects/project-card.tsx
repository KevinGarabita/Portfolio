import Link from "next/link";

import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

import { ProjectStatus } from "./project-status";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * The project name is the only link. Its ::after covers the whole card ("stretched link"),
 * so the card is clickable without nesting interactive elements; nothing else inside
 * the card may be a link or a button.
 */
function ProjectNameLink({
  project,
  locale,
}: Pick<ProjectCardProps, "project" | "locale">) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="after:absolute after:inset-0"
    >
      {localize(project.name, locale)}
    </Link>
  );
}

function ClientAndContext({
  project,
  locale,
}: Pick<ProjectCardProps, "project" | "locale">) {
  return (
    <p className="text-small text-muted">
      {project.client} · {localize(project.context, locale)}
    </p>
  );
}

function TechnologyList({
  project,
  dictionary,
}: Pick<ProjectCardProps, "project" | "dictionary">) {
  return (
    <p className="text-small text-muted">
      <span className="sr-only">
        {dictionary.projects.facts.technologies}:{" "}
      </span>
      {getProjectTechnologies(project).join(", ")}
    </p>
  );
}

/** Featured project: a raised panel with more room and its results. */
export function FeaturedProjectCard({
  project,
  locale,
  dictionary,
}: ProjectCardProps) {
  return (
    <article className="relative border border-hairline bg-raised p-6 transition-colors hover:border-control-border sm:p-8 lg:p-10">
      <h3 className="font-display text-title font-bold">
        <ProjectNameLink project={project} locale={locale} />
      </h3>
      <div className="mt-3 flex flex-col gap-3">
        <ClientAndContext project={project} locale={locale} />
        {project.status ? (
          <p>
            <ProjectStatus
              status={project.status}
              statusNote={project.statusNote}
              locale={locale}
              dictionary={dictionary}
            />
          </p>
        ) : null}
      </div>

      <p className="mt-6 max-w-prose">{localize(project.summary, locale)}</p>

      <div className="mt-6 max-w-prose">
        <p className="text-small font-bold text-heading">
          {dictionary.projects.sections.results}
        </p>
        <ul className="mt-1 flex flex-col gap-1">
          {project.results.map((result) => (
            <li key={result.es}>{localize(result, locale)}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-hairline pt-4">
        <TechnologyList project={project} dictionary={dictionary} />
      </div>
    </article>
  );
}

/** Any other project: a row in a list, name and status on the left, summary on the right. */
export function ProjectRow({ project, locale, dictionary }: ProjectCardProps) {
  return (
    <article className="relative grid gap-y-3 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-8 lg:py-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-subtitle font-bold">
          <ProjectNameLink project={project} locale={locale} />
        </h3>
        <ClientAndContext project={project} locale={locale} />
        {project.status ? (
          <p>
            <ProjectStatus
              status={project.status}
              statusNote={project.statusNote}
              locale={locale}
              dictionary={dictionary}
            />
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <p>{localize(project.summary, locale)}</p>
        <TechnologyList project={project} dictionary={dictionary} />
      </div>
    </article>
  );
}
