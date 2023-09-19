import React from "react";

import { Link } from "gatsby";

import arrowForward from "../../assets/images/arrow_forward.png"
import "./css/index-stop-stressing.css";

export const IndexStopStressing = () => (
  <section className="index-stop-stressing">
    <div className="index-stop-stressing__contents">
      <div className="index-stop-stressing__image-container">
        <img className="index-stop-stressing__image" src="https://placehold.co/672x509" />
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
          <Link className="index-launched__learn-more" to="#">
            <span>Learn More</span>
            <img className="index-launched__arrow-forward" src={arrowForward} />
          </Link>
        </p>
      </div>
    </div>
  </section>
);
