import Image from "next/image";

import { MotionToggle } from "@/components/motion/motion-toggle";
import { RotatingTitle } from "@/components/motion/rotating-title";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  ArrowDownIcon,
  ChatBubbleIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { joinClassNames } from "@/lib/class-names";
import { getHomeSectionHref, homeSectionIds } from "@/lib/home-sections";
import { socialNetworkNames } from "@/lib/social-networks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import kevinGarabitaCutout from "../../../public/images/kevin-garabita-cutout.png";

/**
 * Decorative chips floating around the photo: the three tools named in the hero
 * subtitle. Hidden from screen readers, which already get them in the subtitle.
 */
const floatingTechnologies = [
  {
    name: "FastAPI",
    placement:
      "top-[46%] -left-[20%] [--entrance-order:4] sm:top-[30%] sm:-left-[10%]",
    floatDelay: "[--float-delay:0s]",
  },
  {
    name: "n8n",
    placement:
      "top-[8%] -right-[14%] [--entrance-order:5] sm:top-[14%] sm:-right-[4%]",
    floatDelay: "[--float-delay:-2.4s]",
  },
  {
    name: "OpenAI API",
    placement:
      "bottom-[10%] -right-[22%] [--entrance-order:6] sm:bottom-[14%] sm:-right-[10%]",
    floatDelay: "[--float-delay:-4.8s]",
  },
];

/**
 * First view of the home page.
 *
 * Text: location, then the h1 (the name, plus every title as static text for screen
 * readers), the rotating title (visual only), the subtitle and two calls to action:
 * the projects and WhatsApp. CV, profiles and the motion pause button sit below.
 *
 * Photo: Kevin's cut-out portrait in front of an orange-to-red circle, with an orbit
 * ring and three floating chips. The photo is the LCP element: it is preloaded and
 * never fades in (only the decoration does). The text comes first in the HTML; on
 * phones the photo is placed above it visually.
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const { location } = profile;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-x-clip"
    >
      <div
        aria-hidden="true"
        className="grid-texture absolute inset-x-0 -top-(--header-height) bottom-0 -z-10"
      />

      <Container className="grid items-center gap-y-8 pt-6 pb-16 md:grid-cols-12 md:gap-x-8 md:pt-10 lg:min-h-[calc(100svh-var(--header-height))] lg:gap-x-12 lg:py-12">
        <div className="md:col-span-7">
          <p className="entrance inline-flex items-center gap-2 rounded-tag border border-hairline bg-raised px-3 py-1.5 text-small text-muted [--entrance-order:0]">
            <MapPinIcon className="size-4 text-accent" />
            <span>
              {location.city}, {location.region} ·{" "}
              {localize(profile.workMode, locale)}
            </span>
          </p>

          <h1 id="hero-title" className="mt-6 font-display lg:mt-8">
            <span className="entrance block text-title font-bold text-heading [--entrance-order:1]">
              {profile.displayName}
            </span>
            <span className="sr-only">{profile.heroTitles.join(" · ")}</span>
            <RotatingTitle
              titles={profile.heroTitles}
              className="entrance mt-2 text-display font-extrabold [--entrance-order:2]"
              titleClassName="text-gradient-brand pb-[0.08em]"
            />
          </h1>

          <p className="entrance mt-6 max-w-xl text-subtitle text-body [--entrance-order:3]">
            {localize(profile.heroSubtitle, locale)}
          </p>

          <div className="entrance mt-8 flex flex-wrap gap-3 [--entrance-order:4]">
            <ButtonLink
              href={getHomeSectionHref(locale, homeSectionIds.projects)}
              trailingIcon={<ArrowDownIcon />}
            >
              {dictionary.hero.viewProjects}
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              leadingIcon={<ChatBubbleIcon className="text-accent" />}
            >
              {dictionary.hero.writeOnWhatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
          </div>

          <div className="entrance mt-6 flex flex-wrap items-center gap-x-6 gap-y-1 text-small [--entrance-order:5]">
            <ul className="flex flex-wrap gap-x-5">
              <li>
                <a
                  href={profile.resumeFiles[locale]}
                  download
                  hrefLang={locale}
                  type="application/pdf"
                  className="inline-flex min-h-11 items-center font-bold"
                >
                  {dictionary.resume.download}
                </a>
              </li>
              {profile.socialProfiles.map((socialProfile) => (
                <li key={socialProfile.network}>
                  <a
                    href={socialProfile.url}
                    rel="me"
                    className="inline-flex min-h-11 items-center font-bold"
                  >
                    {socialNetworkNames[socialProfile.network]}
                  </a>
                </li>
              ))}
            </ul>
            <MotionToggle label={dictionary.hero.pauseAnimations} />
          </div>
        </div>

        <div className="order-first mx-auto w-full max-w-60 sm:max-w-80 md:order-0 md:col-span-5 md:max-w-none">
          <div className="relative aspect-900/1024">
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
                className="entrance-scale absolute inset-x-[4%] top-[10%] aspect-square rounded-full bg-(image:--gradient-brand-diagonal) [--entrance-order:1]"
              />
              <Image
                src={kevinGarabitaCutout}
                alt={dictionary.hero.photoAlt}
                preload
                sizes="(min-width: 1280px) 30rem, (min-width: 768px) 40vw, (min-width: 640px) 20rem, 16rem"
                className="hero-photo entrance-lift absolute inset-0 size-full"
              />
            </div>

            {floatingTechnologies.map((technology) => (
              <div
                key={technology.name}
                aria-hidden="true"
                className={joinClassNames(
                  "entrance absolute",
                  technology.placement,
                )}
              >
                <span
                  className={joinClassNames(
                    "motion-float flex items-center gap-2 rounded-tag border border-hairline bg-raised px-3 py-1.5 text-small font-bold whitespace-nowrap text-heading shadow-(--shadow-floating)",
                    technology.floatDelay,
                  )}
                >
                  <span className="size-2 rounded-full bg-(image:--gradient-brand-diagonal)" />
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
