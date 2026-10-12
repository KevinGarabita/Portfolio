import { regionalLocaleTags, type Locale } from "@/i18n/locales";
import type { CalendarDate, DateRange, YearMonth } from "@/types/content";

/** Mérida keeps UTC−6 all year (no daylight saving time). */
const meridaUtcOffset = "-06:00";

/**
 * "2026-10-09" → "2026-10-09T00:00:00-06:00", and "2026-07" → "2026-07-01T00:00:00-06:00":
 * a content date as the ISO 8601 date-time with time zone that Google asks for in
 * structured data (it reports a bare date as an invalid date-time). Midnight in Mérida,
 * where the content is written; a month becomes its first day.
 */
export function toStructuredDataDateTime(
  date: CalendarDate | YearMonth,
): string {
  const day = date.split("-").length === 2 ? `${date}-01` : date;
  return `${day}T00:00:00${meridaUtcOffset}`;
}

/** "2026-07" → "julio de 2026" (es), "July 2026" (en), "julho de 2026" (pt), "juillet 2026" (fr). */
export function formatYearMonth(yearMonth: YearMonth, locale: Locale): string {
  const [year = 0, month = 1] = yearMonth.split("-").map(Number);

  return new Intl.DateTimeFormat(regionalLocaleTags[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
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
