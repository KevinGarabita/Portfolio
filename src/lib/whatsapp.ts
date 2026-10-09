import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/locales";

/** wa.me link that opens a chat with Kevin, with a message pre-filled in the given language. */
export function buildWhatsAppUrl(locale: Locale): string {
  const message = encodeURIComponent(profile.whatsApp.prefilledMessage[locale]);
  return `https://wa.me/${profile.whatsApp.number}?text=${message}`;
}
