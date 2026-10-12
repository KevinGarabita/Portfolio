import Image from "next/image";

import { AvailabilityNote } from "@/components/recruiter/availability-note";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  ExternalLinkIcon,
  MapPinIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getResumeLink } from "@/lib/resume";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import kevinGarabitaCutout from "../../../public/images/kevin-garabita-cutout.png";

/**
 * First view of the home page, written for clients and short enough that the projects
 * start on the first screen (a 390 × 844 phone and a 1440 × 900 desktop).
 *
 * - A byline: Kevin's portrait as a medallion (the cut-out photo over the orange-to-red
 *   disc, the curls breaking out of its top edge) beside the h1, which reads "Kevin
 *   Garabita — <role>" (the dash is only read; on screen the role takes its own line),
 *   and the place.
 * - The statement: profile.heroSubtitle, the value line for clients, in the largest type
 *   of the page. It is the one bold move of the design.
 * - One primary action, WhatsApp, and the CV as the secondary one; the CV opens in a
 *   new tab, in the page's language or, when there is none, in Spanish. Kevin's
 *   availability goes above them once content/availability.ts has it.
 *
 * The text arrives in sequence on load without fading (.entrance-slide), so it paints
 * on the first frame: on desktops the statement is the page's LCP element. On phones it
 * is the lead project's screenshot, just below the hero, which is preloaded
 * (ProjectGrid); the portrait is not.
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const resume = getResumeLink(locale);
  const { location } = profile;

  return (
    <section aria-labelledby="hero-title">
      <Container className="pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 short:pt-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative aspect-900/1024 w-24 shrink-0 sm:w-28 lg:w-40">
            <div
              aria-hidden="true"
              className="entrance-scale absolute inset-x-[4%] top-[14%] aspect-square rounded-full bg-(image:--gradient-brand-diagonal)"
            />
            <Image
              src={kevinGarabitaCutout}
              alt={dictionary.hero.photoAlt}
              // The medallion's width: w-24, sm:w-28, lg:w-40.
              sizes="(min-width: 1024px) 160px, (min-width: 640px) 112px, 96px"
              // In the first view, so it loads right away, but after the LCP image:
              // "low" also keeps React from preloading it (it preloads every image that
              // is not lazy or low priority).
              loading="eager"
              fetchPriority="low"
              className="portrait-medallion absolute inset-0 size-full"
            />
          </div>

          <div className="min-w-0">
            <h1
              id="hero-title"
              className="entrance-slide font-display [--entrance-order:0]"
            >
              <span className="block text-title font-bold text-heading">
                {profile.displayName}
              </span>
              <span className="sr-only">{" — "}</span>
              <span className="mt-1 block text-base leading-snug font-bold text-muted">
                {localize(profile.role, locale)}
              </span>
            </h1>
            <p className="entrance-slide mt-2 flex items-center gap-1.5 text-small text-muted [--entrance-order:1]">
              <MapPinIcon className="size-4 text-accent" />
              {location.city}, {location.region}
            </p>
          </div>
        </div>

        <p className="entrance-slide mt-8 max-w-[16em] font-display text-headline font-bold text-heading [--entrance-order:2] sm:mt-10 lg:mt-12">
          {localize(profile.heroSubtitle, locale)}
        </p>

        <div className="entrance mt-8 flex flex-col gap-3 [--entrance-order:3] sm:flex-row sm:flex-wrap sm:items-center lg:mt-10">
          {/* Only when content/availability.ts has a status; renders nothing otherwise. */}
          <AvailabilityNote
            locale={locale}
            dictionary={dictionary}
            className="mb-1 sm:basis-full"
          />
          <ButtonLink
            href={buildWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            leadingIcon={<WhatsAppLogoIcon />}
          >
            {dictionary.hero.writeOnWhatsApp}
            <span className="sr-only"> ({dictionary.opensInNewTab})</span>
          </ButtonLink>
          <ButtonLink
            href={resume.href}
            hrefLang={resume.language}
            type="application/pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            trailingIcon={<ExternalLinkIcon className="size-4 text-accent" />}
          >
            {dictionary.resume.view}
            <span className="sr-only"> ({dictionary.opensInNewTab})</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
