import Link from "next/link";

import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
}

export function ProjectCard({ project, locale, dictionary }: ProjectCardProps) {
  return (
    <article>
      <h3>
        <Link href={`/${locale}/projects/${project.slug}`}>
          {localize(project.name, locale)}
        </Link>
      </h3>
      <p>
        {project.client} · {localize(project.context, locale)}
        {project.status
          ? ` · ${dictionary.projects.status[project.status]}`
          : null}
      </p>
      <p>{localize(project.summary, locale)}</p>
      <ul aria-label={dictionary.projects.facts.stack}>
        {[...project.stack, ...project.integrations].map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
}
