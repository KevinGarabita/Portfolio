import { regionalLocaleTags, type Locale } from "@/i18n/locales";
import type { DateRange, YearMonth } from "@/types/content";

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
