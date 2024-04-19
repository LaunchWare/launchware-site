import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export class SocialProfileNotFoundError extends Error {
  constructor(network: string) {
    super(`Social profile not found for network: ${network}`);
  }
}

export const companySocialProfiles = {
  linkedIn: {
    icon: faLinkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/launchware/",
  },
  youtube: {
    icon: faYoutube,
    title: "YouTube",
    url: "https://www.youtube.com/@LaunchWareSoftwareDevelopment",
  },
  instagram: {
    icon: faInstagram,
    title: "Instagram",
    url: "https://www.instagram.com/launchware/",
  },
} as Record<string, { icon: IconDefinition; title: string; url: string }>;

export const getCompanySocialProfile = (network: string) => {
  const result = companySocialProfiles[network];

  if (!result) {
    throw new SocialProfileNotFoundError(network);
  }

  return result;
};
