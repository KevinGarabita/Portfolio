import { getDictionary } from "@/i18n/request-locale";

/** First focusable element on every page: lets keyboard users jump past the header. */
export async function SkipToContentLink() {
  const dictionary = await getDictionary();

  return (
    <a
      href="#main-content"
      className="sr-only font-bold text-on-accent no-underline focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-(--layer-skip-link) focus-visible:rounded-control focus-visible:bg-accent focus-visible:px-4 focus-visible:py-3"
    >
      {dictionary.skipToContent}
    </a>
  );
}
