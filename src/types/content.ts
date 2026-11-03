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
  network: "linkedin" | "github" | "instagram";
  url: string;
}

export interface Profile {
  /** Name shown on the site, e.g. in the hero and the page title. */
  displayName: string;
  /** Legal full name, used in structured data. */
  fullName: string;
  /**
   * Kevin's brand: the site's name for search engines (WebSite, Open Graph), the home
   * title and the footer, so a search for it finds the site and the Instagram account.
   */
  brandName: string;
  role: LocalizedText;
  /** Short line under the hero title. */
  heroSubtitle: LocalizedText;
  /**
   * The words of heroSubtitle drawn in orange, copied exactly from it in each language.
   * The build fails if one is not part of its subtitle (lib/highlight.ts).
   */
  heroSubtitleHighlight?: LocalizedText;
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
   * Public path to the CV (PDF) in each language it exists in. Spanish is required: a
   * page whose language has no CV links to the Spanish one (lib/resume.ts).
   */
  resumeFiles: { es: string } & Partial<Record<Locale, string>>;
}

export interface WorkExperience {
  id: string;
  role: LocalizedText;
  organization: string;
  /** What the employer is ("marketing agency"), for visitors who do not know it. */
  organizationDescription?: LocalizedText;
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

/**
 * "completed-unreleased": the work is finished but the delivery never concluded, so it
 * never ran in production. Nothing on the site may suggest it is live.
 */
export type ProjectStatus =
  "in-production" | "in-development" | "completed-unreleased";

/**
 * Who did the work, shown on cards and case studies: freelance work, team work at Kobler
 * ("En equipo en Kobler y Asociados") or work Kevin did alone at Kobler, where he was employed. See getProjectCredit.
 */
export type ProjectCredit = "freelance" | "kobler-team" | "kobler-individual";

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

/** A before/after figure of a case study. Only real values from the project itself. */
export interface ProjectMetric {
  /** What was measured, e.g. the time it takes to file a report. */
  label: LocalizedText;
  before: LocalizedText;
  after: LocalizedText;
}

/** An architecture diagram exported as an image, stored under public/images/projects/<slug>/. */
export interface ArchitectureImage {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
}

/**
 * How the system is built: an exported diagram ("image") or its main parts in the order
 * a request goes through them ("diagram"), each with its technology, drawn like the
 * automation flow.
 */
export type ProjectArchitecture =
  | { kind: "image"; image: ArchitectureImage }
  | { kind: "diagram"; parts: FlowStep[] };

/**
 * The real event a project was used at, with a photo stored under
 * public/images/projects/<slug>/. The photo is credited to whoever took it.
 */
export interface ProjectEvent {
  /** Where, when and who was there, in a sentence or two. */
  description: LocalizedText;
  photo: {
    src: string;
    alt: LocalizedText;
    width: number;
    height: number;
    /** Who took the photo, shown under it ("Foto: Kobler y Asociados"). */
    credit: string;
  };
}

/** What the project is, for the filters on the projects page. */
export type ProjectKind = "web-app" | "ai-automation";

export interface Project {
  /** URL segment: /[lang]/projects/[slug]. Lowercase words joined by hyphens. */
  slug: string;
  name: LocalizedText;
  /**
   * Who the work was for, shown in the case study's facts and the share image. Leave it
   * out when the client must not be named: the facts then skip the row.
   */
  client?: string;
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
  teamSetup: TeamSetup;
  /**
   * The project card's one line of value: what the work does for the client, in plain
   * words and at most 90 characters.
   */
  tagline: LocalizedText;
  /** One or two sentences: the case study's lead and the structured data description. */
  summary: LocalizedText;
  /** The visible texts below are short on purpose; lib/projects.ts checks their length. */
  problem: LocalizedText;
  /** The solution in one or two sentences; the full explanation goes in howItWorks. */
  solution: LocalizedText;
  /**
   * How the system works in detail, one paragraph each. Shown under "Technical details",
   * which is collapsed by default.
   */
  howItWorks?: LocalizedText[];
  role: LocalizedText;
  /** At most 3 short results. */
  results: LocalizedText[];
  /** At most 4 short key points, from the CV or from the project's own documentation. */
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
  /** Before/after figures; the case study shows them only when there are some. */
  metrics?: ProjectMetric[];
  /** How the system is built; the case study shows it only when it is set. */
  architecture?: ProjectArchitecture;
  /** The event the project was used at; the case study shows it only when it is set. */
  event?: ProjectEvent;
  /** Optional details that add credibility when the information exists. */
  decisions?: LocalizedText[];
  failureHandling?: LocalizedText[];
  nextSteps?: LocalizedText;
  /** Last real content change, used by the sitemap. */
  lastUpdated: CalendarDate;
}
