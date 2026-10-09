import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/**
 * Primary: orange fill with black text (white on orange fails contrast).
 * Secondary: a dark button with the orange-to-red gradient ring.
 * WhatsApp: WhatsApp's official green with black text (white on that green fails contrast).
 */
type ButtonVariant = "primary" | "secondary" | "whatsapp";

/** Regular: 48 px tall. Compact: 40 px, for the header. */
type ButtonSize = "regular" | "compact";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-accent text-on-accent hover:bg-accent-hover",
  secondary:
    "gradient-ring border border-transparent bg-raised text-heading hover:bg-raised-strong",
  whatsapp:
    "glow-whatsapp border border-transparent bg-whatsapp text-on-whatsapp hover:bg-whatsapp-hover",
};

const sizeClassNames: Record<ButtonSize, string> = {
  regular: "min-h-12 px-5 py-2.5",
  compact: "min-h-10 px-3 py-2 text-small",
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon before the text, e.g. the WhatsApp bubble. */
  leadingIcon?: ReactNode;
  /** Icon after the text; it nudges forward on hover. */
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

/**
 * A link that looks like a button. Internal paths ("/es#projects") use next/link;
 * anything else (mailto:, wa.me, files) is a plain anchor. On hover it lifts slightly
 * and an orange glow fades in.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "regular",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...anchorAttributes
}: ButtonLinkProps) {
  const combinedClassName = joinClassNames(
    "hover-glow button-motion inline-flex items-center justify-center gap-2 rounded-control text-center font-bold no-underline",
    variantClassNames[variant],
    sizeClassNames[size],
    className,
  );

  const content = (
    <>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon ? (
        <span className="button-icon">{trailingIcon}</span>
      ) : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={combinedClassName} {...anchorAttributes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={combinedClassName} {...anchorAttributes}>
      {content}
    </a>
  );
}
