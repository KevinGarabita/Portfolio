import { getDictionary } from "@/i18n/request-locale";

/** First focusable element on every page: lets keyboard users jump past the header. */
export async function SkipToContentLink() {
  const dictionary = await getDictionary();

  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-2 focus-visible:left-2 focus-visible:bg-page focus-visible:px-3 focus-visible:py-2"
    >
      {dictionary.skipToContent}
    </a>
  );
}
