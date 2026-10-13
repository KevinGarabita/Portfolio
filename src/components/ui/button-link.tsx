import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

/**
 * Primary: orange fill with black text (white on orange fails contrast).
 * Secondary: an outline in the control grey (4.17:1 on the page) that turns orange on
 * hover, with white text.
 * WhatsApp: WhatsApp's official green with black text (white on that green fails contrast).
 */
type ButtonVariant = "primary" | "secondary" | "whatsapp";

/** Regular: 48 px tall. Compact: 40 px, for the header. */
type ButtonSize = "regular" | "compact";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-accent text-on-accent hover:bg-accent-hover",
  secondary:
    "border-control-border text-heading hover:border-accent hover:bg-raised",
  whatsapp:
    "border-transparent bg-whatsapp text-on-whatsapp hover:bg-whatsapp-hover",
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
  /** Icon after the text, e.g. the "opens in a new tab" arrow of the CV. */
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

/**
 * Whether next/link should render the link: a page of this site ("/es#projects"), not
 * another origin ("//..."), a download or a file ("/cv/kevin-garabita-cv-es.pdf").
 * next/link prefetches the links it renders when they enter the viewport, so a file
 * behind it (a 100 KB CV PDF, say) would be downloaded on every visit.
 */
function isInternalPage(href: string, isDownload: boolean): boolean {
  if (isDownload || !href.startsWith("/") || href.startsWith("//"))
    return false;
  const [path = ""] = href.split(/[?#]/);
  return !/\.\w+$/.test(path);
}

/**
 * A link that looks like a button. Pages of the site ("/es#projects") use next/link;
 * anything else (mailto:, wa.me, files such as the CV) is a plain anchor. Hover only
 * changes its colours: nothing lifts or glows.
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
    "inline-flex items-center justify-center gap-2 rounded-control border text-center font-bold no-underline transition-colors",
    variantClassNames[variant],
    sizeClassNames[size],
    className,
  );

  const content = (
    <>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </>
  );

  if (isInternalPage(href, anchorAttributes.download !== undefined)) {
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
