import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dots from "../../images/decorations/dots.png";
import "./css/contact-us-chat.css";

export const ContactUsChat = () => (
  <section className="contact-us-chat">
    <div className="contact-us-chat__contents">
      <img alt="" className="contact-us-chat__dots" role="presentation" src={dots} />
      <div className="contact-us-chat__text-container">
        <h2 className="contact-us-chat__heading">Chat with a Developer</h2>
        <p className="contact-us-chat__text">
          Skip the gatekeepers and nontechnical salespeople. To best understand your project, we’ll
          connect you directly with a principal engineer.
        </p>
        <Link className="contact-us-chat__link" to="#">
          <span>Let's chat</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="contact-us-chat__image-container">
        <img className="contact-us-chat__image" src="https://placehold.co/680x366" />
      </div>
    </div>
  </section>
);
