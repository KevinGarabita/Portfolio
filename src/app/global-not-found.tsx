import Link from "next/link";
import type { Metadata, Viewport } from "next";

import { BrandMark } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { dictionariesByLocale } from "@/i18n/dictionaries-by-locale";
import { defaultLocale, supportedLocales, type Locale } from "@/i18n/locales";
import { brandColors } from "@/lib/brand-colors";

import { atkinsonHyperlegibleNext } from "./fonts";
import "./globals.css";

/** English (the default language) leads; the other languages follow in site order. */
const otherLocales = supportedLocales.filter(
  (locale) => locale !== defaultLocale,
);

export const metadata: Metadata = {
  title: [defaultLocale, ...otherLocales]
    .map((locale) => dictionariesByLocale[locale].notFound.title)
    .join(" · "),
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: brandColors.blackDeep,
};

interface NotFoundMessageProps {
  locale: Locale;
  /** The default language's message: h1, larger title and the primary button. */
  isLead: boolean;
}

/** The message in one language: title, explanation and a button to that language's home. */
function NotFoundMessage({ locale, isLead }: NotFoundMessageProps) {
  const dictionary = dictionariesByLocale[locale];
  const Heading = isLead ? "h1" : "h2";

  return (
    <section
      lang={locale === defaultLocale ? undefined : locale}
      aria-labelledby={`not-found-title-${locale}`}
      className="flex flex-col items-start"
    >
      <Heading
        id={`not-found-title-${locale}`}
        className={
          isLead
            ? "font-display text-title font-extrabold"
            : "font-display text-subtitle font-bold"
        }
      >
        {dictionary.notFound.title}
      </Heading>
      <p
        className={
          isLead
            ? "mt-4 max-w-prose text-muted"
            : "mt-2 max-w-prose text-small text-muted"
        }
      >
        {dictionary.notFound.description}
      </p>
      <ButtonLink
        href={`/${locale}`}
        variant={isLead ? "primary" : "secondary"}
        size={isLead ? "regular" : "compact"}
        leadingIcon={
          <ArrowLeftIcon className={isLead ? undefined : "size-4"} />
        }
        className={isLead ? "mt-8" : "mt-5"}
      >
        {dictionary.notFound.backHome}
      </ButtonLink>
    </section>
  );
}

/**
 * 404 page for any URL that matches no route (unknown project, unknown path or language).
 * It renders outside the [lang] layout, so it cannot know the visitor's language: under
 * a large gradient "404" it shows the English message first (the default language), then
 * the Spanish, Portuguese and French ones in a row of three (stacked on phones).
 */
export default function GlobalNotFound() {
  return (
    <html
      lang={defaultLocale}
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
            {/* "/" goes to English, or to the language picked in the switcher (proxy.ts). */}
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
              <div className="entrance mt-10 [--entrance-order:1] lg:mt-14">
                <NotFoundMessage locale={defaultLocale} isLead />
              </div>
              <div className="entrance mt-12 grid gap-10 border-t border-hairline pt-10 [--entrance-order:2] md:grid-cols-3 md:gap-x-8 lg:mt-14">
                {otherLocales.map((locale) => (
                  <NotFoundMessage
                    key={locale}
                    locale={locale}
                    isLead={false}
                  />
                ))}
              </div>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
