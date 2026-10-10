import type { CSSProperties } from "react";

import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import type { Project } from "@/types/content";

import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Compact project cards in columns: one on phones, two from sm, three from lg. With two
 * columns an odd last card is centred under the pair; with three, a last card alone on
 * its row sits in the middle column. Each card fades in on its own as
 * it scrolls into view, staggered along its row.
 */
export function ProjectGrid({
  projects,
  locale,
  dictionary,
}: ProjectGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {projects.map((project, index) => (
        <li
          key={project.slug}
          data-reveal
          className="sm:max-lg:last:odd:col-span-2 sm:max-lg:last:odd:mx-auto sm:max-lg:last:odd:w-[calc(50%-0.625rem)] lg:last:nth-[3n+1]:col-start-2"
          style={{ "--reveal-order": index % 3 } as CSSProperties}
        >
          <ProjectCard
            project={project}
            locale={locale}
            dictionary={dictionary}
          />
        </li>
      ))}
    </ul>
  );
}
