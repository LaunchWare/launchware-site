import React from "react";

import { Script } from "gatsby";

import { UsercentricsScript } from "../usercentrics/UsercentricsScript";

export function HeadDefaults() {
  return (
    <>
      <meta charSet="utf-8" />
      <UsercentricsScript settingsId="4Rd5it0XiLQ7g9" />
      <Script
        type="text/javascript"
        data-usercentrics="Calendly"
        src="https://assets.calendly.com/assets/external/widget.js"
        defer
      />
    </>
  );
}
