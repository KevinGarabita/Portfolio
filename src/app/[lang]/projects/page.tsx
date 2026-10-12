import type { Metadata } from "next";

import {
  FilterableProjectGrid,
  type FilterableProject,
} from "@/components/projects/filterable-project-grid";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { buildProjectsPageMetadata } from "@/lib/metadata";
import {
  getAllProjects,
  getProjectTechnologies,
  getSharedTechnologies,
} from "@/lib/projects";
import type { ProjectKind } from "@/types/content";

export async function generateMetadata(): Promise<Metadata> {
  return buildProjectsPageMetadata(await getCurrentLocale());
}

const kindOrder: ProjectKind[] = ["web-app", "ai-automation"];

/**
 * Every project in one grid, with filters (type and technology). The home page shows
 * only the featured ones and links here. Filter options only list values that some
 * project has.
 */
export default async function ProjectsPage() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { allProjectsPage, filters } = dictionary.projects;
  const projects = getAllProjects();

  const filterableProjects: FilterableProject[] = projects.map(
    (project, index) => ({
      slug: project.slug,
      kind: project.kind,
      technologies: getProjectTechnologies(project),
      card: (
        <ProjectCard
          project={project}
          locale={locale}
          dictionary={dictionary}
          headingLevel="h2"
          preloadMedia={index === 0}
        />
      ),
    }),
  );

  const kindOptions = kindOrder
    .filter((kind) => projects.some((project) => project.kind === kind))
    .map((kind) => ({ value: kind, label: filters.kinds[kind] }));
  const technologyOptions = getSharedTechnologies().map((technology) => ({
    value: technology,
    label: technology,
  }));

  return (
    <Container className="pt-10 pb-20 lg:pt-16 lg:pb-28">
      <header className="max-w-3xl">
        <h1 className="entrance-slide font-display text-headline font-extrabold [--entrance-order:0]">
          {allProjectsPage.title}
        </h1>
        <p className="entrance-slide mt-6 text-subtitle [--entrance-order:1]">
          {allProjectsPage.description}
        </p>
      </header>

      <div className="entrance-slide mt-10 [--entrance-order:2] lg:mt-14">
        <FilterableProjectGrid
          projects={filterableProjects}
          kindOptions={kindOptions}
          technologyOptions={technologyOptions}
          labels={{
            label: filters.label,
            kind: filters.kind,
            technology: filters.technology,
            all: filters.all,
            resultsOne: filters.resultsOne,
            resultsMany: filters.resultsMany,
            empty: filters.empty,
            clear: filters.clear,
          }}
        />
      </div>
    </Container>
  );
}
