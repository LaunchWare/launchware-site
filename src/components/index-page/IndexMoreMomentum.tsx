import React from "react";

import decorativeSquare from "../../assets/images/decorative_square.png";
import "./css/index-more-momentum.css";

export const IndexMoreMomentum = () => (
  <section className="index-more-momentum">
    <div className="index-more-momentum__contents">
      <img
        alt=""
        className="index-more-momentum__decorative-square"
        role="presentation"
        src={decorativeSquare}
      />
      <div className="index-more-momentum__heading-container">
        <h2 className="index-more-momentum__heading">
          Build Your Application with More Momentum and Less Stress
        </h2>
      </div>
      <div className="index-more-momentum__cards-container">
        <div className="index-more-momentum__card">
          <div className="index-more-momentum__image-container">
            <img className="index-more-momentum__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="index-more-momentum__card-heading">Request your launch call</h2>
          <p className="index-more-momentum__text">
            Let’s hop on a call to discuss what challenges your facing, and how we can help. It
            takes 30 minutes, and we’ll clearly identify next steps to advance your project.{" "}
          </p>
        </div>
        <div className="index-more-momentum__card">
          <div className="index-more-momentum__image-container">
            <img className="index-more-momentum__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="index-more-momentum__card-heading">Revive your project</h2>
          <p className="index-more-momentum__text">
            Together, we’ll identify the most important next steps to get your project back on
            track. Any big or complex endeavor can be broken down into small steps, so we’ll
            collaboratively map out the all-important first leap.
          </p>
        </div>
        <div className="index-more-momentum__card">
          <div className="index-more-momentum__image-container">
            <img className="index-more-momentum__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="index-more-momentum__card-heading">Reach your goals</h2>
          <p className="index-more-momentum__text">
            When your product solves the right problems and is built to scale, the sky is the limit
            for where it will take your organization.
          </p>
        </div>
      </div>
    </div>
  </section>
);
