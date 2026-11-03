import type { Metadata } from "next";
import Link from "next/link";

import { ServicesStructuredData } from "@/components/seo/structured-data";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, WhatsAppLogoIcon } from "@/components/ui/icons";
import { processSteps } from "@/content/services";
import { profile } from "@/content/profile";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { buildServicesPageMetadata } from "@/lib/metadata";
import { getAllServices, getServiceExamples } from "@/lib/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata(): Promise<Metadata> {
  return buildServicesPageMetadata(await getCurrentLocale());
}

/**
 * The page for clients: what Kevin can build for a business, proved by the case
 * studies, how a project goes and what it costs (a quote per project). Here WhatsApp is
 * the one primary action, in its green; the home page leads with the CV instead. A short
 * line at the end sends recruiters to the home page.
 *
 * Same scale as the projects page and the case studies: the h1 at headline size, each
 * service under a hairline with its h2 on the left from lg. Nothing fades in on scroll.
 */
export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();
  const texts = dictionary.services;
  const whatsAppUrl = buildWhatsAppUrl(locale);

  return (
    <>
      <ServicesStructuredData />
      <Container className="pt-8 pb-16 sm:pt-10 lg:pt-14 lg:pb-24">
        <header className="max-w-3xl">
          <h1 className="entrance-slide font-display text-headline font-bold [--entrance-order:0]">
            {texts.title}
          </h1>
          <p className="entrance-slide mt-4 text-subtitle text-body [--entrance-order:1]">
            {texts.lead}
          </p>
          <div className="entrance mt-8 flex flex-col gap-3 [--entrance-order:2] sm:flex-row sm:items-center sm:gap-5">
            <ButtonLink
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              leadingIcon={<WhatsAppLogoIcon />}
            >
              {dictionary.hero.writeOnWhatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center wrap-anywhere"
            >
              {profile.email}
            </a>
          </div>
        </header>

        <h2 className="sr-only">{texts.listLabel}</h2>
        <ul className="mt-14 lg:mt-20">
          {getAllServices().map((service) => {
            const titleId = `${service.id}-title`;
            return (
              <li
                key={service.id}
                id={service.id}
                className="grid gap-6 border-t border-hairline py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <div className="lg:col-span-5">
                  <h3
                    id={titleId}
                    className="font-display text-title font-bold"
                  >
                    {localize(service.title, locale)}
                  </h3>
                  <p className="mt-4 max-w-prose text-body">
                    {localize(service.summary, locale)}
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-10">
                  <div>
                    <h4 className="text-small font-bold text-muted">
                      {texts.includes}
                    </h4>
                    <ul className="mt-3 flex flex-col gap-3">
                      {service.includes.map((item) => (
                        <li key={item.es} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-accent"
                          />
                          <span>{localize(item, locale)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-small font-bold text-muted">
                      {texts.examples}
                    </h4>
                    <ul className="mt-3 flex flex-col gap-2">
                      {getServiceExamples(service).map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/${locale}/projects/${project.slug}`}
                            className="link-frame flex items-center justify-between gap-4 rounded-media border px-4 py-3 no-underline"
                          >
                            <span className="flex flex-col gap-0.5">
                              <span className="link-frame-name font-bold text-heading decoration-accent decoration-2">
                                {localize(project.name, locale)}
                              </span>
                              {project.status ? (
                                <span className="flex items-center gap-2 text-small text-muted">
                                  {/* Orange only for live work, as on the status tags. */}
                                  <span
                                    aria-hidden="true"
                                    className={
                                      project.status === "in-production"
                                        ? "size-1.5 rounded-full bg-accent"
                                        : "size-1.5 rounded-full border border-control-border"
                                    }
                                  />
                                  <span className="sr-only">, </span>
                                  {dictionary.projects.status[project.status]}
                                </span>
                              ) : null}
                            </span>
                            <ArrowRightIcon className="size-4 shrink-0 text-accent" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <section
          aria-labelledby="process-title"
          className="border-t border-hairline py-10 lg:py-14"
        >
          <h2 id="process-title" className="font-display text-title font-bold">
            {texts.processTitle}
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
            {processSteps.map((step, index) => (
              <li
                key={step.title.es}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 lg:block"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full border border-accent font-bold text-accent tabular-nums"
                >
                  {index + 1}
                </span>
                <div className="pt-1.5 lg:pt-0">
                  <h3 className="text-subtitle font-bold lg:mt-4">
                    {localize(step.title, locale)}
                  </h3>
                  <p className="mt-2 text-muted">
                    {localize(step.description, locale)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="pricing-title"
          className="grid gap-6 border-t border-hairline py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
        >
          <h2
            id="pricing-title"
            className="font-display text-title font-bold lg:col-span-5"
          >
            {texts.pricingTitle}
          </h2>
          <div className="lg:col-span-7">
            <p className="max-w-prose text-subtitle text-body">
              {texts.pricingText}
            </p>
            <ButtonLink
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              leadingIcon={<WhatsAppLogoIcon />}
              className="mt-6 max-sm:w-full"
            >
              {dictionary.hero.writeOnWhatsApp}
              <span className="sr-only"> ({dictionary.opensInNewTab})</span>
            </ButtonLink>
          </div>
        </section>

        <p className="flex flex-wrap items-center gap-x-2 border-t border-hairline pt-8 text-muted">
          <span>{texts.recruiterPrompt}</span>
          <Link
            href={`/${locale}`}
            className="group inline-flex min-h-11 items-center gap-1.5 font-bold"
          >
            {texts.recruiterLink}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </p>
      </Container>
    </>
  );
}
