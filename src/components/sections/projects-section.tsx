import {
  FeaturedProjectCard,
  ProjectRow,
} from "@/components/projects/project-card";
import { PageSection } from "@/components/ui/page-section";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
import { getAllProjects } from "@/lib/projects";

/** Featured projects first, as raised panels; the rest as a plain list below. */
export async function ProjectsSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter((project) => project.isFeatured);
  const otherProjects = allProjects.filter((project) => !project.isFeatured);

  return (
    <PageSection
      id={homeSectionIds.projects}
      title={dictionary.projects.sectionTitle}
      spacing="spacious"
    >
      <ul className="flex flex-col">
        {featuredProjects.map((project) => (
          <li key={project.slug} className="mb-6 lg:mb-10">
            <FeaturedProjectCard
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          </li>
        ))}
        {otherProjects.map((project) => (
          <li
            key={project.slug}
            className="border-t border-hairline last:border-b"
          >
            <ProjectRow
              project={project}
              locale={locale}
              dictionary={dictionary}
            />
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
