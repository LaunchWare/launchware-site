import React from "react";

import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";

import { getFieldClassName } from "../general/services/getFieldClassName";
import alternateCircle from "../../images/decorations/alternate_circle.png";
import { companyContactInformation } from "../../configuration/companyContactInformation";
import { useNotifications } from "../../hooks/useNotifications";
import { usePostGeneralInquiry } from "./hooks/usePostGeneralInquiry";
import { GetInTouchFormValues } from "./models/GetInTouchFormShapes";
import "./css/get-in-touch.css";
import { ContactForm } from "./ContactForm";

export const GetInTouch = () => {
  const {
    email,
    mailingAddress: { streetAddress, streetAddress2, city, state, zipCode },
    phone,
  } = companyContactInformation;

  return (
    <section className="get-in-touch">
      <div className="get-in-touch__contents">
        <img
          alt=""
          className="get-in-touch__alternate-circle"
          role="presentation"
          src={alternateCircle}
        />
        <h2 className="get-in-touch__section-heading">Get in touch</h2>
        <p className="get-in-touch__text_center">We'd love to hear from you</p>
        <div className="get-in-touch__card">
          <div className="get-in-touch__text-container get-in-touch__text-container_first">
            <h3 className="get-in-touch__heading">Traditional ways to reach out</h3>
            <ul className="get-in-touch__list">
              Boston
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
                <FontAwesomeIcon className="get-in-touch__icon" icon={faEnvelope} />
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            </ul>
          </div>
          <div className="get-in-touch__text-container get-in-touch__text-container_last">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
