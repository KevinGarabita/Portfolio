import { projects } from "@/content/projects";
import type { LocalizedText, Project, ProjectCredit } from "@/types/content";

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

/**
 * Longest a visible case-study text may be, in characters, in any language (French runs
 * longest). The full story lives in howItWorks, decisions and failureHandling, which the
 * page collapses under "Technical details"; these limits keep the rest scannable on a
 * phone (3 November 2026: Kevin found the case studies too long to read).
 */
const visibleTextLimits = {
  summary: 210,
  problem: 230,
  solution: 240,
  role: 240,
  result: 140,
  highlight: 150,
} as const;
const maxResults = 3;
const maxHighlights = 4;

/** Fails the build when a case study's visible text grows past the limits above. */
function assertShortCaseStudies(projectList: Project[]): void {
  for (const project of projectList) {
    const source = `src/content/projects: "${project.slug}"`;
    const checks: [keyof typeof visibleTextLimits, LocalizedText][] = [
      ["summary", project.summary],
      ["problem", project.problem],
      ["solution", project.solution],
      ["role", project.role],
      ...project.results.map(
        (text): [keyof typeof visibleTextLimits, LocalizedText] => [
          "result",
          text,
        ],
      ),
      ...project.highlights.map(
        (text): [keyof typeof visibleTextLimits, LocalizedText] => [
          "highlight",
          text,
        ],
      ),
    ];

    for (const [field, text] of checks) {
      for (const [locale, value] of Object.entries(text)) {
        if (value.length > visibleTextLimits[field]) {
          throw new Error(
            `${source}: a ${field} (${locale}) has ${value.length} characters; keep it under ${visibleTextLimits[field]} and move the detail to howItWorks: "${value}"`,
          );
        }
      }
    }
    if (project.results.length > maxResults) {
      throw new Error(
        `${source} has ${project.results.length} results; show at most ${maxResults}`,
      );
    }
    if (project.highlights.length > maxHighlights) {
      throw new Error(
        `${source} has ${project.highlights.length} key points; show at most ${maxHighlights}`,
      );
    }
  }
}

assertShortCaseStudies(projects);

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

/** Who did the work: freelance, team work at Kobler or Kevin alone at Kobler. */
export function getProjectCredit(project: Project): ProjectCredit {
  if (project.category === "freelance") return "freelance";
  return project.teamSetup === "team" ? "kobler-team" : "kobler-individual";
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
