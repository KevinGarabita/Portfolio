import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/**
 * "accent" (orange fill, black text) is reserved for a real status such as
 * "In production". "quiet" is for technologies and other neutral labels.
 */
type TagTone = "accent" | "quiet";

const toneClassNames: Record<TagTone, string> = {
  accent: "rounded-tag bg-accent text-on-accent font-bold",
  quiet: "rounded-control border border-hairline bg-page text-muted",
};

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
}

/** A small label. Not interactive. */
export function Tag({ children, tone = "quiet" }: TagProps) {
  return (
    <span
      className={joinClassNames(
        "inline-flex items-center px-2.5 py-0.5 text-small leading-snug",
        toneClassNames[tone],
      )}
    >
      {children}
    </span>
  );
}
