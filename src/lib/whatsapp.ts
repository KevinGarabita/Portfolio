import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/locales";

/**
 * wa.me link that opens a chat with Kevin, with a message pre-filled in the given
 * language: the profile's general one, or `message` when a page has a more precise one
 * (a website case study asks for a site like the one shown).
 */
export function buildWhatsAppUrl(locale: Locale, message?: string): string {
  const text = encodeURIComponent(
    message ?? profile.whatsApp.prefilledMessage[locale],
  );
  return `https://wa.me/${profile.whatsApp.number}?text=${text}`;
}
