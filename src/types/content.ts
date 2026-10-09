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
  /** IANA time zone used to explain the availability hours. */
  timeZone: string;
  workMode: LocalizedText;
  availability: LocalizedText;
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
  /** Public paths to the downloadable CV, one per language. */
  resumeFiles: Record<Locale, string>;
}

export interface WorkExperience {
  id: string;
  role: LocalizedText;
  organization: string;
  location: LocalizedText;
  period: DateRange;
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

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: LocalizedText[];
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

export interface Project {
  /** URL segment: /[lang]/projects/[slug]. Lowercase words joined by hyphens. */
  slug: string;
  name: LocalizedText;
  client: string;
  category: ProjectCategory;
  /** Where the work happened, e.g. "Freelance" or the employer's name. */
  context: LocalizedText;
  status?: ProjectStatus;
  /** Extra status detail, e.g. "since July 2026" or the expected delivery date. */
  statusNote?: LocalizedText;
  period?: DateRange;
  /** Featured projects get more space on the home page. */
  isFeatured: boolean;
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
