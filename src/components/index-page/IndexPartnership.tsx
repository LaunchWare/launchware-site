import React from "react";

import decorativeCircle from "../../assets/images/decorative-circle.png";
import "./css/index-partnership.css";

export const IndexPartnership = () => (
  <section className="index-partnership">
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
          project, take your input at face value, and interpret it as a specification. Then, they’ll
          disappear for a few months, and come back with a product that is riddled with bugs and
          doesn’t resemble what you requested.
        </p>
        <p className="index-partnership__text">
          We think that’s a great way to build the WRONG product. Our team has a proven track record
          of working in partnership with you to ensure we build the RIGHT product, together.
          Equipped with a process we’ve deployed successfully with dozens of clients, we’ll identify
          what you need, clarify what we plan to build, and we’ll deliver usable software every
          other week for you to review.
        </p>
        <ul>
          <li className="index-partnership__list-item">A proven process</li>
          <li className="index-partnership__list-item">Decades of tech experience</li>
          <li className="index-partnership__list-item">Regular review and adaptation</li>
        </ul>
      </div>
      <div className="index-partnership__image-container">
        <img className="index-partnership__image" src="https://placehold.co/707x510" />
      </div>
    </div>
  </section>
);
