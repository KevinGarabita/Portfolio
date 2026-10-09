import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { Project } from "@/types/content";

interface ProjectFactsProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
}

/** Key facts of a case study as a definition list: client, context, status and stack. */
export function ProjectFacts({
  project,
  locale,
  dictionary,
}: ProjectFactsProps) {
  const labels = dictionary.projects.facts;

  return (
    <dl>
      <dt>{labels.client}</dt>
      <dd>{project.client}</dd>

      <dt>{labels.context}</dt>
      <dd>
        {localize(project.context, locale)} ·{" "}
        {dictionary.projects.teamSetup[project.teamSetup]}
      </dd>

      {project.status ? (
        <>
          <dt>{labels.status}</dt>
          <dd>
            {dictionary.projects.status[project.status]}
            {project.statusNote
              ? ` · ${localize(project.statusNote, locale)}`
              : null}
          </dd>
        </>
      ) : null}

      <dt>{labels.stack}</dt>
      <dd>{[...project.stack, ...project.integrations].join(", ")}</dd>
    </dl>
  );
}
