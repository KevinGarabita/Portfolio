import type { Locale } from "@/i18n/locales";
import type { DateRange, YearMonth } from "@/types/content";

const intlLocaleByLocale: Record<Locale, string> = {
  es: "es-MX",
  en: "en-US",
};

/** "2026-07" → "julio de 2026" (es) or "July 2026" (en). */
export function formatYearMonth(yearMonth: YearMonth, locale: Locale): string {
  const [year = 0, month = 1] = yearMonth.split("-").map(Number);

  return new Intl.DateTimeFormat(intlLocaleByLocale[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

/**
 * UTC offset of an IANA time zone on a given day: "America/Merida" → "UTC−6", with a true
 * minus sign. Static pages compute it at build time, which is fine for zones without
 * daylight saving time, such as Mérida's.
 */
export function formatUtcOffset(timeZone: string, date = new Date()): string {
  const offsetName =
    new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "shortOffset" })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "GMT";

  return offsetName.replace("GMT", "UTC").replace("-", "−");
}

/** "diciembre de 2025 – agosto de 2026", or "agosto de 2023 – actualidad" when still ongoing. */
export function formatDateRange(
  range: DateRange,
  locale: Locale,
  ongoingLabel: string,
): string {
  const start = formatYearMonth(range.start, locale);
  const end = range.end ? formatYearMonth(range.end, locale) : ongoingLabel;
  return `${start} – ${end}`;
}
