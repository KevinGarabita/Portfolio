import Image from "next/image";

import { AvailabilityNote } from "@/components/recruiter/availability-note";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import {
  ExternalLinkIcon,
  MapPinIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import { education } from "@/content/education";
import { workExperience } from "@/content/experience";
import { profile } from "@/content/profile";
import { labelColon, localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";
import { getResumeLink } from "@/lib/resume";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import kevinGarabitaCutout from "../../../public/images/kevin-garabita-cutout.png";

/**
 * First view of the home page, for clients and recruiters alike.
 *
 * Text (left from md): the h1, which reads "Kevin Garabita — <role>" (the dash is only
 * read; on screen the role takes its own line, at subtitle size: it is what a recruiter
 * looks for first), and the place; then the statement, profile.heroSubtitle, the value
 * line for clients, in the largest type of the home page; then Kevin's availability,
 * WhatsApp as the one primary action and the CV as the secondary one (in the page's
 * language or, when there is none, in Spanish), then LinkedIn and GitHub as links. Under them, the facts a recruiter would
 * otherwise piece together from three sections: the current or last job and the degree
 * with its expected graduation, straight from content/experience.ts and education.ts.
 *
 * Photo (right from md; first on phones, but not on short screens, where the text
 * would fall below the fold): his cut-out portrait in front of the orange-to-red
 * circle, the curls over the circle's edge, with the dashed orbit ring and its dot.
 * The photo is the LCP element: it is preloaded with high priority and never fades in
 * (only the decoration does).
 *
 * The text moves in on load without fading (.entrance-slide), so it paints on the
 * first frame; the actions and the facts rise and fade in (.entrance).
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const resume = getResumeLink(locale);
  const { location } = profile;
  const [latestJob] = workExperience;
  const [studies] = education;

  return (
    <section
      aria-labelledby="hero-title"
      data-build-section="hero"
      className="overflow-x-clip"
    >
      <Container className="grid items-center gap-y-6 pt-6 pb-12 sm:pb-16 md:grid-cols-12 md:gap-x-8 md:pt-10 lg:gap-x-12 lg:pt-10 lg:pb-12 short:pt-4">
        <div className="md:col-span-7">
          <h1
            id="hero-title"
            data-build="type"
            data-build-tag="h1"
            className="entrance-slide font-display [--entrance-order:0]"
          >
            <span className="block text-title font-bold text-heading">
              {profile.displayName}
            </span>
            <span className="sr-only">{" — "}</span>
            <span className="mt-1 block text-subtitle font-bold text-body">
              {localize(profile.role, locale)}
            </span>
          </h1>
          <p
            data-build="type"
            data-build-tag="p.lugar"
            className="entrance-slide mt-2 flex items-center gap-1.5 text-small text-muted [--entrance-order:1]"
          >
            <MapPinIcon className="size-4 text-accent" />
            {location.city}, {location.region}
          </p>

          <p
            data-build="type"
            data-build-tag="p.frase"
            className="entrance-slide mt-6 font-display text-statement font-bold text-heading [--entrance-order:2] lg:mt-6"
          >
            {localize(profile.heroSubtitle, locale)}
          </p>

          <div className="entrance mt-8 flex flex-col gap-3 [--entrance-order:3] sm:flex-row sm:flex-wrap sm:items-center">
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
              data-build="click"
              data-build-tag="a.cta"
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
              data-build="click"
              data-build-tag="a.cv"
            >
              {dictionary.resume.view}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
          </div>

          {/* LinkedIn and GitHub right under the actions: recruiters look for them first. */}
          <ul
            data-build="drag"
            data-build-tag="ul.redes"
            className="entrance mt-3 flex flex-wrap gap-x-6 [--entrance-order:3]"
          >
            {profile.socialProfiles.map((socialProfile) => (
              <li key={socialProfile.network}>
                <a
                  href={socialProfile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2"
                >
                  <SocialNetworkLogo network={socialProfile.network} />
                  {socialNetworkNames[socialProfile.network]}
                  <span className="sr-only"> ({dictionary.opensInNewTab})</span>
                </a>
              </li>
            ))}
          </ul>

          <dl className="entrance mt-6 grid gap-x-8 gap-y-5 border-t border-hairline pt-5 text-small [--entrance-order:4] sm:grid-cols-2">
            {latestJob ? (
              <div data-build="drag" data-build-tag="div.dato">
                <dt className="text-muted">
                  {dictionary.hero.facts.experience}
                </dt>
                <dd className="mt-1">
                  <span className="font-bold text-heading">
                    {localize(latestJob.role, locale)}
                  </span>
                  , {latestJob.organization}
                  {latestJob.organizationDescription
                    ? `, ${localize(latestJob.organizationDescription, locale)}`
                    : null}
                  <span className="block text-muted">
                    {formatDateRange(
                      latestJob.period,
                      locale,
                      dictionary.experience.present,
                    )}
                  </span>
                </dd>
              </div>
            ) : null}
            {studies ? (
              <div data-build="drag" data-build-tag="div.dato">
                <dt className="text-muted">
                  {dictionary.hero.facts.education}
                </dt>
                <dd className="mt-1">
                  <span className="font-bold text-heading">
                    {localize(studies.degree, locale)}
                  </span>
                  , {studies.institution}
                  {studies.expectedGraduation ? (
                    <span className="block text-muted">
                      {dictionary.education.expectedGraduation}
                      {labelColon(locale)}{" "}
                      {formatYearMonth(studies.expectedGraduation, locale)}
                    </span>
                  ) : null}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="order-first mx-auto w-full max-w-48 min-[22.5rem]:max-w-52 sm:max-w-80 md:order-0 md:col-span-5 md:max-w-none short:order-0 short:max-w-48">
          <div
            data-build="draw"
            data-build-tag="img.foto"
            className="relative aspect-900/1024"
          >
            {/* Soft glow and orbit ring, centred on the circle. */}
            <div
              aria-hidden="true"
              className="entrance-scale absolute -inset-x-[14%] -top-[6%] aspect-square rounded-full bg-[radial-gradient(closest-side,var(--tint-accent),transparent)] [--entrance-order:1]"
            />
            <div
              aria-hidden="true"
              className="hero-orbit entrance-scale absolute -inset-x-[3%] top-[4%] aspect-square [--entrance-order:3]"
            >
              <div className="motion-orbit size-full rounded-full border border-dashed border-control-border">
                <span className="absolute top-[14.6%] left-[14.6%] size-3 -translate-1/2 rounded-full bg-accent shadow-[0_0_1rem_var(--color-accent)]" />
              </div>
            </div>

            {/* Circle and photo fade out together at the bottom (.hero-portrait). The top
                curls overlap the circle's edge, which gives the photo its depth. */}
            <div className="hero-portrait absolute inset-0">
              <div
                aria-hidden="true"
                data-build="resize"
                data-build-tag="div.circulo"
                className="entrance-scale absolute inset-x-[4%] top-[10%] aspect-square rounded-full bg-(image:--gradient-brand-diagonal) [--entrance-order:1]"
              />
              <Image
                src={kevinGarabitaCutout}
                alt={dictionary.hero.photoAlt}
                preload
                fetchPriority="high"
                // The width the photo column really takes at each breakpoint (its max-w-*
                // and md:col-span-5), so phones get a 480w file instead of a 640w one.
                sizes="(max-height: 30rem) 12rem, (min-width: 1800px) 33rem, (min-width: 1280px) 30rem, (min-width: 768px) 37vw, (min-width: 640px) 20rem, (min-width: 360px) 13rem, 12rem"
                className="hero-photo entrance-lift absolute inset-0 size-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
