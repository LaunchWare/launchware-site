import {
  faXTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export class SocialProfileNotFoundError extends Error {
  constructor(network: string) {
    super(`Social profile not found for network: ${network}`);
  }
}

export const companySocialProfiles = {
  linkedIn: {
    icon: faLinkedin,
    url: "https://www.linkedin.com/company/launchware/",
  },
  youtube: {
    icon: faYoutube,
    url: "https://www.youtube.com/@LaunchWareSoftwareDevelopment",
  },
  instagram: {
    icon: faInstagram,
    url: "https://www.instagram.com/launchware/",
  },
} as Record<string, { icon: any; url: string }>;

export const getCompanySocialProfile = (network: string) => {
  const result = companySocialProfiles[network];

  if (!result) {
    throw new SocialProfileNotFoundError(network);
  }

  return result;
};
