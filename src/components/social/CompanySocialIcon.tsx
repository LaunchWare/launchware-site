import React from "react"

import { getCompanySocialProfile } from "../../configuration/getCompanySocialProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CompanySocialIcon = ({ network }: { network: string }) => {
  const { icon, title, url } = getCompanySocialProfile(network);
  return <a href={url} title={title}><FontAwesomeIcon icon={icon} /></a>
}
