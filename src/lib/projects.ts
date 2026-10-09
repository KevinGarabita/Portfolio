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
