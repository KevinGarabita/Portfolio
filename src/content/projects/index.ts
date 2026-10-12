import type { Project } from "@/types/content";

import { controltecPestControlCrm } from "./controltec-pest-control-crm";
import { fieldReportManager } from "./field-report-manager";
import { koblerProjects } from "./kobler";
import { workshopWeb } from "./workshop-web";

/** A Kobler case study by its slug; the build fails if there is none. */
function koblerProject(slug: string): Project {
  const project = koblerProjects.find((candidate) => candidate.slug === slug);
  if (!project) {
    throw new Error(`src/content/projects/kobler.ts has no project "${slug}"`);
  }
  return project;
}

/**
 * Every case study, one page each at /[lang]/projects/[slug].
 * The order here is the order on the site: the best work first, so live projects and the
 * strongest cases lead, and web apps alternate with AI agents. Each project lives in its
 * own file in this folder (the Kobler agents share kobler.ts).
 */
export const projects: Project[] = [
  workshopWeb,
  koblerProject("motosureste-suzuki-agent"),
  controltecPestControlCrm,
  koblerProject("neorgana-agent"),
  fieldReportManager,
  koblerProject("lamau-beach-automation"),
];

// A Kobler project missing from the list above would vanish from the site.
for (const project of koblerProjects) {
  if (!projects.includes(project)) {
    throw new Error(
      `The Kobler project "${project.slug}" is missing from src/content/projects/index.ts`,
    );
  }
}
