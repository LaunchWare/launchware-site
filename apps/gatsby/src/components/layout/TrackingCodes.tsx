import { useEffect } from "react"

const GTM_ID = "GTM-WGNPB4RJ"

const loadGTM = () => {
  if (typeof window === "undefined") return
  // @ts-expect-error GTM dataLayer bootstrap
  window.dataLayer = window.dataLayer || []
  // @ts-expect-error GTM dataLayer bootstrap
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

export const TrackingCodes = () => {
  useEffect(() => {
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(loadGTM, { timeout: 4000 })
    } else {
      setTimeout(loadGTM, 3500)
    }
  }, [])

  return null
}
