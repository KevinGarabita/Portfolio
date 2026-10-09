import type { SocialProfile } from "@/types/content";

/** Names shown for each network. A Record, so adding a network to the type forces a name here. */
export const socialNetworkNames: Record<SocialProfile["network"], string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
};
