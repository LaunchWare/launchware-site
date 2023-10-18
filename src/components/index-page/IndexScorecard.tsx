import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

import "./css/index-scorecard.css";

export const IndexScorecard = () => {

  return (
    <section className="index-scorecard">
      <div className="index-scorecard__contents">
        <div className="index-scorecard__text-container">
          <h2 className="index-scorecard__heading">Is your project set up for success?</h2>
          <p className="index-scorecard__text">
            Every technology leader wants their projects to succeed. But too many don’t.
          </p>
          <p className="index-scorecard__text">
            That’s why we took what we’ve learned about successful projects and created the Software
            Success Scorecard. By answering just 21 quick questions, you’ll see if you’re set up for
            success – or what you need to change for you to reach your goals.
          </p>
          <button className="index-scorecard__button button" type="button">
            <span>Download the Scorecard{" "}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="index-scorecard__image-container">
          <StaticImage
            layout="constrained"
            width={380}
            className="index-scorecard__image"
            alt=""
            src="../../images/index/scorecard.png"
          />
        </div>
      </div>
    </section>
  );
};
