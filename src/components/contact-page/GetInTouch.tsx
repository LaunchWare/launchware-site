import React from "react";

import { faEnvelope, faLocationDot, faPhone, faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";

import { getFieldClassName } from "../general/services/getFieldClassName";
import { companyContactInformation } from "../../configuration/companyContactInformation";
import "./css/get-in-touch.css";
import { ContactForm } from "./ContactForm";
import { StaticImage } from "gatsby-plugin-image";

export const GetInTouch = () => {
  const {
    email,
    mailingAddress: { streetAddress, streetAddress2, city, state, zipCode },
    phone,
    sms,
  } = companyContactInformation;

  return (
    <section className="get-in-touch">
      <div className="get-in-touch__contents">
        <StaticImage
          alt=""
          className="get-in-touch__alternate-circle"
          role="presentation"
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
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
                <li className="get-in-touch__list-item">
                  <FontAwesomeIcon className="get-in-touch__icon" icon={faSms} />
                  <a href={`tel:${sms}`}>{sms}</a>
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
    </section>
  );
};
