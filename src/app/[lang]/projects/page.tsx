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
import type { BuildMethod, ProjectKind } from "@/types/content";

export async function generateMetadata(): Promise<Metadata> {
  return buildProjectsPageMetadata(await getCurrentLocale());
}

const kindOrder: ProjectKind[] = ["web-app", "ai-automation"];
const buildMethodOrder: BuildMethod[] = ["ai-assisted", "hand-coded"];

/**
 * Every project in one grid, with filters (type, technology, how it was built). The
 * home page shows only the featured ones and links here. Filter options only list
 * values that some project has.
 */
export default async function ProjectsPage() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { allProjectsPage, filters, buildMethod } = dictionary.projects;
  const projects = getAllProjects();

  const filterableProjects: FilterableProject[] = projects.map((project) => ({
    slug: project.slug,
    kind: project.kind,
    technologies: getProjectTechnologies(project),
    buildMethod: project.buildMethod,
    card: (
      <ProjectCard
        project={project}
        locale={locale}
        dictionary={dictionary}
        headingLevel="h2"
      />
    ),
  }));

  const kindOptions = kindOrder
    .filter((kind) => projects.some((project) => project.kind === kind))
    .map((kind) => ({ value: kind, label: filters.kinds[kind] }));
  const buildMethodOptions = buildMethodOrder
    .filter((method) =>
      projects.some((project) => project.buildMethod === method),
    )
    .map((method) => ({ value: method, label: buildMethod[method].label }));
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
          buildMethodOptions={buildMethodOptions}
          labels={{
            label: filters.label,
            kind: filters.kind,
            technology: filters.technology,
            buildMethod: filters.buildMethod,
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
