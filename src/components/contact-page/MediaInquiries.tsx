import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import "./css/media-inquiries.css";

export const MediaInquiries = () => (
  <section className="media-inquiries">
    <div className="media-inquiries__contents">
      <img className="media-inquiries__image" src="https://placehold.co/680x366" />
      <p className="media-inquiries__text_sm-hidden">
        With the media? <span className="media-inquiries__text_orange">Let's connect</span>.
      </p>
      <div className="media-inquiries__text-container">
        <h3 className="media-inquiries__heading">Media and Podcast Inquiries</h3>
        <p className="media-inquiries__text">
          When it comes to software developmnet and technology, we love to geek out.
        </p>
        <p className="media-inquiries__text">
          Give us a shout if you’re seeking guest writers, podcast guests, and speakers.
        </p>
        <Link className="media-inquiries__link" to="#">
          <span>Reach out</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  </section>
);
