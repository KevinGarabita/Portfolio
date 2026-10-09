import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/** Primary: orange fill, at most one per view. Secondary: outlined, for everything else. */
type ButtonVariant = "primary" | "secondary";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "border border-control-border text-heading hover:border-heading",
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

/**
 * A link that looks like a button. Internal paths ("/es#projects") use next/link;
 * anything else (mailto:, files) is a plain anchor.
 */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  ...anchorAttributes
}: ButtonLinkProps) {
  const className = joinClassNames(
    "inline-flex min-h-12 items-center justify-center rounded-control px-5 py-2.5 text-center font-bold no-underline transition-colors",
    variantClassNames[variant],
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...anchorAttributes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...anchorAttributes}>
      {children}
    </a>
  );
}
