import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/dictionaries/spanish";
import { englishDictionary } from "@/i18n/dictionaries/english";
import { spanishDictionary } from "@/i18n/dictionaries/spanish";
import type { Locale } from "@/i18n/locales";

import { atkinsonHyperlegibleNext } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${spanishDictionary.notFound.title} · ${englishDictionary.notFound.title}`,
};

interface NotFoundMessageProps {
  locale: Locale;
  dictionary: Dictionary;
  headingLevel: "h1" | "h2";
}

/** The message in one language: title, explanation and a link to that language's home. */
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
      <p className="mt-4 max-w-prose">{dictionary.notFound.description}</p>
      <p className="mt-6">
        <Link href={`/${locale}`} className="inline-block py-2 font-bold">
          {dictionary.notFound.backHome}
        </Link>
      </p>
    </>
  );
}

/**
 * 404 page for any URL that matches no route (unknown project, unknown path or language).
 * It renders outside the [lang] layout, so it cannot know the visitor's language and
 * shows both versions side by side (stacked on phones).
 */
export default function GlobalNotFound() {
  return (
    <html lang="es" className={atkinsonHyperlegibleNext.variable}>
      <body>
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Container className="pb-20 lg:pb-28">
            <p className="border-b border-hairline py-4 font-display text-subtitle font-extrabold text-heading">
              {profile.displayName}
            </p>
            <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-x-10">
              <section aria-labelledby="not-found-title-es">
                <NotFoundMessage
                  locale="es"
                  dictionary={spanishDictionary}
                  headingLevel="h1"
                />
              </section>
              <section
                lang="en"
                aria-labelledby="not-found-title-en"
                className="border-t border-hairline pt-12 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
              >
                <NotFoundMessage
                  locale="en"
                  dictionary={englishDictionary}
                  headingLevel="h2"
                />
              </section>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
