import { useEffect } from "react";

import TagManager from "react-gtm-module";

// TODO: Investigate why this isn't a hook
export function TrackingCodes() {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-WGNPB4RJ",
    });
  }, []);

  return null;
}
