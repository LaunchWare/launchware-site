import React from "react";

import { faEnvelope, faLocationDot, faPhone, faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";

import { companyContactInformation } from "../../configuration/companyContactInformation";
import { ContactForm } from "./ContactForm";
import "./css/get-in-touch.css";

export const GetInTouch = () => {
  const {
    email,
    mailingAddress: { streetAddress, streetAddress2, city, state, zipCode },
    phoneHref,
    phoneFormatted,
    sms,
  } = companyContactInformation;

  return (
    <div className="get-in-touch">
      <div className="get-in-touch__contents">
        <StaticImage
          alt=""
          className="get-in-touch__alternate-circle"
          src="../../images/decorations/alternate_circle.png"
        />
        <h2 className="get-in-touch__section-heading">Get in touch</h2>
        <p className="get-in-touch__text_center">We'd love to hear from you</p>
        <div className="get-in-touch__card">
          <div className="get-in-touch__text-container get-in-touch__text-container_first">
            <h3 className="get-in-touch__heading">Traditional ways to reach out</h3>
            <figure className="get-in-touch__list">
              <figcaption className="get-in-touch__list-caption">Boston</figcaption>
              <ul>
                <li className="get-in-touch__list-item">
                  <FontAwesomeIcon className="get-in-touch__icon" icon={faLocationDot} />
                  <div>
                    <p>
                      {streetAddress}, {streetAddress2}
                    </p>
                    <p>
                      {city}, {state} {zipCode}
                    </p>
                  </div>
                </li>
                <li className="get-in-touch__list-item">
                  <FontAwesomeIcon className="get-in-touch__icon" icon={faPhone} />
                  <a href={`tel:${phoneHref}`}>{phoneFormatted}</a>
                </li>
                <li className="get-in-touch__list-item">
                  <FontAwesomeIcon className="get-in-touch__icon" icon={faSms} />
                  <a href={`tel:${phoneHref}`}>{sms}</a>
                </li>
                <li className="get-in-touch__list-item">
                  <FontAwesomeIcon className="get-in-touch__icon" icon={faEnvelope} />
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
            </figure>
          </div>
          <div className="get-in-touch__text-container get-in-touch__text-container_last">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
