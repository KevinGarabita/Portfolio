import type { TechnologyLogoId } from "@/content/technology-logos";
import type { Locale } from "@/i18n/locales";

/** Text written in every supported language. */
export type LocalizedText = Record<Locale, string>;

/** A calendar month, formatted "YYYY-MM" (for example "2026-07"). */
export type YearMonth = `${number}-${number}`;

/** A calendar day, formatted "YYYY-MM-DD". */
export type CalendarDate = `${number}-${number}-${number}`;

/** A period of time. Without `end`, it is still ongoing. */
export interface DateRange {
  start: YearMonth;
  end?: YearMonth;
}

export interface SocialProfile {
  network: "linkedin" | "github";
  url: string;
}

export interface Profile {
  /** Name shown on the site, e.g. in the hero and the page title. */
  displayName: string;
  /** Legal full name, used in structured data. */
  fullName: string;
  role: LocalizedText;
  /** Titles that rotate in the hero, in order. The longest one reserves the space. */
  heroTitles: string[];
  /** Short line under the hero title. */
  heroSubtitle: LocalizedText;
  /** Paragraphs for the "About" section. */
  about: LocalizedText[];
  location: {
    city: string;
    region: string;
    countryCode: string;
    country: LocalizedText;
  };
  email: string;
  phone: {
    /** Number as people read it. */
    display: string;
    /** Number in E.164 format, used for tel: links. */
    international: string;
  };
  whatsApp: {
    /** Digits only, with country code and no "+", as wa.me expects. */
    number: string;
    /** Message pre-filled in the chat. */
    prefilledMessage: LocalizedText;
  };
  socialProfiles: SocialProfile[];
  /**
   * Public path to the CV (PDF) for each language. There is a Spanish and an English CV;
   * the other languages use the English one.
   */
  resumeFiles: Record<Locale, string>;
}

export interface WorkExperience {
  id: string;
  role: LocalizedText;
  organization: string;
  location: LocalizedText;
  period: DateRange;
  /** Short bullet points: the CV facts, condensed for the Experience section. */
  highlights: LocalizedText[];
  /** Slugs of the projects that came out of this job. */
  relatedProjectSlugs: string[];
}

export interface Education {
  id: string;
  degree: LocalizedText;
  institution: string;
  location: LocalizedText;
  period: DateRange;
  /** Extra detail such as the current semester. */
  note?: LocalizedText;
  expectedGraduation?: YearMonth;
}

/**
 * One entry of the CV skills list. A tool has a logo and is shown on the page; an
 * entry without one is a skill or concept (REST APIs, webhooks...) kept only for the
 * structured data.
 */
export interface SkillItem {
  name: LocalizedText;
  logo?: TechnologyLogoId;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: SkillItem[];
}

export type ProjectStatus = "in-production" | "in-development";

/** Groups projects on the site: freelance work or work done at Kobler y Asociados. */
export type ProjectCategory = "freelance" | "kobler";

/** A screenshot stored under public/images/projects/<slug>/. */
export interface ProjectImage {
  /** Public path, e.g. "/images/projects/field-report-manager/dashboard.webp". */
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
  /** Which viewport the screenshot shows. */
  viewport: "desktop" | "mobile";
}

export interface ProjectLink {
  label: LocalizedText;
  url: string;
  kind: "live-site" | "repository" | "other";
}

/** One step of an automation flow, drawn as a simple diagram (no editor screenshots). */
export interface FlowStep {
  /** What happens in this step, in plain language. */
  label: LocalizedText;
  /** Tool or service involved, e.g. "WhatsApp", "GoHighLevel", "OpenAI". */
  tool?: string;
}

export type TeamSetup = "individual" | "team";

/**
 * How the code was written: "ai-assisted" (generated with AI under Kevin's direction,
 * with the architecture, review, tests and security in his hands) or "hand-coded".
 * Shown as a badge; unset for automations built in n8n.
 */
export type BuildMethod = "ai-assisted" | "hand-coded";

/** What the project is, for the filters on the projects page. */
export type ProjectKind = "web-app" | "ai-automation";

export interface Project {
  /** URL segment: /[lang]/projects/[slug]. Lowercase words joined by hyphens. */
  slug: string;
  name: LocalizedText;
  client: string;
  category: ProjectCategory;
  kind: ProjectKind;
  /** Where the work happened, e.g. "Freelance" or the employer's name. */
  context: LocalizedText;
  status?: ProjectStatus;
  /** Extra status detail, e.g. "since July 2026" or the expected delivery date. */
  statusNote?: LocalizedText;
  period?: DateRange;
  /** Featured projects are the ones shown on the home page; the rest only on /projects. */
  isFeatured: boolean;
  buildMethod?: BuildMethod;
  teamSetup: TeamSetup;
  /** One or two sentences for the project card. */
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  role: LocalizedText;
  results: LocalizedText[];
  /** 3 to 5 key points, from the CV or from the project's own documentation. */
  highlights: LocalizedText[];
  /** Main technologies; integrations are listed separately. */
  stack: string[];
  integrations: string[];
  /** Screenshots for the card and the gallery; empty when there are none yet. */
  images: ProjectImage[];
  /** Public links only (never internal client systems). */
  links: ProjectLink[];
  /** Automation flows: steps for a simple diagram. */
  flowDiagram?: FlowStep[];
  /** Optional details that add credibility when the information exists. */
  decisions?: LocalizedText[];
  failureHandling?: LocalizedText[];
  nextSteps?: LocalizedText;
  /** Last real content change, used by the sitemap. */
  lastUpdated: CalendarDate;
}
