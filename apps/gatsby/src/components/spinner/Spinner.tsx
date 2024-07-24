import React from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Spinner({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faSpinner} className={className} spin />;
}
