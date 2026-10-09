import {
  getProjectCardLayouts,
  ProjectCard,
} from "@/components/projects/project-card";
import { PageSection } from "@/components/ui/page-section";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { homeSectionIds } from "@/lib/home-sections";
import { getAllProjects } from "@/lib/projects";
import type { ProjectCategory } from "@/types/content";

/** Freelance work first, then the work done at Kobler. */
const categoryOrder: ProjectCategory[] = ["freelance", "kobler"];

/**
 * Projects in two groups (freelance, Kobler), each a grid of cards: two per row from
 * md up, with featured projects (and a card left alone in its row) at full width.
 * Each card fades in on its own as it scrolls into view.
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
          const cardLayouts = getProjectCardLayouts(group.projects);

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
              <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {group.projects.map((project, index) => {
                  const layout = cardLayouts.get(project.slug) ?? "stacked";
                  return (
                    <li
                      key={project.slug}
                      data-reveal
                      className={joinClassNames(
                        layout === "wide" && "md:col-span-2",
                        index % 2 === 1 && "md:[--reveal-order:1]",
                      )}
                    >
                      <ProjectCard
                        project={project}
                        locale={locale}
                        dictionary={dictionary}
                        layout={layout}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </PageSection>
  );
}
