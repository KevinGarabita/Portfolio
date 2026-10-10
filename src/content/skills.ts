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
      {
        name: {
          es: "APIs REST",
          en: "REST APIs",
          pt: "APIs REST",
          fr: "API REST",
        },
      },
      { name: sameInEveryLanguage("webhooks") },
      {
        name: {
          es: "autenticación y acceso por roles (Supabase Auth)",
          en: "authentication and role-based access (Supabase Auth)",
          pt: "autenticação e acesso por perfil (Supabase Auth)",
          fr: "authentification et accès par rôle (Supabase Auth)",
        },
      },
      {
        name: {
          es: "generación de PDF y exportación a Excel",
          en: "PDF generation and Excel export",
          pt: "geração de PDF e exportação para Excel",
          fr: "génération de PDF et export vers Excel",
        },
      },
    ],
  },
  {
    id: "ai-and-automation",
    title: {
      es: "IA y automatización",
      en: "AI & Automation",
      pt: "IA e automação",
      fr: "IA et automatisation",
    },
    items: [
      { name: sameInEveryLanguage("n8n"), logo: "n8n" },
      { name: sameInEveryLanguage("OpenAI API"), logo: "openai" },
      { name: sameInEveryLanguage("Ollama"), logo: "ollama" },
      {
        name: {
          es: "agentes con tool/function calling",
          en: "agents with tool/function calling",
          pt: "agentes com tool/function calling",
          fr: "agents avec tool/function calling",
        },
      },
      {
        name: {
          es: "extracción de datos de documentos con IA",
          en: "AI-based document data extraction",
          pt: "extração de dados de documentos com IA",
          fr: "extraction de données de documents par IA",
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
    title: {
      es: "Integraciones",
      en: "Integrations",
      pt: "Integrações",
      fr: "Intégrations",
    },
    items: [
      { name: sameInEveryLanguage("GoHighLevel"), logo: "highlevel" },
      { name: sameInEveryLanguage("WhatsApp Cloud API"), logo: "whatsapp" },
      { name: sameInEveryLanguage("Zoom"), logo: "zoom" },
      { name: sameInEveryLanguage("WooCommerce"), logo: "woocommerce" },
      { name: sameInEveryLanguage("Google Maps API"), logo: "googleMaps" },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools", pt: "Ferramentas", fr: "Outils" },
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
    title: { es: "Idiomas", en: "Languages", pt: "Idiomas", fr: "Langues" },
    items: [
      {
        name: {
          es: "Español nativo",
          en: "Native Spanish",
          pt: "Espanhol nativo",
          fr: "Espagnol natif",
        },
      },
      {
        name: {
          es: "Inglés intermedio (B1): leo documentación técnica sin dificultad, conversación en desarrollo",
          en: "Intermediate English (B1) — I read technical documentation without difficulty, conversational skills in progress",
          pt: "Inglês intermediário (B1): leio documentação técnica sem dificuldade, conversação em desenvolvimento",
          fr: "Anglais intermédiaire (B1) : je lis la documentation technique sans difficulté, expression orale en cours d'amélioration",
        },
      },
    ],
  },
];
