import { useId, type ReactNode } from "react";

import type { Locale } from "@/i18n/locales";
import { joinClassNames } from "@/lib/class-names";

/*
 * Flag colours. Like the social networks' logos, flags keep their own colours instead of
 * the site palette, so they live here and not in globals.css.
 */
const white = "#ffffff";
const mexicoGreen = "#006847";
const mexicoRed = "#ce1126";
const mexicoEagle = "#8c5a2b";
const usaRed = "#b22234";
const usaBlue = "#3c3b6e";
const brazilGreen = "#009b3a";
const brazilYellow = "#fedf00";
const brazilBlue = "#002776";
const franceBlue = "#0055a4";
const franceRed = "#ef4135";

/** Stars of the US canton, simplified to two rows of dots. */
const usaStarCenters = [
  [2, 2.2],
  [4.5, 2.2],
  [7, 2.2],
  [3.25, 4],
  [5.75, 4],
  [2, 5.8],
  [4.5, 5.8],
  [7, 5.8],
] as const;

/**
 * The flag of each language's regional variant (see regionalLocaleTags in
 * src/i18n/locales.ts), simplified to read at 21 × 14 px. The stripes sit on whole
 * pixels of the 21 × 14 grid, so they stay sharp at 1x and on retina displays.
 */
const flagArtByLocale: Record<Locale, ReactNode> = {
  // Mexico: green, white and red, with the eagle on its wreath reduced to two marks.
  es: (
    <>
      <rect width="7" height="14" fill={mexicoGreen} />
      <rect x="7" width="7" height="14" fill={white} />
      <rect x="14" width="7" height="14" fill={mexicoRed} />
      <ellipse cx="10.5" cy="6.4" rx="1.6" ry="1.9" fill={mexicoEagle} />
      <path
        d="M8.4 7.6a2.1 2.1 0 0 0 4.2 0"
        fill="none"
        stroke={mexicoGreen}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </>
  ),
  // United States: seven stripes of 2 px and a canton with two rows of stars.
  en: (
    <>
      <rect width="21" height="14" fill={white} />
      {[0, 4, 8, 12].map((y) => (
        <rect key={y} y={y} width="21" height="2" fill={usaRed} />
      ))}
      <rect width="9" height="8" fill={usaBlue} />
      {usaStarCenters.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.55" fill={white} />
      ))}
    </>
  ),
  // Brazil: green field, yellow rhombus, blue globe with its white band.
  pt: (
    <>
      <rect width="21" height="14" fill={brazilGreen} />
      <path d="M2 7 10.5 1.6 19 7l-8.5 5.4Z" fill={brazilYellow} />
      <circle cx="10.5" cy="7" r="3.3" fill={brazilBlue} />
      <path
        d="M7.4 6.3Q10.5 5.2 13.6 7.7"
        fill="none"
        stroke={white}
        strokeWidth="0.7"
      />
    </>
  ),
  // France: blue, white and red.
  fr: (
    <>
      <rect width="7" height="14" fill={franceBlue} />
      <rect x="7" width="7" height="14" fill={white} />
      <rect x="14" width="7" height="14" fill={franceRed} />
    </>
  ),
};

interface LocaleFlagProps {
  locale: Locale;
  className?: string;
}

/**
 * A small flag with rounded corners for the language switcher. Inline SVG and not emoji,
 * because Windows draws flag emoji as two letters. Decorative: the language name is
 * always next to it as text.
 */
export function LocaleFlag({ locale, className }: LocaleFlagProps) {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 21 14"
      width="21"
      height="14"
      aria-hidden="true"
      focusable="false"
      className={joinClassNames("shrink-0", className)}
    >
      <clipPath id={clipId}>
        <rect width="21" height="14" rx="2.5" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>{flagArtByLocale[locale]}</g>
      {/* A faint rim, so dark edges (green, navy) still show against the black page. */}
      <rect
        x="0.5"
        y="0.5"
        width="20"
        height="13"
        rx="2"
        fill="none"
        stroke={white}
        strokeOpacity="0.2"
      />
    </svg>
  );
}
