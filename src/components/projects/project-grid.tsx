import type { Dictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { joinClassNames } from "@/lib/class-names";
import type { Project } from "@/types/content";

import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Width of the lead project's screenshot: 7 of 12 columns (40 px gaps) from lg inside
 * the page container (1200 px from 1280 px, 1328 px from 1800 px); the full container
 * below lg.
 */
const featureSizes =
  "(min-width: 1800px) 758px, (min-width: 1280px) 683px, (min-width: 1024px) calc(58.3vw - 63px), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)";

/**
 * Width of the other projects' screenshots: two columns from sm (24 px gap) and, when
 * there are exactly three of them, three columns from lg (32 px gaps).
 */
function getTileSizes(columnsFromLg: 2 | 3): string {
  const fromLg =
    columnsFromLg === 3
      ? "(min-width: 1800px) 421px, (min-width: 1280px) 379px, (min-width: 1024px) calc(33.3vw - 48px)"
      : "(min-width: 1800px) 648px, (min-width: 1280px) 584px, (min-width: 1024px) calc(50vw - 56px)";
  return `${fromLg}, (min-width: 640px) calc(50vw - 36px), calc(100vw - 2rem)`;
}

/**
 * The home page's projects, in site order. The first one leads: from lg it is wide,
 * with its screenshot beside the caption, so the eye lands on it first. The others
 * follow as tiles, two per row from sm (three from lg when there are three); with two
 * columns an odd last tile is centred under the pair. Nothing fades in on scroll.
 */
export function ProjectGrid({
  projects,
  locale,
  dictionary,
}: ProjectGridProps) {
  const [leadProject, ...otherProjects] = projects;
  if (!leadProject) return null;

  const columnsFromLg = otherProjects.length === 3 ? 3 : 2;

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      <ProjectCard
        project={leadProject}
        locale={locale}
        dictionary={dictionary}
        variant="feature"
        mediaSizes={featureSizes}
      />

      {otherProjects.length > 0 ? (
        <ul
          className={joinClassNames(
            "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8",
            columnsFromLg === 3 && "lg:grid-cols-3",
          )}
        >
          {otherProjects.map((project) => (
            <li
              key={project.slug}
              className={joinClassNames(
                "sm:last:odd:col-span-2 sm:last:odd:mx-auto sm:last:odd:w-[calc(50%-0.75rem)]",
                columnsFromLg === 3
                  ? "lg:last:odd:col-span-1 lg:last:odd:mx-0 lg:last:odd:w-auto"
                  : "lg:last:odd:w-[calc(50%-1rem)]",
              )}
            >
              <ProjectCard
                project={project}
                locale={locale}
                dictionary={dictionary}
                mediaSizes={getTileSizes(columnsFromLg)}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
