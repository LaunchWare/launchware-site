import React, { FC, useEffect, useRef, useState } from "react"
import { useModal } from "@launchware/replicator"
import { companyContactInformation } from "../../../configuration/companyContactInformation"

import "@launchware/replicator/dist/css/Modal/modal.css"
import "../css/book-call-modal.css"

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string,
        parentElement: HTMLElement,
      }) => void
    };
  }
}

export const useBookCallModal = () => {
  const divRef = useRef<HTMLDivElement>(null)

 const ModalContent = () => {
    return (<>
      <h2>Book Your Launch Call</h2>
      <p>Let's chat about your custom software development project.</p>
      <div ref={divRef} className="calendly-inline-widget" data-auto-load="false" />
    </>)
  }

  const { modal, isVisible: isModalVisible, setVisibility: setModalVisibility, } = useModal(ModalContent)
  const [calendlyInitialized, setCalendlyInitialized] = useState(false)

  const url = companyContactInformation.launchCallUrl

  useEffect(() => {
    if (document && !window.Calendly && !calendlyInitialized) {
      const tag = document.createElement("script")
      tag.async = true
      tag.src = "https://assets.calendly.com/assets/external/widget.js"
      const body = document.getElementsByTagName("body")[0]
      body.appendChild(tag)
    }
    window.addEventListener("message", (e) => {
      if (e.data.event && e.data.event.indexOf("calendly")) {
        setModalVisibility(false)
      }
    })

    if (isModalVisible && !!divRef?.current) {
      window.Calendly.initInlineWidget({
        url: `${url}&hide_event_type_details=1`,
        parentElement: divRef.current,
      })
      setCalendlyInitialized(true)
    }

  }, [calendlyInitialized, isModalVisible, setModalVisibility, url])

  return { setModalVisibility, isModalVisible, modal }
}
