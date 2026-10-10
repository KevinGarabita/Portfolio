import type { CalendarDate, LocalizedText } from "@/types/content";

/**
 * Text for search results and link previews of the home page (at most 160 characters).
 * Built only from CV facts: role, location and the stack named in the profile and projects.
 */
export const homeDescription: LocalizedText = {
  es: "Desarrollador Backend, IA y Automatización en Mérida, Yucatán, México. Agentes conversacionales en n8n con la API de OpenAI y aplicaciones con FastAPI y React.",
  en: "Backend, AI & Automation Developer in Mérida, Yucatán, Mexico. Conversational agents in n8n with the OpenAI API and web applications with FastAPI and React.",
  pt: "Desenvolvedor Backend, IA e Automação em Mérida, Yucatán, México. Agentes conversacionais no n8n com a API da OpenAI e aplicações web com FastAPI e React.",
  fr: "Développeur Backend, IA et Automatisation à Mérida, Yucatán, Mexique. Agents conversationnels dans n8n avec l'API d'OpenAI et applications web avec FastAPI et React.",
};

/**
 * Last real content change of the home page (profile, experience, education, skills).
 * Update it by hand when that content changes; the sitemap and structured data read it.
 * Projects carry their own `lastUpdated`.
 */
export const siteLastUpdated: CalendarDate = "2026-10-09";
