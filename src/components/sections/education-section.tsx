import { PageSection } from "@/components/ui/page-section";
import { education } from "@/content/education";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";

/** Studies: degree, school, place, dates, current semester and expected graduation. */
export async function EducationSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.education}
      title={dictionary.education.sectionTitle}
      spacing="compact"
    >
      <div className="flex flex-col gap-10">
        {education.map((studies) => (
          <article key={studies.id}>
            <h3 className="font-display text-subtitle font-bold">
              {localize(studies.degree, locale)}
            </h3>
            <p className="mt-1">
              {studies.institution} · {localize(studies.location, locale)}
            </p>
            <p className="mt-1 text-small text-muted">
              {formatDateRange(
                studies.period,
                locale,
                dictionary.experience.present,
              )}
              {studies.note ? ` · ${localize(studies.note, locale)}` : null}
              {studies.expectedGraduation
                ? ` · ${dictionary.education.expectedGraduation}: ${formatYearMonth(studies.expectedGraduation, locale)}`
                : null}
            </p>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
