import React from "react"

import { useBookCallModal } from "../book-call/hooks/useBookCallModal"

import "./css/welcome-cta.css"

export const WelcomeCta = () => {
  const { modal, clickHandler } = useBookCallModal()

  return (
    <div className="welcome-cta">
      {modal}
      <div className="welcome-cta__contents">
        <h2 className="welcome-cta__heading">Ready to Bring Your Product to Life?</h2>
        <p className="welcome-cta__text">
          Need help writing the PRD, or ready to build? Either way, let's talk.
        </p>
        <button className="welcome-cta__button button" type="button" onClick={clickHandler}>
          Book My Launch Call
        </button>
      </div>
    </div>
  )
}
