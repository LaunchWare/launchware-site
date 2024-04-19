import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./css/contact-us-chat.css";

export const ContactUsChat = () => (
  <div className="contact-us-chat">
    <div className="contact-us-chat__contents">
      <StaticImage
        alt=""
        className="contact-us-chat__dots"
        src="../../images/decorations/dots.png"
      />
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
        <StaticImage
          layout="constrained"
          className="contact-us-chat__image"
          alt="Pair of hands typing on a laptop"
          width={680}
          src="../../images/contact/hands-and-laptop.jpg"
        />
      </div>
    </div>
  </div>
);
