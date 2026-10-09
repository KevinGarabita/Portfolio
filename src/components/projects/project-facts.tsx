import type { ReactNode } from "react";

import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { formatDateRange } from "@/lib/format-date";
import { getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

import { ProjectStatus } from "./project-status";

interface ProjectFactsProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-x-4 border-t border-hairline py-3 lg:grid-cols-1 lg:gap-y-1">
      <dt className="text-small text-muted">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/** Key facts of a case study as a definition list: client, context, period, status and technologies. */
export function ProjectFacts({
  project,
  locale,
  dictionary,
}: ProjectFactsProps) {
  const labels = dictionary.projects.facts;

  return (
    <dl className="border-b border-hairline">
      <Fact label={labels.client}>{project.client}</Fact>

      <Fact label={labels.context}>
        {localize(project.context, locale)} ·{" "}
        {dictionary.projects.teamSetup[project.teamSetup]}
      </Fact>

      {project.period ? (
        <Fact label={labels.period}>
          {formatDateRange(
            project.period,
            locale,
            dictionary.experience.present,
          )}
        </Fact>
      ) : null}

      {project.status ? (
        <Fact label={labels.status}>
          <ProjectStatus
            status={project.status}
            statusNote={project.statusNote}
            locale={locale}
            dictionary={dictionary}
          />
        </Fact>
      ) : null}

      <Fact label={labels.technologies}>
        {getProjectTechnologies(project).join(", ")}
      </Fact>
    </dl>
  );
}
