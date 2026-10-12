import type { ReactNode } from "react";

import { Tag } from "@/components/ui/tag";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { formatDateRange } from "@/lib/format-date";
import { getProjectTechnologies } from "@/lib/projects";
import type { Project } from "@/types/content";

interface ProjectFactsProps {
  project: Project;
  locale: Locale;
  dictionary: Dictionary;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-x-4 gap-y-1 border-b border-hairline py-3 @md:grid-cols-[7rem_minmax(0,1fr)]">
      <dt className="text-small text-muted">{label}</dt>
      <dd className="wrap-break-word">{children}</dd>
    </div>
  );
}

/**
 * Key facts of a case study as a definition list between hairlines, without a panel:
 * client, period and technologies. The status and the credit (getProjectCredit) are
 * shown above the title, so they are not repeated here. Technologies (stack, then
 * integrations) are a list of grey pills.
 */
export function ProjectFacts({
  project,
  locale,
  dictionary,
}: ProjectFactsProps) {
  const labels = dictionary.projects.facts;

  return (
    <dl className="@container border-t border-hairline">
      <Fact label={labels.client}>{project.client}</Fact>

      {project.period ? (
        <Fact label={labels.period}>
          {formatDateRange(
            project.period,
            locale,
            dictionary.experience.present,
          )}
        </Fact>
      ) : null}

      <Fact label={labels.technologies}>
        <ul className="flex flex-wrap gap-2 pt-0.5">
          {getProjectTechnologies(project).map((technology) => (
            <li key={technology}>
              <Tag>{technology}</Tag>
            </li>
          ))}
        </ul>
      </Fact>
    </dl>
  );
}
