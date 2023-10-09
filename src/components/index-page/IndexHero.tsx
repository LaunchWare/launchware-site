import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { StaticImage } from "gatsby-plugin-image";

import "./css/index-hero.css";

export const IndexHero = () => {
  const { modal, clickHandler } = useBookCallModal();
  return (
    <section className="index-hero">
      <div className="index-hero__contents">
        <div className="index-hero__text-container">
          <h2 className="index-hero__heading">Make your software a success</h2>
          <p className="index-hero__text">
            Software development that helps your organization reach its goals
          </p>
          <button className="index-hero__button button" type="button" onClick={clickHandler}>
            Book My Launch Call
          </button>
        </div>
        <div className="index-hero__image-container">
          <StaticImage
            layout="constrained"
            quality={90}
            width={578}
            className="index-hero__image"
            alt="Three Developers Coding"
            src="../../images/index/three-developers-coding.jpg"
          />
        </div>
      </div>
      {modal}
    </section>
  );
};
