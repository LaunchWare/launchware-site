import { Script } from "gatsby"
import React, { useEffect } from "react"

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
    calendlyLoaded: boolean;
  }
}

export const HeadDefaults = () => {
  const bindEvent = () => {
    console.log("binding event")
    window.addEventListener("ucEvent", function (e) {
      console.log(e)
    })
  }
  return <>
    <meta charSet="utf-8" />
    <Script type="text/javascript" src="https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js" async onLoad={bindEvent} />
    <Script type="text/javascript" id="usercentrics-cmp" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" data-settings-id="4Rd5it0XiLQ7g9" async />
    <Script type="text/plain" data-usercentrics="Calendly" src="https://assets.calendly.com/assets/external/widget.js" defer onLoad={() => { console.log("loaded"); window.calendlyLoaded = true }} />
  </>
}
