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
  /** When set, the link opens in a new tab and screen readers hear this text. */
  opensInNewTabText?: string;
  rel?: string;
}

/**
 * Round, logo-only link (44 px target) with the network's logo in its own colours.
 * On hover the ring turns orange and the button lifts slightly; only transform is animated.
 */
export function SocialIconLink({
  network,
  href,
  label,
  opensInNewTabText,
  rel,
}: SocialIconLinkProps) {
  const opensInNewTab = opensInNewTabText !== undefined;

  return (
    <a
      href={href}
      target={opensInNewTab ? "_blank" : undefined}
      rel={opensInNewTab ? "noopener noreferrer" : rel}
      title={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-control-border bg-raised no-underline transition-transform hover:-translate-y-0.5 hover:border-accent"
    >
      <SocialNetworkLogo network={network} />
      <span className="sr-only">
        {label}
        {opensInNewTab ? ` (${opensInNewTabText})` : null}
      </span>
    </a>
  );
}
