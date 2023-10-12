import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import "./css/built-for-you.css";

export const IndexBuiltForYou = () => (
  <div className="built-for-you">
    <div className="built-for-you__contents">
      <StaticImage
        alt=""
        className="built-for-you__decorative-square"
        src="../../images/decorations/decorative_square.png"
      />
      <div className="built-for-you__heading-container">
        <h2 className="built-for-you__heading">A partnership built for you</h2>
      </div>
      <div className="built-for-you__cards-container">
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <StaticImage
              layout="constrained"
              width={336}
              className="built-for-you__image"
              alt="Man cleaning eyeglasses"
              src="../../images/index/cleaning-eyeglasses.jpg"
            />
          </div>
          <h4 className="built-for-you__card-heading">Engineering Leaders</h4>
          <p className="built-for-you__text">Seeking business-minded product development teams</p>
        </div>
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <StaticImage
              layout="constrained"
              width={336}
              className="built-for-you__image"
              alt="Pointing at whiteboard"
              src="../../images/index/pointing-at-whiteboard.jpg"
            />
          </div>
          <h4 className="built-for-you__card-heading">Product Managers</h4>
          <p className="built-for-you__text">Looking for additional development expertise </p>
        </div>
        <div className="built-for-you__card">
          <div className="built-for-you__image-container">
            <StaticImage
              layout="constrained"
              width={336}
              className="built-for-you__image"
              alt="Four colleagues around a conference table"
              src="../../images/index/foursome-around-table.jpg"
            />
          </div>
          <h4 className="built-for-you__card-heading">Technology Executives</h4>
          <p className="built-for-you__text">
            Seeking a proven process and team with a track record of launching remarkable software{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
);
