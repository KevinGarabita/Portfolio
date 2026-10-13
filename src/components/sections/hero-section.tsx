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
import { joinClassNames } from "@/lib/class-names";
import { getResumeLink } from "@/lib/resume";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import kevinGarabitaCutout from "../../../public/images/kevin-garabita-cutout.png";

/**
 * Decorative chips floating around the photo: three of the tools Kevin works with.
 * Hidden from screen readers. Kevin asked to keep them with the photo, as they were.
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
      "top-[8%] -right-[14%] [--entrance-order:5] sm:top-[14%] sm:-right-[4%] md:right-0",
    floatDelay: "[--float-delay:-2.4s]",
  },
  {
    name: "OpenAI API",
    placement:
      "bottom-[10%] -right-[22%] [--entrance-order:6] sm:bottom-[14%] sm:-right-[10%] md:-right-[3%]",
    floatDelay: "[--float-delay:-4.8s]",
  },
];

/**
 * First view of the home page, written for clients.
 *
 * Text (left from md): the h1, which reads "Kevin Garabita — <role>" (the dash is only
 * read; on screen the role takes its own line), and the place; then the statement,
 * profile.heroSubtitle, the value line for clients, in the largest type of the home
 * page (text-statement, sized for this column); then one primary action, WhatsApp, and
 * the CV as the secondary one. The CV opens in a new tab, in the page's language or,
 * when there is none, in Spanish. Kevin's availability goes above the actions once
 * content/availability.ts has it.
 *
 * Photo (right from md; first on phones, but not on short screens, where the text
 * would fall below the fold): Kevin asked to keep his photo as it was before the
 * redesign. His cut-out portrait in front of the orange-to-red circle, the curls over
 * the circle's edge, with the dashed orbit ring and its dot and three floating chips.
 * The photo is the LCP element: it is preloaded with high priority and never fades in
 * (only the decoration does).
 *
 * The text moves in on load without fading (.entrance-slide), so it paints on the
 * first frame; the actions rise and fade in (.entrance).
 */
export async function HeroSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const resume = getResumeLink(locale);
  const { location } = profile;

  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip">
      <Container className="grid items-center gap-y-8 pt-6 pb-12 sm:pb-16 md:grid-cols-12 md:gap-x-8 md:pt-10 lg:gap-x-12 lg:pt-12 lg:pb-20 short:pt-4">
        <div className="md:col-span-7">
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

          <p className="entrance-slide mt-6 font-display text-statement font-bold text-heading [--entrance-order:2] lg:mt-8">
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
        </div>

        <div className="order-first mx-auto w-full max-w-52 min-[22.5rem]:max-w-60 sm:max-w-80 md:order-0 md:col-span-5 md:max-w-none short:order-0 short:max-w-48">
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
                fetchPriority="high"
                // The width the photo column really takes at each breakpoint (its max-w-*
                // and md:col-span-5), so phones get a 480w file instead of a 640w one.
                sizes="(max-height: 30rem) 12rem, (min-width: 1800px) 33rem, (min-width: 1280px) 30rem, (min-width: 768px) 37vw, (min-width: 640px) 20rem, (min-width: 360px) 15rem, 13rem"
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
