import React from "react"

import "./css/welcome-hero.css"

export const WelcomeHero = () => {
  return (
    <div className="welcome-hero">
      <div className="welcome-hero__contents">
        <h1 className="welcome-hero__heading">Welcome to Launch Well</h1>
        <p className="welcome-hero__subheading">
          Thanks for subscribing. Here's your PRD template and everything you need to start using it
          today.
        </p>
      </div>
    </div>
  )
}
