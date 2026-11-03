import { Geist, Geist_Mono } from "next/font/google";

/**
 * Geist, Vercel's typeface (OFL): one variable family for text and headings, the
 * technical voice Kevin asked for on 4 November 2026. Geist Mono only sets data:
 * dates, periods and counts, never labels. Both are self-hosted by next/font at build
 * time.
 */
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/** Both font variables, for the class of <html>. */
export const fontVariables = `${geist.variable} ${geistMono.variable}`;
