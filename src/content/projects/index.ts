import type { Project } from "@/types/content";

import { controltecPestControlCrm } from "./controltec-pest-control-crm";
import { fieldReportManager } from "./field-report-manager";
import { koblerProjects } from "./kobler";

/**
 * Every case study, one page each at /[lang]/projects/[slug].
 * The order here is the order on the site: freelance work first, then Kobler.
 * Each project lives in its own file in this folder.
 */
export const projects: Project[] = [
  fieldReportManager,
  controltecPestControlCrm,
  ...koblerProjects,
];
