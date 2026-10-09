import type { Project } from "@/types/content";

import { placeholderText } from "../placeholder";

/** Field report manager built for UxmalTechnologies (freelance). */
export const fieldReportManager: Project = {
  slug: "field-report-manager",
  name: { es: "Gestor de reportes de campo", en: "Field Report Manager" },
  client: "UxmalTechnologies",
  category: "freelance",
  context: { es: "Freelance", en: "Freelance" },
  status: "in-production",
  statusNote: { es: "desde julio 2026", en: "since July 2026" },
  isFeatured: true,
  teamSetup: "individual",
  summary: placeholderText(
    "Resumen de una o dos frases para la tarjeta del proyecto.",
  ),
  problem: placeholderText(
    "Problema: el CV ya dice que era un flujo de tres pasos (formato por WhatsApp, captura manual por otra persona y evidencias aparte). ¿Qué problemas causaba (tiempo, errores, evidencias perdidas)?",
  ),
  solution: placeholderText(
    "Solución: cómo funciona el sistema, a grandes rasgos.",
  ),
  role: placeholderText(
    "Rol: describe tu trabajo en el proyecto (me confirmaste que lo hiciste sin equipo).",
  ),
  results: [
    {
      es: "Lo usan cinco técnicos y un supervisor, y sigo dando mantenimiento.",
      en: "Used by five technicians and one supervisor, with ongoing maintenance.",
    },
  ],
  highlights: [
    {
      es: "Reemplacé un flujo de tres pasos —formato por WhatsApp, captura manual por otra persona y evidencias aparte— por un formulario único donde el técnico registra el reporte y adjunta sus fotos, con los datos conocidos precargados.",
      en: "Replaced a three-step workflow — a WhatsApp form, manual data entry by another person, and separate evidence collection — with a single form where the technician logs the report and attaches photos, with known data pre-filled.",
    },
    {
      es: "Implementé autenticación con Supabase Auth y acceso por rol: cada técnico ve solo sus reportes y cada supervisor los de sus técnicos asignados. El supervisor revisa, corrige y aprueba; el sistema genera el PDF y exporta el historial a Excel.",
      en: "Implemented authentication with Supabase Auth and role-based access: each technician sees only their own reports, and each supervisor sees those of their assigned technicians. The supervisor reviews, corrects, and approves; the system generates the PDF and exports the history to Excel.",
    },
  ],
  stack: ["FastAPI", "React", "TypeScript", "Supabase", "Render"],
  integrations: [],
  images: [],
  links: [],
  lastUpdated: "2026-10-09",
};
