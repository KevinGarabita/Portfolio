import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

const slugFormat = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Fails the build if a slug is badly formatted or repeated: a repeated slug hides a project. */
function assertValidProjectSlugs(projectList: Project[]): void {
  const seenSlugs = new Set<string>();

  for (const project of projectList) {
    if (!slugFormat.test(project.slug) || seenSlugs.has(project.slug)) {
      throw new Error(
        `Invalid or duplicate project slug in src/content/projects.ts: "${project.slug}"`,
      );
    }
    seenSlugs.add(project.slug);
  }
}

assertValidProjectSlugs(projects);

export function getAllProjects(): Project[] {
  return projects;
}

/** The projects shown on the home page, in site order. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.isFeatured);
}

/**
 * Technologies used by at least two projects, most used first: the options of the
 * technology filter (one that matches a single project is not worth a filter).
 */
export function getSharedTechnologies(): string[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const technology of new Set(getProjectTechnologies(project))) {
      counts.set(technology, (counts.get(technology) ?? 0) + 1);
    }
  }
  return [...counts]
    .filter(([, count]) => count >= 2)
    .sort(
      ([nameA, countA], [nameB, countB]) =>
        countB - countA || nameA.localeCompare(nameB),
    )
    .map(([name]) => name);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Main technologies followed by integrations, as shown on cards and case studies. */
export function getProjectTechnologies(project: Project): string[] {
  return [...project.stack, ...project.integrations];
}

/** The project before and after the given one, in site order, for the case-study footer. */
export function getNeighborProjects(slug: string): {
  previousProject?: Project;
  nextProject?: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previousProject: projects[index - 1],
    nextProject: projects[index + 1],
  };
}
