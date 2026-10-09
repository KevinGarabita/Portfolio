import type { LocalizedText, SkillGroup } from "@/types/content";

/** For names that read the same in every language, such as "n8n" or "Docker". */
function sameInEveryLanguage(text: string): LocalizedText {
  return { es: text, en: text };
}

/** Skills list. Source: the "Habilidades técnicas" section of Kevin's CV, in its order. */
export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: sameInEveryLanguage("Backend"),
    items: [
      sameInEveryLanguage("Python (FastAPI)"),
      { es: "APIs REST", en: "REST APIs" },
      sameInEveryLanguage("webhooks"),
      {
        es: "autenticación y acceso por roles (Supabase Auth)",
        en: "authentication and role-based access (Supabase Auth)",
      },
      {
        es: "generación de PDF y exportación a Excel",
        en: "PDF generation and Excel export",
      },
    ],
  },
  {
    id: "ai-and-automation",
    title: { es: "IA y automatización", en: "AI & Automation" },
    items: [
      sameInEveryLanguage("n8n"),
      sameInEveryLanguage("OpenAI API"),
      {
        es: "agentes con tool/function calling",
        en: "agents with tool/function calling",
      },
      {
        es: "extracción de datos de documentos con IA",
        en: "AI-based document data extraction",
      },
      sameInEveryLanguage("Ollama"),
    ],
  },
  {
    id: "frontend-and-data",
    title: { es: "Frontend y datos", en: "Frontend & Data" },
    items: [
      sameInEveryLanguage("React"),
      sameInEveryLanguage("TypeScript"),
      sameInEveryLanguage("JavaScript"),
      sameInEveryLanguage("PostgreSQL (Supabase)"),
      sameInEveryLanguage("MySQL"),
    ],
  },
  {
    id: "integrations",
    title: { es: "Integraciones", en: "Integrations" },
    items: [
      sameInEveryLanguage("GoHighLevel (CRM)"),
      sameInEveryLanguage("WhatsApp Cloud API (Meta)"),
      sameInEveryLanguage("Zoom"),
      sameInEveryLanguage("WooCommerce"),
      sameInEveryLanguage("Google Maps"),
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    items: [
      sameInEveryLanguage("Git / GitHub"),
      sameInEveryLanguage("Docker"),
      sameInEveryLanguage("Render"),
      sameInEveryLanguage("Claude Code"),
    ],
  },
  {
    id: "languages",
    title: { es: "Idiomas", en: "Languages" },
    items: [
      { es: "Español nativo", en: "Native Spanish" },
      {
        es: "inglés intermedio (leo documentación técnica sin dificultad, conversación en desarrollo)",
        en: "Intermediate English (B1) — I read technical documentation without difficulty, conversational skills in progress",
      },
    ],
  },
];
