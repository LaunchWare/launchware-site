import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/index-partnership.css";

export const IndexPartnership = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="index-partnership">
      {modal}
      <div className="index-partnership__contents">
        <StaticImage
          alt=""
          className="index-partnership__decorative-circle"
          role="presentation"
          src="../../images/decorations/decorative_circle.png"
        />
        <div className="index-partnership__text-container">
          <h2 className="index-partnership__heading">
            Work with a technology partner, not a feature factory
          </h2>
          <p className="index-partnership__text">
            Most software development consultancies leave you holding the bag when it comes to the
            hardest part of your project: defining what needs to be built. They’ll come into your
            project, take your input at face value, and interpret it as a specification. Then,
            they’ll disappear for a few months, and come back with a product that is riddled with
            bugs and doesn’t resemble what you requested.
          </p>
          <p className="index-partnership__text">
            We think that’s a great way to build the WRONG product. Our team has a proven track
            record of working in partnership with you to ensure we build the RIGHT product,
            together. Equipped with a process we’ve deployed successfully with dozens of clients,
            we’ll identify what you need, clarify what we plan to build, and we’ll deliver usable
            software every other week for you to review.
          </p>
          <ul>
            <li className="index-partnership__list-item">
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} height="1rem" />
              <span>A proven process</span>
            </li>
            <li className="index-partnership__list-item">
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} height="1rem" />
              <span>Decades of tech experience</span>
            </li>
            <li className="index-partnership__list-item">
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} height="1rem" />
              <span>Regular review and adaptation</span>
            </li>
          </ul>
        </div>
        <div className="index-partnership__image-container">
          <StaticImage
            layout="constrained"
            width={707}
            className="index-partnership__image"
            alt="Two colleagues talking in an office"
            src="../../images/index/two-colleagues-talking.jpg"
          />
          <button className="index-partnership__button button" type="button" onClick={clickHandler}>
            Book My Launch Call
          </button>
        </div>
      </div>
    </section>
  );
};
