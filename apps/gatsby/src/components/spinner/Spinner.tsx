import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export const Spinner = ({ className }: { className?: string }) => {
  return <FontAwesomeIcon icon={faSpinner} className={className} spin />
}
