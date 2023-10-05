import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import decorativeCircle from "../../assets/images/decorative_circle.png";
import "./css/index-partnership.css";

export const IndexPartnership = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="index-partnership">
      {modal}
      <div className="index-partnership__contents">
        <img
          alt=""
          className="index-partnership__decorative-circle"
          role="presentation"
          src={decorativeCircle}
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
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} />
              <span>A proven process</span>
            </li>
            <li className="index-partnership__list-item">
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} />
              <span>Decades of tech experience</span>
            </li>
            <li className="index-partnership__list-item">
              <FontAwesomeIcon className="index-partnership__check" icon={faCheck} />
              <span>Regular review and adaptation</span>
            </li>
          </ul>
        </div>
        <div className="index-partnership__image-container">
          <img className="index-partnership__image" src="https://placehold.co/707x510" />
          <button className="index-partnership__button button" type="button" onClick={clickHandler}>
            Book My Launch Call
          </button>
        </div>
      </div>
    </section>
  );
};
