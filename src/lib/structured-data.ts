import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { homeDescription } from "@/content/site-metadata";
import { skillGroups } from "@/content/skills";
import { dictionariesByLocale } from "@/i18n/dictionaries-by-locale";
import { supportedLocales, type Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import type { Project } from "@/types/content";

import {
  buildHomeTitle,
  getHomeLastModified,
  getShareImagePath,
  localizePath,
  toAbsoluteUrl,
} from "./metadata";
import { getProjectTechnologies } from "./projects";

/*
 * schema.org types for the JSON-LD of the home page and the case studies, written in the
 * style of the schema-dts package but only with the properties this site uses.
 * Validate changes with https://validator.schema.org and
 * https://search.google.com/test/rich-results
 */

interface NodeReference {
  "@id": string;
}

interface PostalAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

interface CollegeOrUniversity {
  "@type": "CollegeOrUniversity";
  name: string;
}

interface Person {
  "@type": "Person";
  "@id": string;
  name: string;
  alternateName: string;
  jobTitle: string;
  url: string;
  image: string;
  email: string;
  telephone: string;
  address: PostalAddress;
  sameAs: string[];
  affiliation?: CollegeOrUniversity[];
  alumniOf?: CollegeOrUniversity[];
  knowsAbout: string[];
  knowsLanguage: string[];
}

/** Kevin on pages other than the home, which has the full Person: enough to identify him. */
interface PersonSummary {
  "@type": "Person";
  "@id": string;
  name: string;
  url: string;
}

interface WebSite {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  inLanguage: string[];
}

interface ProfilePage {
  "@type": "ProfilePage";
  "@id": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  dateModified: string;
  isPartOf: NodeReference;
  mainEntity: NodeReference;
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbList {
  "@type": "BreadcrumbList";
  "@id": string;
  itemListElement: ListItem[];
}

/** A project of a case study. Kevin is its author, or a contributor when it was team work. */
interface CreativeWork {
  "@type": "CreativeWork";
  "@id": string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  author?: NodeReference;
  creator?: NodeReference;
  contributor?: NodeReference;
  dateCreated?: string;
  dateModified: string;
  keywords: string[];
  image: string[];
  isPartOf: NodeReference;
}

export interface StructuredDataGraph {
  "@context": "https://schema.org";
  "@graph": (
    | WebSite
    | ProfilePage
    | Person
    | PersonSummary
    | BreadcrumbList
    | CreativeWork
  )[];
}

/** Public path of the profile photo in /public. */
const profilePhotoPath = "/images/kevin-garabita.jpg";

/** Skill groups that are not technical skills, so they stay out of `knowsAbout`. */
const nonTechnicalSkillGroupIds = new Set(["languages"]);

function toCollegeOrUniversity(institution: string): CollegeOrUniversity {
  return { "@type": "CollegeOrUniversity", name: institution };
}

/*
 * The Person and the WebSite keep the same @id on every page and in every language
 * because they are the same entities; only the pages and the localized texts change.
 */
function getWebsiteId(): string {
  return toAbsoluteUrl("/#website");
}

function getPersonId(): string {
  return toAbsoluteUrl("/#person");
}

function buildWebSite(): WebSite {
  return {
    "@type": "WebSite",
    "@id": getWebsiteId(),
    url: toAbsoluteUrl("/"),
    name: profile.displayName,
    inLanguage: [...supportedLocales],
  };
}

/** The home page as a ProfilePage about Kevin, inside the WebSite. */
export function buildHomeStructuredData(locale: Locale): StructuredDataGraph {
  const homeUrl = toAbsoluteUrl(localizePath("/", locale));
  const websiteId = getWebsiteId();
  const personId = getPersonId();

  // alumniOf lists every school in content/education.ts, finished or not: it is the
  // property schema.org gives a person's schools, and Kevin asked for Universidad Modelo
  // there. affiliation repeats the ones without an end date, so the data still says he
  // studies there today and has not graduated.
  const schools = education.map((entry) =>
    toCollegeOrUniversity(entry.institution),
  );
  const currentSchools = education
    .filter((entry) => !entry.period.end)
    .map((entry) => toCollegeOrUniversity(entry.institution));

  const person: Person = {
    "@type": "Person",
    "@id": personId,
    name: profile.displayName,
    alternateName: profile.fullName,
    jobTitle: localize(profile.role, locale),
    url: homeUrl,
    image: toAbsoluteUrl(profilePhotoPath),
    email: profile.email,
    telephone: profile.phone.international,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.countryCode,
    },
    sameAs: profile.socialProfiles.map((socialProfile) => socialProfile.url),
    ...(schools.length > 0 ? { alumniOf: schools } : {}),
    ...(currentSchools.length > 0 ? { affiliation: currentSchools } : {}),
    knowsAbout: skillGroups
      .filter((group) => !nonTechnicalSkillGroupIds.has(group.id))
      .flatMap((group) =>
        group.items.map((item) => localize(item.name, locale)),
      ),
    // The "languages" skill group: native Spanish and intermediate English.
    knowsLanguage: ["es", "en"],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebSite(),
      {
        "@type": "ProfilePage",
        "@id": `${homeUrl}#profile-page`,
        url: homeUrl,
        name: buildHomeTitle(locale),
        description: localize(homeDescription, locale),
        inLanguage: locale,
        dateModified: getHomeLastModified(),
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      person,
    ],
  };
}

/**
 * A case study: the breadcrumb (home → projects → project) and the project as a
 * CreativeWork by Kevin, inside the WebSite. The WebSite and a short Person go in the
 * same graph so every @id reference resolves on the page itself.
 */
export function buildProjectStructuredData(
  project: Project,
  locale: Locale,
): StructuredDataGraph {
  const pathWithoutLocale = `/projects/${project.slug}`;
  const pageUrl = toAbsoluteUrl(localizePath(pathWithoutLocale, locale));
  const homeUrl = toAbsoluteUrl(localizePath("/", locale));
  const projectName = localize(project.name, locale);
  const { siteNavigation } = dictionariesByLocale[locale];
  const kevin: NodeReference = { "@id": getPersonId() };

  const breadcrumbs: [name: string, url: string][] = [
    [siteNavigation.home, homeUrl],
    [siteNavigation.projects, toAbsoluteUrl(localizePath("/projects", locale))],
    [projectName, pageUrl],
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebSite(),
      {
        "@type": "Person",
        "@id": getPersonId(),
        name: profile.displayName,
        url: homeUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map(([name, url], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          item: url,
        })),
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: projectName,
        description: localize(project.summary, locale),
        url: pageUrl,
        inLanguage: locale,
        // Team work at Kobler lists Kevin as a contributor, not as its only author.
        ...(project.teamSetup === "individual"
          ? { author: kevin, creator: kevin }
          : { contributor: kevin }),
        ...(project.period ? { dateCreated: project.period.start } : {}),
        dateModified: project.lastUpdated,
        keywords: getProjectTechnologies(project),
        image: [
          getShareImagePath(pathWithoutLocale, locale),
          ...project.images.map((image) => image.src),
        ].map((path) => toAbsoluteUrl(path)),
        isPartOf: { "@id": getWebsiteId() },
      },
    ],
  };
}
