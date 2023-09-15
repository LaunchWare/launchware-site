import React from "react";

import "./css/index-hero.css";

export const IndexHero = () => {
  return (
    <div className="index-hero">
      <div className="index-hero__contents">
        <div className="index-hero__text-container">
          <h2 className="index-hero__heading">Make your software a success</h2>
          <p className="index-hero__text">
            Software development that helps your organization reach its goals
          </p>
          <button className="index-hero__button button">Book my launch call</button>
        </div>
        <div className="index-hero__image-container">
          <img className="index-hero__image" src="https://placehold.co/585x438" />
        </div>
      </div>
    </div>
  );
};
