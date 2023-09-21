import React from "react";

import decorativeSquare from "../../assets/images/decorative_square.png";
import "./css/built-for-you.css";

export const IndexBuiltForYou = () => (
  <section className="built-for-you">
    <div className="built-for-you__contents">
      <img
        alt=""
        className="built-for-you__decorative-square"
        role="presentation"
        src={decorativeSquare}
      />
      <div className="built-for-you__heading-container">
        <h2 className="built-for-you__heading">A partnership built for you</h2>
      </div>
      <div className="built-for-you__cards-container">
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <img className="built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h4 className="built-for-you__card-heading">Engineering Leaders</h4>
          <p className="built-for-you__text">Seeking business-minded product development teams</p>
        </div>
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <img className="built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h4 className="built-for-you__card-heading">Product Managers</h4>
          <p className="built-for-you__text">Looking for additional development expertise </p>
        </div>
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <img className="built-for-you__image" src="https://placehold.co/336x160" />
          </div>
          <h4 className="built-for-you__card-heading">Technology Executives</h4>
          <p className="built-for-you__text">
            Seeking a proven process and team with a track record of launching remarkable software{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
);
