import React from "react"

import "./css/why-prd.css"

export const WhyPrd = () => {
  return (
    <div className="why-prd">
      <div className="why-prd__contents">
        <h2 className="why-prd__heading">Why You Need a PRD</h2>
        <p className="why-prd__text">
          Most software projects don't fail because of bad code. They fail because there wasn't
          shared aggreement on what to build before the building started. Scope creeps, launches
          slip, and teams end up rebuilding features that should have been right the first time.
        </p>
        <p className="why-prd__text">
          A good Product Requirements Document (PRD) fixes that. it ensures you, your dev team, and
          your designers are working from the same blueprint before development begins. Not because
          process is fun, but because <strong>clarity is cheap and rework is expensive</strong>.
        </p>
        <p className="why-prd__text">
          This template is what we actually use with clients. It's structured enough to be useful
          and short enough that you'll finish it.
        </p>
        <p className="why-prd__text">
          <strong>What you'll get:</strong>
        </p>
        <ul className="why-prd__list">
          <li>A walkthrough video so you know how to use it</li>
          <li>A ready-to-use Google Doc you can copy and fill out today</li>
          <li>A Markdown version for teams working in GitHub or code repos</li>
        </ul>
      </div>
    </div>
  )
}
