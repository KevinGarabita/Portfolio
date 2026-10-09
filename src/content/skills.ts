import { sameInEveryLanguage } from "@/i18n/localize";
import type { SkillGroup } from "@/types/content";

/**
 * Skills list. Source: the "Habilidades técnicas" section of Kevin's CV, in its order.
 * Tools carry their logos (see technology-logos.ts); the rest are shown as text.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: sameInEveryLanguage("Backend"),
    items: [
      {
        name: sameInEveryLanguage("Python (FastAPI)"),
        logos: ["python", "fastapi"],
      },
      { name: { es: "APIs REST", en: "REST APIs" } },
      { name: sameInEveryLanguage("webhooks") },
      {
        name: {
          es: "autenticación y acceso por roles (Supabase Auth)",
          en: "authentication and role-based access (Supabase Auth)",
        },
      },
      {
        name: {
          es: "generación de PDF y exportación a Excel",
          en: "PDF generation and Excel export",
        },
      },
    ],
  },
  {
    id: "ai-and-automation",
    title: { es: "IA y automatización", en: "AI & Automation" },
    items: [
      { name: sameInEveryLanguage("n8n"), logos: ["n8n"] },
      { name: sameInEveryLanguage("OpenAI API"), logos: ["openai"] },
      {
        name: {
          es: "agentes con tool/function calling",
          en: "agents with tool/function calling",
        },
      },
      {
        name: {
          es: "extracción de datos de documentos con IA",
          en: "AI-based document data extraction",
        },
      },
      { name: sameInEveryLanguage("Ollama"), logos: ["ollama"] },
    ],
  },
  {
    id: "frontend-and-data",
    title: { es: "Frontend y datos", en: "Frontend & Data" },
    items: [
      { name: sameInEveryLanguage("React"), logos: ["react"] },
      { name: sameInEveryLanguage("TypeScript"), logos: ["typescript"] },
      { name: sameInEveryLanguage("JavaScript"), logos: ["javascript"] },
      {
        name: sameInEveryLanguage("PostgreSQL (Supabase)"),
        logos: ["postgresql", "supabase"],
      },
      { name: sameInEveryLanguage("MySQL"), logos: ["mysql"] },
    ],
  },
  {
    id: "integrations",
    title: { es: "Integraciones", en: "Integrations" },
    items: [
      { name: sameInEveryLanguage("GoHighLevel (CRM)"), logos: ["crm"] },
      {
        name: sameInEveryLanguage("WhatsApp Cloud API (Meta)"),
        logos: ["whatsapp"],
      },
      { name: sameInEveryLanguage("Zoom"), logos: ["zoom"] },
      { name: sameInEveryLanguage("WooCommerce"), logos: ["woocommerce"] },
      { name: sameInEveryLanguage("Google Maps"), logos: ["googleMaps"] },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    items: [
      { name: sameInEveryLanguage("Git / GitHub"), logos: ["git", "github"] },
      { name: sameInEveryLanguage("Docker"), logos: ["docker"] },
      { name: sameInEveryLanguage("Render"), logos: ["render"] },
      { name: sameInEveryLanguage("Claude Code"), logos: ["claude"] },
    ],
  },
  {
    id: "languages",
    title: { es: "Idiomas", en: "Languages" },
    items: [
      { name: { es: "Español nativo", en: "Native Spanish" } },
      {
        name: {
          es: "inglés intermedio (leo documentación técnica sin dificultad, conversación en desarrollo)",
          en: "Intermediate English (B1) — I read technical documentation without difficulty, conversational skills in progress",
        },
      },
    ],
  },
];
