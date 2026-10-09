import { ProjectGrid } from "@/components/projects/project-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { PageSection } from "@/components/ui/page-section";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";

/**
 * Home page projects: only the featured ones (isFeatured in content/projects), then a
 * link to /[lang]/projects, where every project is listed.
 */
export async function ProjectsSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const featuredProjects = getFeaturedProjects();

  return (
    <PageSection
      id={homeSectionIds.projects}
      title={dictionary.projects.sectionTitle}
      spacing="spacious"
      revealsContentAsBlock={false}
    >
      <ProjectGrid
        projects={featuredProjects}
        locale={locale}
        dictionary={dictionary}
      />
      <div data-reveal className="mt-10 flex justify-center lg:mt-14">
        <ButtonLink
          href={`/${locale}/projects`}
          variant="secondary"
          trailingIcon={<ArrowRightIcon />}
        >
          {dictionary.projects.viewAll(getAllProjects().length)}
        </ButtonLink>
      </div>
    </PageSection>
  );
}
