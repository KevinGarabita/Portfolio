import type { LocalizedText } from "@/types/content";

/**
 * Marks content that still needs real information from Kevin.
 * Nothing marked with it may reach production: search the project for this text before publishing.
 */
export const placeholderMark = "[PLACEHOLDER]";

/** Placeholder text that explains, in both languages, what information is missing. */
export function placeholderText(missingInformation: string): LocalizedText {
  const text = `${placeholderMark} ${missingInformation}`;
  return { es: text, en: text };
}
