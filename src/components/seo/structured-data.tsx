import { getCurrentLocale } from "@/i18n/request-locale";
import { buildHomeStructuredData } from "@/lib/structured-data";

/**
 * JSON-LD for search engines: the home page as a ProfilePage about Kevin (a Person),
 * built in lib/structured-data.ts. A plain <script> is right here, not next/script,
 * because it is data and not code. Replacing "<" keeps any text from closing the tag.
 */
export async function HomeStructuredData() {
  const structuredData = buildHomeStructuredData(await getCurrentLocale());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
