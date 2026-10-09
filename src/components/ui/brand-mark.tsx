import { joinClassNames } from "@/lib/class-names";

interface BrandMarkProps {
  className?: string;
}

/**
 * The "KG" monogram: black letters on the orange-to-red gradient, the same mark as the
 * favicon. Decorative; the name always sits next to it as text.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={joinClassNames(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-(image:--gradient-brand-diagonal) font-display text-small font-extrabold tracking-tight text-on-accent",
        className,
      )}
    >
      KG
    </span>
  );
}
