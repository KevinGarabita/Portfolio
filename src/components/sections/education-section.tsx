import { PageSection } from "@/components/ui/page-section";
import { education } from "@/content/education";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { formatDateRange, formatYearMonth } from "@/lib/format-date";
import { homeSectionIds } from "@/lib/home-sections";

/** Studies as panels: degree, school and place, then dates, semester and expected graduation. */
export async function EducationSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.education}
      title={dictionary.education.sectionTitle}
      spacing="compact"
    >
      <div className="flex flex-col gap-6">
        {education.map((studies) => (
          <article
            key={studies.id}
            className="grid gap-4 rounded-section border border-hairline bg-raised p-6 sm:p-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-8">
              <h3 className="font-display text-subtitle font-bold">
                {localize(studies.degree, locale)}
              </h3>
              <p className="mt-2">
                {studies.institution} · {localize(studies.location, locale)}
              </p>
            </div>
            <ul className="flex flex-col gap-1 text-small text-muted lg:col-span-4 lg:items-end lg:text-right">
              <li className="font-mono font-bold text-accent">
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
