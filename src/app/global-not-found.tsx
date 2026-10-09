import type { Metadata } from "next";
import Link from "next/link";

import { profile } from "@/content/profile";
import { englishDictionary } from "@/i18n/dictionaries/english";
import { spanishDictionary } from "@/i18n/dictionaries/spanish";

import "./globals.css";

export const metadata: Metadata = {
  title: `${spanishDictionary.notFound.title} · ${englishDictionary.notFound.title}`,
};

/**
 * 404 page for any URL that matches no route (unknown project, unknown path or language).
 * It renders outside the [lang] layout, so it cannot know the visitor's language and
 * shows both versions.
 */
export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body>
        <main id="main-content">
          <p>{profile.displayName}</p>
          <section aria-labelledby="not-found-title-es">
            <h1 id="not-found-title-es">{spanishDictionary.notFound.title}</h1>
            <p>{spanishDictionary.notFound.description}</p>
            <Link href="/es">{spanishDictionary.notFound.backHome}</Link>
          </section>
          <section lang="en" aria-labelledby="not-found-title-en">
            <h2 id="not-found-title-en">{englishDictionary.notFound.title}</h2>
            <p>{englishDictionary.notFound.description}</p>
            <Link href="/en">{englishDictionary.notFound.backHome}</Link>
          </section>
        </main>
      </body>
    </html>
  );
}
