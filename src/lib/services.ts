import { services, type Service } from "@/content/services";
import type { Project } from "@/types/content";

import { getProjectBySlug } from "./projects";

/** Fails the build when a service names a case study that does not exist. */
function assertServiceExamples(): void {
  for (const service of services) {
    for (const slug of service.exampleSlugs) {
      if (!getProjectBySlug(slug)) {
        throw new Error(
          `src/content/services.ts: the service "${service.id}" names "${slug}", which is not a project`,
        );
      }
    }
  }
}

assertServiceExamples();

export function getAllServices(): Service[] {
  return services;
}

/** The case studies a service links to, in its order. */
export function getServiceExamples(service: Service): Project[] {
  return service.exampleSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== undefined);
}
