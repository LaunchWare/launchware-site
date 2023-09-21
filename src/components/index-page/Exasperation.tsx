import React from "react";

import decorativeCircle from "../../assets/images/decorative-circle.png";
import "./css/exasperation.css";

export const Exasperation = () => (
  <section className="exasperation">
    <div className="exasperation__contents">
      <img
        alt=""
        className="exasperation__decorative-circle"
        role="presentation"
        src={decorativeCircle}
      />
      <div className="exasperation__image-container">
        <img className="exasperation__image" src="https://placehold.co/680x520" />
      </div>
      <div className="exasperation__text-container">
        <h2 className="exasperation__heading">
          Creating custom software should be exhilarating, not exasperating
        </h2>
        <p className="exasperation__text">
          Turning your vision into reality can be overwhelming, and partnering with the wrong
          software development team can leave you feeling stressed out and frustrated. What’s worse,
          you could invest a massive amount of time and money without a working product to show for
          it at the end of it all.
        </p>
        <p className="exasperation__text">
          When it comes to your software, the stakes are too high. Your project should have its
          chance to make lives better. That's why our custom development team collaborates with our
          clients to make sure their software solves the right problems and that they build the
          right products.
        </p>
      </div>
    </div>
  </section>
);
