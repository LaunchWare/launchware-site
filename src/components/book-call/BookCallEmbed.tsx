import React, { MouseEventHandler, useCallback, useContext, useEffect, useRef, useState } from "react"
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

export const BookCallEmbed = ({ enabled = true }: { enabled?: boolean }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [calendlyInitialized, setCalendlyInitialized] = useState(false);
  const url = companyContactInformation.launchCallUrl;
  const { isClientSide, isInitialized, hasServiceConsent, acceptService } = useContext(UsercentricsContext)
  const [isAccepted, setIsAccepted] = useState(hasServiceConsent && hasServiceConsent("Calendly"))

  const shouldInitCalendly = () => enabled &&
    isInitialized &&
    !calendlyInitialized &&
    hasServiceConsent &&
    hasServiceConsent("Calendly") &&
    isClientSide &&
    divRef.current

  const provideConsent: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
    e.preventDefault()
    if (acceptService) {
      acceptService("Calendly").then(() => {
        setIsAccepted(true)
        initCalendly()
      })
    }
  }, [acceptService, shouldInitCalendly()])

  const initCalendly = useCallback(() => {
    if (shouldInitCalendly()) {
      const interval = setInterval(() => {
        if (window.Calendly && divRef.current) {
          window.Calendly.initInlineWidget({
            url: `${url}&hide_event_type_details=1`,
            parentElement: divRef.current,
          });
          setCalendlyInitialized(true);
          window.clearInterval(interval)
        }
      }, 500)
    }

  }, [shouldInitCalendly()])

  useEffect(() => {
    initCalendly()
  }, [shouldInitCalendly()])

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
