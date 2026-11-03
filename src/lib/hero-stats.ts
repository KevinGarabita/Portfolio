import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { teamWhatsAppAgentCount } from "@/content/highlights";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { DateRange } from "@/types/content";

import { getAllProjects } from "./projects";

export interface HeroStat {
  /** The figure, drawn large ("5", "1 año", "2027"). */
  value: string;
  /** What it counts, in one short line. */
  label: string;
}

/** Whole months of a finished job, both ends included: Dec 2025 – Nov 2026 is 12. */
function countMonths({ start, end }: DateRange): number | undefined {
  if (!end) return undefined;
  const [startYear = 0, startMonth = 0] = start.split("-").map(Number);
  const [endYear = 0, endMonth = 0] = end.split("-").map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

/**
 * The hero's strip of figures, every one taken from the content so none can drift from
 * the rest of the site: the WhatsApp agents built at Kobler (content/highlights.ts), the
 * projects in production (their status), the length of the last job and the expected
 * graduation year. A figure without data is left out.
 */
export function getHeroStats(dictionary: Dictionary): HeroStat[] {
  const labels = dictionary.hero.stats;
  const stats: HeroStat[] = [
    { value: String(teamWhatsAppAgentCount), label: labels.agents },
    {
      value: String(
        getAllProjects().filter((project) => project.status === "in-production")
          .length,
      ),
      label: labels.inProduction,
    },
  ];

  const [latestJob] = workExperience;
  const months = latestJob ? countMonths(latestJob.period) : undefined;
  if (latestJob && months) {
    stats.push({
      value:
        months % 12 === 0 ? labels.years(months / 12) : labels.months(months),
      label: labels.experience(latestJob.organization),
    });
  }

  const [studies] = education;
  if (studies?.expectedGraduation) {
    stats.push({
      value: studies.expectedGraduation.slice(0, 4),
      label: labels.graduation(studies.institution),
    });
  }

  return stats;
}
