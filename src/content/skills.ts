import { sameInEveryLanguage } from "@/i18n/localize";
import type { SkillGroup } from "@/types/content";

/**
 * Skills list. Source: the "Habilidades técnicas" section of Kevin's CV, with the
 * changes he asked for: one tool per entry, the databases under Backend, and Material UI.
 * The page shows the tools (logo and name). Entries without a logo (REST APIs,
 * webhooks...) are not shown; they only feed the structured data (knowsAbout).
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: sameInEveryLanguage("Backend"),
    items: [
      { name: sameInEveryLanguage("Python"), logo: "python" },
      { name: sameInEveryLanguage("FastAPI"), logo: "fastapi" },
      { name: sameInEveryLanguage("Supabase"), logo: "supabase" },
      { name: sameInEveryLanguage("PostgreSQL"), logo: "postgresql" },
      { name: sameInEveryLanguage("MySQL"), logo: "mysql" },
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
      { name: sameInEveryLanguage("n8n"), logo: "n8n" },
      { name: sameInEveryLanguage("OpenAI API"), logo: "openai" },
      { name: sameInEveryLanguage("Ollama"), logo: "ollama" },
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
    ],
  },
  {
    id: "frontend",
    title: sameInEveryLanguage("Frontend"),
    items: [
      { name: sameInEveryLanguage("React"), logo: "react" },
      { name: sameInEveryLanguage("TypeScript"), logo: "typescript" },
      { name: sameInEveryLanguage("JavaScript"), logo: "javascript" },
      { name: sameInEveryLanguage("Material UI"), logo: "materialUi" },
    ],
  },
  {
    id: "integrations",
    title: { es: "Integraciones", en: "Integrations" },
    items: [
      { name: sameInEveryLanguage("GoHighLevel"), logo: "highlevel" },
      { name: sameInEveryLanguage("WhatsApp Cloud API"), logo: "whatsapp" },
      { name: sameInEveryLanguage("Zoom"), logo: "zoom" },
      { name: sameInEveryLanguage("WooCommerce"), logo: "woocommerce" },
      { name: sameInEveryLanguage("Google Maps"), logo: "googleMaps" },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    items: [
      { name: sameInEveryLanguage("Git"), logo: "git" },
      { name: sameInEveryLanguage("GitHub"), logo: "github" },
      { name: sameInEveryLanguage("Docker"), logo: "docker" },
      { name: sameInEveryLanguage("Render"), logo: "render" },
      { name: sameInEveryLanguage("Claude Code"), logo: "claude" },
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
