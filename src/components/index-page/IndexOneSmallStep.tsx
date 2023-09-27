import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Tagline } from "../general/Tagline";
import { getFieldClassName } from "../general/services/getFieldClassName";
import alternateCircle from "../../assets/images/alternate_circle.png";
import { useNotifications } from "../../hooks/useNotifications";
import { usePostContactInquiry } from "./hooks/usePostContactInquiry";
import { ContactInquiryFormValues } from "./models/ContactInquiryShapes";
import "./css/index-one-small-step.css";

export const IndexOneSmallStep = () => {
  const { addNotification } = useNotifications();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactInquiryFormValues>({
    defaultValues: {
      organization: "",
      email: "",
      phone: "",
      projectDescription: "",
      inquiryLeadType: "How did you hear about us?",
    },
  });

  const { mutate: postContactInquiry, error: backendErrors, isSuccess, isLoading } = usePostContactInquiry();

  const onSubmit: SubmitHandler<ContactInquiryFormValues> = (formValues) => {
    postContactInquiry(formValues, {
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

  const blockClassName = "index-one-small-step";
  const errorClassPrefix = `${blockClassName}__input`;
  const formContent = <form className="index-one-small-step__form" data-netlify="true"
    name="giantLeapInquiry" onSubmit={handleSubmit(onSubmit)} netlify-honeypot="emailAddress">
    <input
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "firstName",
        className: "index-one-small-step__input"
      })}
      placeholder="Your first name"
      type="text"
      id="firstName"
      {...register("firstName", { required: true })}
    />
    {errors.firstName && <p className="index-one-small-step__error">First name required</p>}
    <input
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "lastName",
        className: "index-one-small-step__input"
      })}
      placeholder="Your last name"
      type="text"
      id="lastName"
      {...register("lastName", { required: true })}
    />
    {errors.lastName && <p className="index-one-small-step__error">Last name required</p>}
    <input
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "organization",
        className: "index-one-small-step__input"
      })}
      placeholder="Your organization or project name"
      type="text"
      id="organization"
      {...register("organization", { required: true })}
    />
    {errors.organization && <p className="index-one-small-step__error">Organization or project name required</p>}
    <input
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "email",
        className: "index-one-small-step__input"
      })}
      placeholder="Your email"
      type="text"
      id="email"
      {...register("email", { required: true })}
    />
    {errors.email && <p className="index-one-small-step__error">Email required</p>}
    <input
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "phone",
        className: "index-one-small-step__input"
      })}
      placeholder="Your phone number"
      type="text"
      id="phone"
      {...register("phone")}
    />
    <textarea
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "projectDescription",
        className: "index-one-small-step__input"
      })}
      placeholder="Tell us about your project"
      id="projectDescription"
      {...register("projectDescription")}
    />
    <select
      className={getFieldClassName({
        errorClassPrefix,
        errors,
        fieldName: "inquiryLeadType",
        className: "index-one-small-step__input"
      })}
      id="inquiryLeadType"
      {...register("inquiryLeadType")}
    >
      <option>How did you hear about us?</option>
      <option>From a client of LaunchWare</option>
      <option>
        From an alum of Launch Academy
      </option>
    </select>
    <input type="hidden" value="giantLeapInquiry" {...register("form-name")} />
    <input className="button" type="submit" disabled={isLoading} value="Send message" />
  </form>

  return (
    <section className="index-one-small-step">
      <div className="index-one-small-step__contents">
        <img
          alt=""
          className="index-partnership__alternate-circle"
          role="presentation"
          src={alternateCircle}
        />
        <div className="index-one-small-step__text-container">
          <Tagline tagline="Contact us" />
          <h2 className="index-one-small-step__heading">
            One Small Step, One GIANT Leap for Your Project
          </h2>
          <p className="index-one-small-step__text">
            Fill out the form below and tell us more about your project. We’ll get back to you
            within a business day to start making your vision a reality.
          </p>
          {isSuccess ? <p className="index-one-small-step__text">Thanks for your inquiry. We'll be in touch!</p> : formContent}
        </div>
        <div className="index-one-small-step__image-container">
          <img className="index-one-small-step__image" src="https://placehold.co/602x794" />
        </div>
      </div>
    </section>
  );
};
