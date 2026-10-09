import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
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
