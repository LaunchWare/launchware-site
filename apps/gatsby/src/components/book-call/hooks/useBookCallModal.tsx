import React, { MouseEventHandler, useEffect, useCallback } from "react"

import { useModal } from "@launchware/replicator"
import "@launchware/replicator/dist/css/Modal/modal.css"

import { BookCallModal } from "../BookCallModal"
import "../css/book-call-modal.css"

let calendlyScriptLoaded = false

const loadCalendlyScript = () => {
  if (calendlyScriptLoaded || typeof document === "undefined") return
  calendlyScriptLoaded = true
  const script = document.createElement("script")
  script.src = "https://assets.calendly.com/assets/external/widget.js"
  script.async = true
  script.setAttribute("data-usercentrics", "Calendly")
  document.head.appendChild(script)
}

export const useBookCallModal = () => {
  const {
    modal,
    isVisible: isModalVisible,
    setVisibility: setModalVisibility,
  } = useModal(() => <BookCallModal enabled={isModalVisible} />, {
    scrollToTop: false,
    size: "large",
  })

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data.event && e.data.event.indexOf("calendly")) {
        setModalVisibility(false)
      }
    })
  }, [])

  const clickHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault()
      loadCalendlyScript()
      if (setModalVisibility) {
        setModalVisibility(true)
      }
    },
    [setModalVisibility],
  )

  return { clickHandler, isModalVisible, modal }
}
