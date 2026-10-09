import { Atkinson_Hyperlegible_Next } from "next/font/google";

/**
 * Atkinson Hyperlegible Next, from the Braille Institute: one variable family (weights
 * 200–800) for text and headings, chosen for legibility. Self-hosted by next/font at build time.
 */
export const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  // next 16.4 has no fallback metrics for this font; without these two options Turbopack warns.
  adjustFontFallback: false,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  display: "swap",
});
