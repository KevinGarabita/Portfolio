import type { LocalizedText } from "@/types/content";

/**
 * Marks content that still needs real information from Kevin.
 * Nothing marked with it may reach production: a Vercel production build fails while any remains.
 */
export const placeholderMark = "[PLACEHOLDER]";

/** Placeholder text that explains, in both languages, what information is missing. */
export function placeholderText(missingInformation: string): LocalizedText {
  // Vercel production builds fail while any placeholder remains, so none can go live by accident.
  if (process.env.VERCEL_ENV === "production") {
    throw new Error(
      `${placeholderMark} reached a production build: ${missingInformation}`,
    );
  }

  const text = `${placeholderMark} ${missingInformation}`;
  return { es: text, en: text };
}
