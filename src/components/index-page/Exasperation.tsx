import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/exasperation.css";

export const Exasperation = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="exasperation">
      {modal}
      <div className="exasperation__contents">
        <StaticImage
          alt=""
          className="exasperation__decorative-circle"
          role="presentation"
          src="../../images/decorations/decorative_circle.png"
        />
        <div className="exasperation__image-container">
          <StaticImage className="exasperation__image" alt="Woman computing" width={684} src="../../images/index/woman-typing.jpg" />
        </div>
        <div className="exasperation__text-container">
          <h2 className="exasperation__heading">
            Creating custom software should be exhilarating, not exasperating
          </h2>
          <p className="exasperation__text">
            Turning your vision into reality can be overwhelming, and partnering with the wrong
            software development team can leave you feeling stressed out and frustrated. What’s
            worse, you could invest a massive amount of time and money without a working product to
            show for it at the end of it all.
          </p>
          <p className="exasperation__text">
            When it comes to your software, the stakes are high. Your project should have its chance
            to make lives better. That's why our custom development team collaborates with our
            clients to make sure their software solves the right problems and that they build the
            right products.
          </p>
          <button className="exasperation__button button" type="button" onClick={clickHandler}>
            Book My Launch Call
          </button>
        </div>
      </div>
    </section>
  );
};
