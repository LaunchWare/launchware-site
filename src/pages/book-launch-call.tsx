import React, { useEffect, useRef, useState } from "react"
import { PageProps } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { companyContactInformation } from "../configuration/companyContactInformation";
import { HeadDefaults } from "../components/layout/HeadDefaults";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
    calendlyLoaded: boolean;
  }
}

export const Head = () => {
  return <>
    <HeadDefaults />
  </>
}

const BookLaunchCall = (pageProps: PageProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [calendlyInitialized, setCalendlyInitialized] = useState(false);
  const url = companyContactInformation.launchCallUrl;

  useEffect(() => {
    console.log("window.calendlyLoaded", window.calendlyLoaded)
    if (!!divRef?.current && window.calendlyLoaded && url && window.Calendly?.initInlineWidget) {
      window.Calendly.initInlineWidget({
        url: `${url}&hide_event_type_details=1`,
        parentElement: divRef.current,
      });
      setCalendlyInitialized(true);
    }
  }, [divRef.current, calendlyInitialized, url, window.calendlyLoaded, window.Calendly?.initInlineWidget])


  return <Layout location={pageProps.location} title="Book My Launch Call">
    <div className="parent-section">
      <div>
        <h2 className="book-call__heading">Book Your Launch Call</h2>
        <p className="book-call__text">Let's chat about your custom software development project.</p>
        <div ref={divRef} className="calendly-inline-widget" data-auto-load="false" />
      </div>

    </div>
  </Layout>
}

export default BookLaunchCall
