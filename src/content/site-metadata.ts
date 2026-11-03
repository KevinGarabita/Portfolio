import type { CalendarDate, LocalizedText } from "@/types/content";

/*
 * Texts for search results and link previews. Titles have at most 60 characters and
 * descriptions 140 to 160 (lib/metadata.ts fails the build otherwise). Built only from
 * CV facts: the single positioning (Backend, AI & Automation), location and the stack
 * named in the profile and projects. Case studies have theirs in project-seo.ts.
 */

/** Home page description. Its title is the name and the role (buildHomeTitle). */
export const homeDescription: LocalizedText = {
  es: "Desarrollador Backend, IA y Automatización en Mérida, Yucatán, México. Agentes conversacionales en n8n con la API de OpenAI y aplicaciones con FastAPI y React.",
  en: "Backend, AI & Automation Engineer in Mérida, Yucatán, Mexico. Conversational agents in n8n with the OpenAI API and web applications with FastAPI and React.",
  pt: "Desenvolvedor Backend, IA e Automação em Mérida, Yucatán, México. Agentes conversacionais no n8n com a API da OpenAI e aplicações web com FastAPI e React.",
  fr: "Développeur Backend, IA et Automatisation à Mérida, Yucatán, Mexique. Agents conversationnels sur n8n avec l'API d'OpenAI et applications web FastAPI et React.",
};

/** Title of the page with every project; the page's heading stays the short "Proyectos". */
export const projectsPageTitle: LocalizedText = {
  es: "Proyectos: backend, IA y automatización | Kevin Garabita",
  en: "Projects: backend, AI & automation | Kevin Garabita",
  pt: "Projetos: backend, IA e automação | Kevin Garabita",
  fr: "Projets : backend, IA et automatisation | Kevin Garabita",
};

export const projectsPageDescription: LocalizedText = {
  es: "Casos de estudio de Kevin Garabita: apps web con FastAPI, React y Supabase, y agentes de WhatsApp con n8n y OpenAI, freelance y en Kobler y Asociados.",
  en: "Case studies by Kevin Garabita: web apps with FastAPI, React and Supabase, and WhatsApp agents with n8n and OpenAI, freelance and at Kobler y Asociados.",
  pt: "Estudos de caso de Kevin Garabita: apps web com FastAPI, React e Supabase, e agentes de WhatsApp com n8n e OpenAI, freelance e na Kobler y Asociados.",
  fr: "Études de cas de Kevin Garabita : applications web (FastAPI, React, Supabase) et agents WhatsApp (n8n, OpenAI), en freelance et chez Kobler y Asociados.",
};

/** Title of the services page, for clients: what Kevin builds and where. */
export const servicesPageTitle: LocalizedText = {
  es: "Agentes de IA, automatización y apps web | Kevin Garabita",
  en: "AI agents, automation and web apps | Kevin Garabita",
  pt: "Agentes de IA, automação e apps web | Kevin Garabita",
  fr: "Agents d'IA, automatisation et apps web | Kevin Garabita",
};

export const servicesPageDescription: LocalizedText = {
  es: "Agentes de IA para WhatsApp, automatización de procesos y aplicaciones web a la medida para negocios, desde Mérida, Yucatán. Cotización según tu proyecto.",
  en: "AI agents for WhatsApp, process automation and custom web applications for businesses, from Mérida, Yucatán, Mexico. Quoted to fit your project.",
  pt: "Agentes de IA para WhatsApp, automação de processos e aplicações web sob medida para empresas, de Mérida, Yucatán, México. Orçamento conforme o projeto.",
  fr: "Agents d'IA pour WhatsApp, automatisation des processus et applications web sur mesure pour les entreprises, depuis Mérida, au Mexique. Devis selon le projet.",
};

/**
 * Last real content change of the home page (profile, experience, education, skills).
 * Update it by hand when that content changes; the sitemap and structured data read it.
 * Projects carry their own `lastUpdated`.
 */
export const siteLastUpdated: CalendarDate = "2026-11-03";
