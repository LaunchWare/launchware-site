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

export const GetInTouch = () => {
  const { addNotification } = useNotifications();
  const blockClassName = "get-in-touch";
  const errorClassPrefix = `${blockClassName}__input`;
  const {
    email,
    mailingAddress: { streetAddress, streetAddress2, city, state, zipCode },
    phone,
  } = companyContactInformation;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<GetInTouchFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate: postGeneralInquiry, error: backendErrors } = usePostGeneralInquiry();

  const onSubmit: SubmitHandler<GetInTouchFormValues> = (formValues) => {
    postGeneralInquiry(formValues, {
      onSuccess: () => {
        addNotification("Thanks for contacting us!", {
          appearance: "success",
        });
      },
      onError: (err: Error) => {
        addNotification("There was a problem, please try again later.", {
          appearance: "error",
        });
      },
    });
  };

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
          <div className="get-in-touch__text-container">
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
          <div className="get-in-touch__text-container">
            <h3 className="get-in-touch__heading">General inquiries</h3>
            <form className="get-in-touch__form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className={getFieldClassName({
                  errorClassPrefix,
                  errors,
                  fieldName: "name",
                  className: "get-in-touch__input",
                })}
                placeholder="Name"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="get-in-touch__error">Name required</p>}
              <input
                className={getFieldClassName({
                  errorClassPrefix,
                  errors,
                  fieldName: "email",
                  className: "get-in-touch__input",
                })}
                placeholder="Email"
                type="text"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="get-in-touch__error">Email required</p>}
              <textarea
                className="get-in-touch__input"
                placeholder="Message"
                id="message"
                {...register("message")}
              />
              <input className="button" type="submit" value="Send message" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
