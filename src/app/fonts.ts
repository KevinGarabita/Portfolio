import { Archivo } from "next/font/google";

/**
 * Archivo, a variable font with a width axis: body text at normal width and headings
 * wider (font-stretch) from the same family. Self-hosted by next/font at build time.
 */
export const archivo = Archivo({
  subsets: ["latin"],
  // The width axis requires leaving `weight` out; next/font throws otherwise.
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
