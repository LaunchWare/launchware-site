import React from "react";

import decorativeCircle from "../../assets/images/decorative-circle.png";
import "./css/index-exasperation.css";

export const IndexExasperation = () => {
  return (
    <div className="index-exasperation">
      <div className="index-exasperation__contents">
        <img
          alt=""
          className="index-exasperation__decorative-circle"
          role="presentation"
          src={decorativeCircle}
        />
        <div className="index-exasperation__image-container">
          <img className="index-exasperation__image" src="https://placehold.co/680x520" />
        </div>
        <div className="index-exasperation__text-container">
          <h2 className="index-exasperation__heading">
            Creating custom software should be exhilarating, not exasperating
          </h2>
          <p className="index-exasperation__text">
            Turning your vision into reality can be overwhelming, and partnering with the wrong
            software development team can leave you feeling stressed out and frustrated. What’s
            worse, you could invest a massive amount of time and money without a working product to
            show for it at the end of it all.
          </p>
          <p className="index-exasperation__text">
            When it comes to your software, the stakes are too high. Your project should have its
            chance to make lives better. That's why our custom development team collaborates with
            our clients to make sure their software solves the right problems and that they build
            the right products.
          </p>
        </div>
      </div>
    </div>
  );
};
