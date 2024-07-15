import React, { useEffect } from "react";

import TagManager from "react-gtm-module";

export function TrackingCodes() {
  const tagManagerArgs = {
    gtmId: "GTM-WGNPB4RJ",
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <></>;
}
