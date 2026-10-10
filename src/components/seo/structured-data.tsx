import { getCurrentLocale } from "@/i18n/request-locale";
import {
  buildHomeStructuredData,
  buildProjectStructuredData,
  type StructuredDataGraph,
} from "@/lib/structured-data";
import type { Project } from "@/types/content";

/**
 * JSON-LD for search engines, built in lib/structured-data.ts. A plain <script> is right
 * here, not next/script, because it is data and not code. Replacing "<" keeps any text
 * from closing the tag.
 */
function JsonLd({ data }: { data: StructuredDataGraph }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** The home page as a ProfilePage about Kevin (a Person). */
export async function HomeStructuredData() {
  return <JsonLd data={buildHomeStructuredData(await getCurrentLocale())} />;
}

/** A case study: its breadcrumb and the project as a CreativeWork by Kevin. */
export async function ProjectStructuredData({ project }: { project: Project }) {
  return (
    <JsonLd
      data={buildProjectStructuredData(project, await getCurrentLocale())}
    />
  );
}
