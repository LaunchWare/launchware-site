import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import { StaticImage } from "gatsby-plugin-image";

import "./css/enough-on-your-plate.css";

export const EnoughOnYourPlate = () => (
  <section className="enough-on-your-plate">
    <div className="enough-on-your-plate__contents">
      <div className="enough-on-your-plate__image-container">
        <StaticImage
          layout="constrained"
          width={672}
          className="enough-on-your-plate__image"
          alt="Man drinking coffee while on a laptop"
          src="../../images/services/coffee-drinker.jpg"
        />
      </div>
      <div className="enough-on-your-plate__text-container">
        <h2 className="enough-on-your-plate__heading">You have enough on your plate.</h2>
        <p className="enough-on-your-plate__text">
          Micromanaging your development partner shouldn’t be another item on your to-do list. We’re
          in the business of launching.
        </p>
        <div className="enough-on-your-plate__grid">
          <div className="enough-on-your-plate__grid-card">
            <StarIcon className="enough-on-you-plate__icon" />
            <p className="enough-on-your-plate__card-text">30+ Applications Launched</p>
          </div>
          <div className="enough-on-your-plate__grid-card">
            <StarIcon className="enough-on-you-plate__icon" />
            <p className="enough-on-your-plate__card-text">Flexible, Cross-functional Teams</p>
          </div>
          <div className="enough-on-your-plate__grid-card">
            <StarIcon className="enough-on-you-plate__icon" />
            <p className="enough-on-your-plate__card-text">
              Collaborative, Long-lasting Partnership
            </p>
          </div>
          <div className="enough-on-your-plate__grid-card">
            <StarIcon className="enough-on-you-plate__icon" />
            <p className="enough-on-your-plate__card-text">1000+ Developers Trained</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
