import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/** "accent" (orange fill) is reserved for a real status such as "In production". */
type TagTone = "accent" | "quiet";

const toneClassNames: Record<TagTone, string> = {
  accent: "bg-accent text-on-accent",
  quiet: "border border-control-border text-body",
};

interface TagProps {
  children: ReactNode;
  tone?: TagTone;
}

/** A small label for a status. Not interactive. */
export function Tag({ children, tone = "quiet" }: TagProps) {
  return (
    <span
      className={joinClassNames(
        "inline-flex items-center rounded-tag px-2.5 py-0.5 text-small leading-snug font-bold",
        toneClassNames[tone],
      )}
    >
      {children}
    </span>
  );
}
