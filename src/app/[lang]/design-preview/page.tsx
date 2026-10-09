import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/locales";
import { localize } from "@/i18n/localize";
import { getCurrentLocale } from "@/i18n/request-locale";

/**
 * PHASE 2 REVIEW PAGE. It is not part of the site: it shows the design tokens and the two
 * font options so Kevin can choose. Never indexed, blocked in Vercel production, and to be
 * deleted before the site goes live.
 */
export const metadata: Metadata = {
  title: "Design preview",
  robots: { index: false, follow: false },
};

/** Second font option. Loaded only on this page, so the real site never downloads it. */
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  // next 16.4 has no fallback metrics for this font; without these two options Turbopack warns.
  adjustFontFallback: false,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  display: "swap",
});

const roleColors = [
  { token: "page", job: "Fondo de la página" },
  { token: "raised", job: "Tarjetas y paneles sobre la página" },
  { token: "inverse", job: "Bloques oscuros (clase surface-inverse)" },
  { token: "body", job: "Texto corrido" },
  { token: "heading", job: "Títulos" },
  { token: "muted", job: "Texto secundario: fechas, notas" },
  { token: "hairline", job: "Divisores y bordes decorativos" },
  { token: "control-border", job: "Bordes de botones y campos (≥ 3:1)" },
  { token: "accent", job: "Naranja: solo como relleno (botones, etiquetas)" },
  { token: "on-accent", job: "Texto sobre el naranja" },
  { token: "link", job: "Enlaces (siempre subrayados)" },
  { token: "focus", job: "Anillo de foco del teclado" },
] as const;

interface FontSampleProps {
  optionLabel: string;
  fontName: string;
  headingClassName: string;
  locale: Locale;
}

/** The same real text from the CV, rendered with one font option. */
function FontSample({
  optionLabel,
  fontName,
  headingClassName,
  locale,
}: FontSampleProps) {
  const featuredProject = projects[0];

  return (
    <div className="flex flex-col gap-4 border border-hairline bg-raised p-6">
      <p className="text-small text-muted">
        {optionLabel}: {fontName}
      </p>
      <p className={`font-display text-display ${headingClassName}`}>
        {profile.displayName}
      </p>
      <p className={`font-display text-title ${headingClassName}`}>
        {localize(profile.role, locale)}
      </p>
      {featuredProject ? (
        <p className={`font-display text-subtitle ${headingClassName}`}>
          {localize(featuredProject.name, locale)}
        </p>
      ) : null}
      {profile.about.map((paragraph) => (
        <p key={paragraph.es} className="max-w-prose">
          {localize(paragraph, locale)}
        </p>
      ))}
      <p className="text-small text-muted">
        {localize(profile.availability, locale)}
      </p>
    </div>
  );
}

export default async function DesignPreviewPage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  const locale = await getCurrentLocale();
  // Re-points the font variable so the second column uses Atkinson without touching the tokens.
  const atkinsonColumnStyle = {
    "--font-archivo": "var(--font-atkinson)",
  } as CSSProperties;

  return (
    <div className={`${atkinson.variable} flex flex-col gap-12 p-6`}>
      <header className="flex flex-col gap-2">
        <h1 className="text-title font-bold">Vista de revisión: fase 2</h1>
        <p className="max-w-prose text-muted">
          Esta página no forma parte del sitio. Muestra los tokens de diseño y
          las dos tipografías para que elijas. No se indexa, está bloqueada en
          producción y se elimina antes de publicar. Cambia el tema de tu
          sistema (claro u oscuro) para ver las dos versiones de la paleta.
        </p>
      </header>

      <section aria-labelledby="fonts-title" className="flex flex-col gap-4">
        <h2 id="fonts-title" className="text-subtitle font-bold">
          Tipografía: elige una opción
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FontSample
            optionLabel="Opción A"
            fontName="Archivo (títulos más anchos con su eje de ancho)"
            headingClassName="font-bold font-stretch-semi-expanded"
            locale={locale}
          />
          <div className="font-sans" style={atkinsonColumnStyle}>
            <FontSample
              optionLabel="Opción B"
              fontName="Atkinson Hyperlegible Next (pensada para máxima legibilidad)"
              headingClassName="font-bold"
              locale={locale}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="colors-title" className="flex flex-col gap-4">
        <h2 id="colors-title" className="text-subtitle font-bold">
          Colores por función
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roleColors.map((role) => (
            <li
              key={role.token}
              className="flex items-center gap-3 border border-hairline bg-raised p-3"
            >
              <span
                aria-hidden="true"
                className="size-10 shrink-0 border border-control-border"
                style={{ backgroundColor: `var(--color-${role.token})` }}
              />
              <span className="flex flex-col">
                <code className="text-small">{role.token}</code>
                <span className="text-small text-muted">{role.job}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="samples-title" className="flex flex-col gap-4">
        <h2 id="samples-title" className="text-subtitle font-bold">
          Piezas de muestra (sin diseño final)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.resumeFiles[locale]}
            className="rounded-control bg-accent px-4 py-2 font-semibold text-on-accent no-underline hover:bg-accent-hover"
          >
            Botón principal
          </a>
          <button
            type="button"
            className="rounded-control border border-control-border px-4 py-2"
          >
            Botón secundario
          </button>
          <a href={`/${locale}`}>Enlace de texto</a>
          <span className="rounded-tag bg-accent px-3 py-1 text-small text-on-accent">
            Etiqueta
          </span>
        </div>
        <div className="flex flex-col gap-2 surface-inverse p-6">
          <p className="text-subtitle font-bold text-heading">
            Bloque oscuro (surface-inverse)
          </p>
          <p>{localize(profile.workMode, locale)}</p>
          <a href={`/${locale}#contact`}>Enlace dentro del bloque oscuro</a>
        </div>
        <p className="text-small text-muted">
          Usa Tab para ver el anillo de foco en cada pieza.
        </p>
      </section>
    </div>
  );
}
