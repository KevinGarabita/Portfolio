import { PageSection } from "@/components/ui/page-section";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { localize } from "@/i18n/localize";
import { getCurrentLocale, getDictionary } from "@/i18n/request-locale";
import { homeSectionIds } from "@/lib/home-sections";

/** "About" text followed by the skills, grouped as in the CV and written out as text. */
export async function AboutSection() {
  const locale = await getCurrentLocale();
  const dictionary = await getDictionary();

  return (
    <PageSection
      id={homeSectionIds.about}
      title={dictionary.about.sectionTitle}
    >
      <div className="flex max-w-prose flex-col gap-4">
        {profile.about.map((paragraph) => (
          <p key={paragraph.es}>{localize(paragraph, locale)}</p>
        ))}
      </div>

      <h3 className="mt-14 font-display text-subtitle font-bold">
        {dictionary.skills.sectionTitle}
      </h3>
      <dl className="mt-4 grid gap-x-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id} className="border-t border-hairline py-4">
            <dt className="font-bold text-heading">
              {localize(group.title, locale)}
            </dt>
            <dd className="mt-1">
              {group.items.map((item) => localize(item, locale)).join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </PageSection>
  );
}
