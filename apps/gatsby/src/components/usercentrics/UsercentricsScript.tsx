import { Script } from "gatsby"
import React from "react"

export const UsercentricsScript = ({ settingsId }: { settingsId: string }) => {
  return <Script type="text/javascript" id="usercentrics-cmp" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" data-settings-id={settingsId} data-version="latest" async />
}
