import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SocialNetworkLogo } from "@/components/ui/social-icon-link";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  MapPinIcon,
  WhatsAppLogoIcon,
} from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { getHeroStats } from "@/lib/hero-stats";
import { splitAroundPhrase } from "@/lib/highlight";
import { getResumeLink } from "@/lib/resume";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import kevinGarabitaCutout from "../../../public/images/kevin-garabita-cutout.png";

/**
 * First view of the home page. Recruiters come first, clients have their own way in.
 *
 * Three grid areas (globals.css, .hero-grid), so the one photo sits in a different place
 * per screen without a second copy of it:
 * - phones: the name, role and place on the left with the photo beside them, then the
 *   statement, the actions, the profiles and the figures at full width. The photo is
 *   small, so the statement and both actions fit the first screen of a 390 × 664 phone.
 * - from md: the text on the left (7 of 12 columns) and the large photo on the right,
 *   the text block centred on it.
 *
 * Text: the h1 reads "Kevin Garabita — <role>" (the dash is only read; on screen the
 * role takes its own line), then the place; the statement, profile.heroSubtitle, the
 * largest type of the home page, with its key words in blue; the CV as the one primary
 * action (what a recruiter looks for first) and WhatsApp beside it;
 * LinkedIn, GitHub and the way in for clients (the services page); and a strip of real
 * figures (lib/hero-stats.ts) under a hairline.
 *
 * Photo: his cut-out portrait in front of the royal-to-navy backlight, the curls over its
 * edge, with the dashed orbit ring and its dot, as Kevin asked to keep it. It is the LCP
 * element: preloaded with high priority and never fades in (only the decoration does).
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const resume = getResumeLink(locale);
  const { location } = profile;
  const stats = getHeroStats(dictionary);
  const [beforeHighlight, highlight, afterHighlight] = splitAroundPhrase(
    localize(profile.heroSubtitle, locale),
    profile.heroSubtitleHighlight &&
      localize(profile.heroSubtitleHighlight, locale),
  );

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <Container className="hero-grid pt-6 pb-14 sm:pb-16 md:pt-10 lg:pb-20 short:pt-4">
        <div className="[grid-area:title]">
          <h1
            id="hero-title"
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
          <p className="entrance-slide mt-2 flex items-center gap-1.5 text-small text-muted [--entrance-order:1]">
            <MapPinIcon className="size-4 shrink-0 text-accent" />
            {location.city}, {location.region}
          </p>
        </div>

        <div className="[grid-area:photo]">
          <div className="hero-photo-frame relative mx-auto aspect-900/1024">
            {/* Soft glow and orbit ring, centred on the portrait. */}
            <div
              aria-hidden="true"
              className="entrance-scale absolute -inset-x-[14%] -top-[6%] aspect-square rounded-full bg-[radial-gradient(closest-side,var(--tint-accent),transparent)] [--entrance-order:1]"
            />
            <div
              aria-hidden="true"
              className="hero-orbit entrance-scale absolute -inset-x-[3%] top-[4%] aspect-square [--entrance-order:3]"
            >
              <div className="motion-orbit size-full rounded-full border border-dashed border-control-border">
                <span className="absolute top-[14.6%] left-[14.6%] size-2 -translate-1/2 rounded-full bg-accent md:size-3" />
              </div>
            </div>

            {/* A royal blue backlight behind the head and shoulders, like a studio light,
                instead of a solid disc: nothing shows through the shirt, whose fade
                is baked into the photo's PNG (it looks right without CSS masks). */}
            <div
              aria-hidden="true"
              className="hero-backlight entrance-scale absolute inset-x-[12%] top-[2%] aspect-square rounded-full [--entrance-order:1]"
            />
            <Image
              src={kevinGarabitaCutout}
              alt={dictionary.hero.photoAlt}
              preload
              fetchPriority="high"
              // The width the photo really takes (.hero-photo-frame in globals.css):
              // 7rem under 360 px, 8.5rem on phones and 10rem from sm beside the name; from md its column
              // (5 of 12), capped at 30rem (33rem from 1800 px); 12rem on short screens.
              sizes="(max-height: 30rem) 12rem, (min-width: 1800px) 33rem, (min-width: 1280px) 30rem, (min-width: 768px) 37vw, (min-width: 640px) 10rem, (min-width: 360px) 8.5rem, 7rem"
              className="entrance-lift absolute inset-0 size-full"
            />
          </div>
        </div>

        <div className="[grid-area:body] md:mt-8">
          <p className="entrance-slide font-display text-statement font-bold text-heading [--entrance-order:2]">
            {beforeHighlight}
            {highlight ? (
              <span className="text-accent">{highlight}</span>
            ) : null}
            {afterHighlight}
          </p>

          <div className="entrance mt-7 flex flex-col gap-3 [--entrance-order:3] sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
            <ButtonLink
              href={resume.href}
              hrefLang={resume.language}
              type="application/pdf"
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon={<ExternalLinkIcon className="size-4" />}
            >
              {dictionary.resume.view}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              leadingIcon={<WhatsAppLogoIcon colors="brand" />}
            >
              {dictionary.hero.writeOnWhatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
          </div>

          {/* LinkedIn, GitHub and Instagram right under the actions (recruiters look
              for them first), then the way in for clients. */}
          <ul className="entrance mt-3 flex flex-wrap items-center gap-x-6 [--entrance-order:3]">
            {profile.socialProfiles.map((socialProfile) => (
              <li key={socialProfile.network}>
                <a
                  href={socialProfile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-heading no-underline hover:text-accent"
                >
                  <SocialNetworkLogo network={socialProfile.network} />
                  {socialNetworkNames[socialProfile.network]}
                  <span className="sr-only"> ({dictionary.opensInNewTab})</span>
                </a>
              </li>
            ))}
            <li className="max-sm:basis-full">
              <Link
                href={`/${locale}/services`}
                className="group inline-flex min-h-11 items-center gap-1.5"
              >
                {dictionary.hero.servicesLink}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          </ul>

          {stats.length > 0 ? (
            <div className="entrance mt-8 border-t border-hairline pt-6 [--entrance-order:4] md:mt-10">
              <h2 className="sr-only">{dictionary.hero.stats.label}</h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-6 xl:grid-cols-4 xl:gap-x-8">
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <p className="font-display text-title font-bold text-heading tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-small text-muted">{stat.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
