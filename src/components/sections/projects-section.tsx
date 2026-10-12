import { ProjectGrid } from "@/components/projects/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { PageSection } from "@/components/ui/page-section";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";

/**
 * Home page projects, right after the hero: only the featured ones (isFeatured in
 * content/projects), the first one wide, then a link to /[lang]/projects, where every
 * project is listed.
 */
export async function ProjectsSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.projects}
      title={dictionary.projects.sectionTitle}
      layout="stacked"
    >
      <ProjectGrid
        projects={getFeaturedProjects()}
        locale={locale}
        dictionary={dictionary}
      />
      <ButtonLink
        href={`/${locale}/projects`}
        variant="secondary"
        className="mt-12 lg:mt-16"
      >
        {dictionary.projects.viewAll(getAllProjects().length)}
      </ButtonLink>
    </PageSection>
  );
}
