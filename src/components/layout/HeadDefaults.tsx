import { Script } from "gatsby"
import React, { useEffect } from "react"
import { UsercentricsScript } from "../usercentrics/UsercentricsScript"

export const HeadDefaults = () => {
  return <>
    <meta charSet="utf-8" />
    <UsercentricsScript settingsId="4Rd5it0XiLQ7g9" />
    <Script type="text/javascript" data-usercentrics="Calendly" src="https://assets.calendly.com/assets/external/widget.js" defer />
  </>
}
