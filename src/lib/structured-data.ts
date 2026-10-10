import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { homeDescription } from "@/content/site-metadata";
import { skillGroups } from "@/content/skills";
import { supportedLocales, type Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";

import {
  buildHomeTitle,
  getHomeLastModified,
  localizePath,
  toAbsoluteUrl,
} from "./metadata";

/*
 * schema.org types for the JSON-LD of the home page, written in the style of the
 * schema-dts package but only with the properties this site uses.
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

export interface StructuredDataGraph {
  "@context": "https://schema.org";
  "@graph": (WebSite | ProfilePage | Person)[];
}

/** Public path of the profile photo in /public. */
const profilePhotoPath = "/images/kevin-garabita.jpg";

/** Skill groups that are not technical skills, so they stay out of `knowsAbout`. */
const nonTechnicalSkillGroupIds = new Set(["languages"]);

function toCollegeOrUniversity(institution: string): CollegeOrUniversity {
  return { "@type": "CollegeOrUniversity", name: institution };
}

/**
 * The home page as a ProfilePage about Kevin, inside the WebSite. The Person and the
 * WebSite keep the same @id in every language because they are the same entities;
 * only the page and the localized texts change.
 */
export function buildHomeStructuredData(locale: Locale): StructuredDataGraph {
  const homeUrl = toAbsoluteUrl(localizePath("/", locale));
  const websiteId = toAbsoluteUrl("/#website");
  const personId = toAbsoluteUrl("/#person");

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
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: toAbsoluteUrl("/"),
        name: profile.displayName,
        inLanguage: [...supportedLocales],
      },
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
