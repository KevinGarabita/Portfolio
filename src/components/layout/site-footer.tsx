import { profile } from "@/content/profile";
import type { SocialProfile } from "@/types/content";

const socialNetworkNames: Record<SocialProfile["network"], string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
};

export function SiteFooter() {
  return (
    <footer>
      <p>{profile.displayName}</p>
      <ul>
        {profile.socialProfiles.map((socialProfile) => (
          <li key={socialProfile.network}>
            <a
              href={socialProfile.url}
              rel="me noopener noreferrer"
              target="_blank"
            >
              {socialNetworkNames[socialProfile.network]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
