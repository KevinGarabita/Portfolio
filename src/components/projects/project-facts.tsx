import type { ReactNode } from "react";

import { Tag } from "@/components/ui/tag";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
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
    <div className="grid gap-x-4 gap-y-1 border-t border-hairline py-3 first:border-t-0 first:pt-0 last:pb-0 @md:grid-cols-[7rem_minmax(0,1fr)]">
      <dt className="text-small text-muted">{label}</dt>
      <dd className="wrap-break-word">{children}</dd>
    </div>
  );
}

/**
 * Key facts of a case study as a definition list in a panel: client, context, period
 * and technologies. The status is shown above the title, so it is not repeated here.
 * When the client is also the context (an internal project at Kobler y Asociados), the
 * context row keeps only the team setup, so the name is not repeated either.
 * Technologies (stack, then integrations) are a list of tags, like on the cards.
 */
export function ProjectFacts({
  project,
  locale,
  dictionary,
}: ProjectFactsProps) {
  const labels = dictionary.projects.facts;
  const context = localize(project.context, locale);
  const teamSetup = dictionary.projects.teamSetup[project.teamSetup];

  return (
    <dl className="@container rounded-section border border-hairline bg-raised p-6">
      <Fact label={labels.client}>{project.client}</Fact>

      <Fact label={labels.context}>
        {project.client === context ? teamSetup : `${context} · ${teamSetup}`}
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
