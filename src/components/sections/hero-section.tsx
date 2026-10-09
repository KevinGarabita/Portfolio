import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";
import { socialNetworkNames } from "@/lib/social-networks";

import kevinGarabitaPhoto from "../../../public/images/kevin-garabita.jpg";

/**
 * First view of the home page. Phones: the photo comes first (capped at 60% of the width
 * so the name, role and main button still fit in the first screen), with the location
 * beside it. From tablets up: photo on the left (5 of 12 columns, about 40%), text on
 * the right (7 columns), aligned to the bottom of the photo.
 *
 * The text comes first in the HTML so screen readers start with the name; the grid
 * places the photo visually.
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { location } = profile;

  return (
    <section
      aria-labelledby="hero-title"
      className="pt-6 pb-16 md:pt-10 lg:pt-14 lg:pb-24"
    >
      <Container className="grid grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-12 md:grid-rows-[1fr_auto_auto] md:gap-x-8 lg:gap-x-10 lg:gap-y-8">
        <div className="col-span-2 row-start-2 md:col-span-7 md:col-start-6 md:row-start-1 md:self-end md:pl-2 lg:pl-6 xl:pl-10">
          <h1
            id="hero-title"
            className="font-display text-display font-extrabold"
          >
            {profile.displayName}
          </h1>
          <p className="mt-3 font-display text-subtitle font-bold text-heading md:mt-5">
            {localize(profile.role, locale)}
          </p>
          <p className="mt-4 max-w-prose">
            {localize(profile.headline, locale)}
          </p>
        </div>

        <p className="col-start-2 row-start-1 self-end text-small text-muted md:col-span-7 md:col-start-6 md:row-start-2 md:pl-2 md:text-base lg:pl-6 xl:pl-10">
          <span className="block md:inline">
            {location.city}, {location.region},{" "}
            {localize(location.country, locale)}
          </span>
          <span aria-hidden="true" className="hidden md:inline">
            {" · "}
          </span>
          <span className="mt-1 block md:mt-0 md:inline">
            {localize(profile.workMode, locale)}
          </span>
        </p>

        <div className="col-span-2 row-start-3 md:col-span-7 md:col-start-6 md:row-start-3 md:pl-2 lg:pl-6 xl:pl-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink
              href={getHomeSectionHref(locale, homeSectionIds.projects)}
            >
              {dictionary.hero.viewProjects}
            </ButtonLink>
            <a
              href={profile.resumeFiles[locale]}
              download
              hrefLang={locale}
              type="application/pdf"
              className="inline-block py-2 font-bold"
            >
              {dictionary.resume.download}
            </a>
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-6 text-small">
            {profile.socialProfiles.map((socialProfile) => (
              <li key={socialProfile.network}>
                <a
                  href={socialProfile.url}
                  rel="me"
                  className="inline-block py-1"
                >
                  {socialNetworkNames[socialProfile.network]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-start-1 row-start-1 md:col-span-5 md:row-span-3 md:row-start-1">
          <Image
            src={kevinGarabitaPhoto}
            alt={dictionary.hero.photoAlt}
            placeholder="blur"
            preload
            sizes="(min-width: 1280px) 480px, (min-width: 768px) 38vw, 60vw"
            className="aspect-4/5 w-full rounded-media object-cover"
            // Set inline (not as a class) so the blurred placeholder uses the same crop.
            // Left of center hides the curtain at the right edge of the photo.
            style={{ objectPosition: "30% top" }}
          />
        </div>
      </Container>
    </section>
  );
}
