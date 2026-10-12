import { PageSection } from "@/components/ui/page-section";
import { education } from "@/content/education";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";

/**
 * Studies, compact and without a panel: the degree, the school and its place, then the
 * period, the semester and the expected graduation on one wrapping line.
 */
export async function EducationSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.education}
      title={dictionary.education.sectionTitle}
    >
      <div className="flex flex-col gap-10">
        {education.map((studies) => (
          <article key={studies.id}>
            <h3 className="font-display text-subtitle font-bold">
              {localize(studies.degree, locale)}
            </h3>
            <p className="mt-1">
              {studies.institution}, {localize(studies.location, locale)}
            </p>
            <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-small text-muted">
              <li>
                {formatDateRange(
                  studies.period,
                  locale,
                  dictionary.experience.present,
                )}
              </li>
              {studies.note ? <li>{localize(studies.note, locale)}</li> : null}
              {studies.expectedGraduation ? (
                <li>
                  {dictionary.education.expectedGraduation}:{" "}
                  {formatYearMonth(studies.expectedGraduation, locale)}
                </li>
              ) : null}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
