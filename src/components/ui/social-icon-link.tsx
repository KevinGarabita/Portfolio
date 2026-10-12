import { GitHubLogoIcon, LinkedInLogoIcon, WhatsAppLogoIcon } from "./icons";

export type SocialNetwork = "github" | "linkedin" | "whatsapp";

const logosByNetwork: Record<
  SocialNetwork,
  (props: {
    className?: string;
    colors?: "inherit" | "brand";
  }) => React.JSX.Element
> = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  whatsapp: WhatsAppLogoIcon,
};

interface SocialNetworkLogoProps {
  network: SocialNetwork;
  className?: string;
  /** "brand" (default) shows the network's own colours. */
  colors?: "inherit" | "brand";
}

/** The official logo of a network, in its own colours by default. Decorative. */
export function SocialNetworkLogo({
  network,
  className,
  colors = "brand",
}: SocialNetworkLogoProps) {
  const Logo = logosByNetwork[network];
  return <Logo className={className} colors={colors} />;
}

interface SocialIconLinkProps {
  network: SocialNetwork;
  href: string;
  /** Network name; it is the accessible name of the link and its tooltip. */
  label: string;
  /** "opens in a new tab", in the page's language: every social link opens one. */
  opensInNewTabText: string;
  /** Extra link relations, such as "me" on Kevin's own profiles. */
  rel?: string;
}

/**
 * Round, logo-only link (44 px target) with the network's logo in its own colours. It
 * always opens in a new tab, and screen readers hear so. On hover the ring turns orange.
 */
export function SocialIconLink({
  network,
  href,
  label,
  opensInNewTabText,
  rel,
}: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel={rel ? `${rel} noopener noreferrer` : "noopener noreferrer"}
      title={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-control-border no-underline transition-colors hover:border-accent"
    >
      <SocialNetworkLogo network={network} />
      <span className="sr-only">
        {label} ({opensInNewTabText})
      </span>
    </a>
  );
}
