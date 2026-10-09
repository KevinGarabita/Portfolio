import Link from "next/link";
import type { Metadata, Viewport } from "next";

import { BrandMark } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import { englishDictionary } from "@/i18n/dictionaries/english";
import { spanishDictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";
import { brandColors } from "@/lib/brand-colors";

import { atkinsonHyperlegibleNext } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${spanishDictionary.notFound.title} · ${englishDictionary.notFound.title}`,
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: brandColors.blackDeep,
};

interface NotFoundMessageProps {
  locale: Locale;
  dictionary: Dictionary;
  headingLevel: "h1" | "h2";
}

/** The message in one language: title, explanation and a button to that language's home. */
function NotFoundMessage({
  locale,
  dictionary,
  headingLevel: Heading,
}: NotFoundMessageProps) {
  const titleId = `not-found-title-${locale}`;

  return (
    <>
      <Heading id={titleId} className="font-display text-title font-extrabold">
        {dictionary.notFound.title}
      </Heading>
      <p className="mt-4 max-w-prose text-muted">
        {dictionary.notFound.description}
      </p>
      <div className="mt-8">
        <ButtonLink
          href={`/${locale}`}
          variant={locale === "es" ? "primary" : "secondary"}
          leadingIcon={<ArrowLeftIcon />}
        >
          {dictionary.notFound.backHome}
        </ButtonLink>
      </div>
    </>
  );
}

/**
 * 404 page for any URL that matches no route (unknown project, unknown path or language).
 * It renders outside the [lang] layout, so it cannot know the visitor's language and
 * shows both versions side by side (stacked on phones), under a large gradient "404".
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="es"
      className={atkinsonHyperlegibleNext.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <div aria-hidden="true" className="site-backdrop" />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex min-h-svh flex-col focus:outline-none"
        >
          <Container className="flex flex-1 flex-col pb-20 lg:pb-28">
            {/* "/" goes to the visitor's language (negotiated by the proxy). */}
            <Link
              href="/"
              className="flex items-center gap-3 self-start border-b border-hairline py-4 font-display text-subtitle font-extrabold text-heading no-underline"
            >
              <BrandMark />
              {profile.displayName}
            </Link>
            {/* Centred vertically on tall screens. */}
            <div className="my-auto">
              <p
                aria-hidden="true"
                className="entrance mt-12 font-display text-giant font-extrabold lg:mt-16"
              >
                <span className="text-gradient-brand">404</span>
              </p>
              <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-x-10">
                <section
                  aria-labelledby="not-found-title-es"
                  className="entrance [--entrance-order:1]"
                >
                  <NotFoundMessage
                    locale="es"
                    dictionary={spanishDictionary}
                    headingLevel="h1"
                  />
                </section>
                <section
                  lang="en"
                  aria-labelledby="not-found-title-en"
                  className="entrance border-t border-hairline pt-12 [--entrance-order:2] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
                >
                  <NotFoundMessage
                    locale="en"
                    dictionary={englishDictionary}
                    headingLevel="h2"
                  />
                </section>
              </div>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
