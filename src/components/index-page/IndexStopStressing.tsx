import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../../css/index.css";
import "./css/index-stop-stressing.css";

export const IndexStopStressing = () => (
  <div className="index-stop-stressing">
    <div className="index-stop-stressing__contents">
      <div className="index-stop-stressing__image-container">
        <StaticImage
          layout="constrained"
          width={672}
          className="index-stop-stressing__image"
          alt="Smiling woman holding a stylus at a meeting"
          src="../../images/index/woman-holding-stylus.jpg"
        />
      </div>
      <div className="index-stop-stressing__text-container">
        <h2 className="index-stop-stressing__heading">Stop Stressing. Start Shipping</h2>
        <p className="index-stop-stressing__text">
          We understand the challenges you may face when it comes to trusting a software development
          company to bring your vision to life. Delays, poor quality, and financial concerns are
          valid worries. That's why we're committed to building a partnership based on trust,
          transparency, and proven results.
        </p>
        <p className="index-stop-stressing__text">
          When it comes to your software, the stakes are too high. Your project should have its
          chance to make lives better. That's why our custom development team collaborates with our
          clients to make sure their software solves the right problems and that they build the
          right products.
        </p>
        <p className="index-stop-stressing__text">
          <Link className="index-stop-stressing__learn-more" to="#">
            <span>Learn More</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </p>
      </div>
    </div>
  </div>
);
