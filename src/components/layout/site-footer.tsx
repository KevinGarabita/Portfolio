import { profile } from "@/content/profile";

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
              {socialProfile.network === "linkedin" ? "LinkedIn" : "GitHub"}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
