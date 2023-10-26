import React from "react";

import "@launchware/replicator/dist/css/Modal/modal.css";
import { StaticImage } from "gatsby-plugin-image";

import { ScorecardOptInForm } from "./ScorecardOptInForm";
import "./css/scorecard-modal.css";

export const ScorecardModal = () => (
  <div className="scorecard-modal">
    {/* <StaticImage
      alt=""
      className="scorecard-modal__decorative-square"
      role="presentation"
      src="../../images/decorations/decorative_square.png"
    /> */}
    <div className="scorecard-modal__text-container">
      <h2 className="scorecard-modal__heading">The Software Success Scorecard</h2>
      <p className="scorecard-modal__text">
        By answering just 21 quick questions, you’ll see if you’re set up for success – or what you
        need to change for you to reach your goals.
      </p>
      <ScorecardOptInForm />
    </div>
  </div>
);
