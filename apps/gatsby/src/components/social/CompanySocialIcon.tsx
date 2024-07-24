import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCompanySocialProfile } from "../../configuration/getCompanySocialProfile";

export function CompanySocialIcon({ network }: { network: string }) {
  const { icon, title, url } = getCompanySocialProfile(network);
  return (
    <a href={url} title={title}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
