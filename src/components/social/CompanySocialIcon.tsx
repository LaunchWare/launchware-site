import React from "react"

import { getCompanySocialProfile } from "../../configuration/getCompanySocialProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CompanySocialIcon = ({ network }: { network: string }) => {
  const { icon, url } = getCompanySocialProfile(network);
  return <a href={url}><FontAwesomeIcon icon={icon} /></a>
}
