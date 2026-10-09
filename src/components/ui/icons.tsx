import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/class-names";

interface IconProps {
  /** Size and colour classes; the icon follows the text colour (currentColor). */
  className?: string;
}

/**
 * Line icons drawn inline (no icon library). Always decorative: the text next to them
 * carries the meaning, so they are hidden from screen readers.
 */
function Icon({
  className,
  children,
}: IconProps & {
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={joinClassNames("size-5 shrink-0", className)}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </Icon>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Icon>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
  );
}

/** Speech bubble used for WhatsApp links (the label always says "WhatsApp"). */
export function ChatBubbleIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.37 7.57L3.5 20.5l1.43-4.46A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth={2.5} />
    </Icon>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </Icon>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Icon>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M9 6v12M15 6v12" />
    </Icon>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </Icon>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="m15 6-6 6 6 6" />
    </Icon>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="m9 6 6 6-6 6" />
    </Icon>
  );
}

export function ExpandIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </Icon>
  );
}

/** A browser window: stands in for a web application without screenshots. */
export function AppWindowIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01M7 13h6M7 16h10" />
    </Icon>
  );
}

/** Two nodes joined by a line: stands in for an automation without screenshots. */
export function WorkflowIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4.5a2 2 0 0 1 2 2V14" />
    </Icon>
  );
}
