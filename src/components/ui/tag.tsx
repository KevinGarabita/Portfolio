import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/**
 * "accent" (orange fill, black text, 6.89:1) is reserved for the one status that means
 * the work is live: "In production". "quiet" (grey text, 7.84:1, in a hairline outline)
 * is for every other status and for technologies: it never reads as live.
 */
type TagTone = "accent" | "quiet";

const toneClassNames: Record<TagTone, string> = {
  accent: "border-transparent bg-accent font-bold text-on-accent",
  quiet: "border-hairline text-muted",
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
        "inline-flex items-center rounded-tag border px-2.5 py-0.5 text-small leading-snug",
        toneClassNames[tone],
      )}
    >
      {children}
    </span>
  );
}
