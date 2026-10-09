import type { CSSProperties } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { PageSection } from "@/components/ui/page-section";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
import { getAllProjects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/content";

/** Freelance work first, then the work done at Kobler. */
const categoryOrder: ProjectCategory[] = ["freelance", "kobler"];

/**
 * Projects in two groups (freelance, Kobler), each a grid of compact cards in columns:
 * one on phones, two from sm, three from lg. Each card fades in on its own as it
 * scrolls into view, staggered along its row.
 */
export async function ProjectsSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const allProjects = getAllProjects();

  const projectGroups = categoryOrder
    .map((category) => ({
      category,
      projects: allProjects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);

  return (
    <PageSection
      id={homeSectionIds.projects}
      title={dictionary.projects.sectionTitle}
      spacing="spacious"
      revealsContentAsBlock={false}
    >
      <div className="flex flex-col gap-16 lg:gap-24">
        {projectGroups.map((group) => {
          const groupTitleId = `projects-${group.category}-title`;

          return (
            <section key={group.category} aria-labelledby={groupTitleId}>
              <h3
                id={groupTitleId}
                data-reveal
                className="mb-6 flex items-center gap-3 font-display text-title font-bold lg:mb-8"
              >
                <span
                  aria-hidden="true"
                  className="h-6 w-1.5 rounded-tag bg-(image:--gradient-brand-diagonal)"
                />
                {dictionary.projects.groups[group.category]}
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {group.projects.map((project, index) => (
                  <li
                    key={project.slug}
                    data-reveal
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
            </section>
          );
        })}
      </div>
    </PageSection>
  );
}
