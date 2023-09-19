import React from "react";

import cornerOrnament from "../../assets/images/corner_ornament.png";
import "./css/index-built-for-you.css";

export const IndexBuiltForYou = () => (
  <section className="index-built-for-you">
    <div className="index-built-for-you__contents">
      <img
        alt=""
        className="index-built-for-you__corner-ornament"
        role="presentation"
        src={cornerOrnament}
      />
      <div className="index-built-for-you__heading-container">
        <h2 className="index-built-for-you__heading">A partnership built for you</h2>
      </div>
      <div className="index-built-for-you__cards-container">
        <div className="index-built-for-you__card">
          <div className="index-built-for-you__image-container">
            <img className="index-built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h2 className="index-built-for-you__card-heading">Engineering Leaders</h2>
          <p className="index-built-for-you__text">
            Seeking business-minded product development teams
          </p>
        </div>
        <div className="index-built-for-you__card">
          <div className="index-built-for-you__image-container">
            <img className="index-built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h2 className="index-built-for-you__card-heading">Product Managers</h2>
          <p className="index-built-for-you__text">Looking for additional development expertise </p>
        </div>
        <div className="index-built-for-you__card">
          <div className="index-built-for-you__image-container">
            <img className="index-built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h2 className="index-built-for-you__card-heading">Technology Executives</h2>
          <p className="index-built-for-you__text">
            Seeking a proven process and team with a track record of launching remarkable software{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
);
