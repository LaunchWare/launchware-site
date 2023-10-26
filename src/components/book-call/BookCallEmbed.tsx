import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { companyContactInformation } from "../../configuration/companyContactInformation";
import { UsercentricsContext } from "../usercentrics/UsercentricsProvider";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
    calendlyLoaded: boolean;
  }
}

export const BookCallEmbed = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [calendlyInitialized, setCalendlyInitialized] = useState(false);
  const url = companyContactInformation.launchCallUrl;
  const { isClientSide, isInitialized, hasServiceConsent, acceptService } = useContext(UsercentricsContext)

  const provideConsent = useCallback((e: MouseEvent) => {
    e.preventDefault()
    if (acceptService) {
      acceptService("Calendly").then(() => {
        if (typeof window !== "undefined") {
          const interval = setInterval(() => {
            if (window.Calendly) {
              initCalendly()
              window.clearInterval(interval)
            }
          }, 500)
        }
      })
    }
  }, [acceptService, isInitialized, isClientSide])

  const initCalendly = useCallback(() => {
    if (!calendlyInitialized && divRef.current) {
      window.Calendly.initInlineWidget({
        url: `${url}&hide_event_type_details=1`,
        parentElement: divRef.current,
      });
      setCalendlyInitialized(true);
    }

  }, [divRef.current, calendlyInitialized])

  useEffect(() => {
    if (hasServiceConsent && hasServiceConsent("Calendly") && typeof window !== "undefined" && window.Calendly && divRef.current) {
      initCalendly()
    }
  }, [divRef.current, hasServiceConsent, isInitialized, isClientSide])

  const div = <div ref={divRef} className="calendly-inline-widget" data-auto-load="false" />

  const consentNotice = (!calendlyInitialized && (!hasServiceConsent || !hasServiceConsent("Calendly"))) && <>
    <p>We use Calendly to embed content that may collect data about your activity.</p>
    <p>Please provide <a href="#" className="text-launch-orange" onClick={provideConsent}>consent</a> to connect to our partner, Calendly</p>
  </>
  return <>
    {consentNotice}
    {div}
  </>
}
