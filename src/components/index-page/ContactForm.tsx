import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { SubmitHandler, useForm } from "react-hook-form";

import { Tagline } from "../general/Tagline";
import { getFieldClassName } from "../general/services/getFieldClassName";
import { useNotifications } from "../../hooks/useNotifications";
import { usePostContactInquiry } from "./hooks/usePostContactInquiry";
import { ContactInquiryFormValues } from "./models/ContactInquiryShapes";

export const IndexFormSection = () => {
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

  const {
    mutate: postContactInquiry,
    error: backendErrors,
    isSuccess,
    isLoading,
  } = usePostContactInquiry();

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

  const blockClassName = "one-small-step";
  const errorClassPrefix = `${blockClassName}__input`;
  const formContent = (
    <form
      className="one-small-step__form"
      data-netlify="true"
      name="giantLeapInquiry"
      onSubmit={handleSubmit(onSubmit)}
      netlify-honeypot="emailAddress"
    >
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "firstName",
          className: "one-small-step__input",
        })}
        placeholder="Your first name"
        type="text"
        id="firstName"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <p className="one-small-step__error">First name required</p>}
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "lastName",
          className: "one-small-step__input",
        })}
        placeholder="Your last name"
        type="text"
        id="lastName"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <p className="one-small-step__error">Last name required</p>}
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "organization",
          className: "one-small-step__input",
        })}
        placeholder="Your organization or project name"
        type="text"
        id="organization"
        {...register("organization", { required: true })}
      />
      {errors.organization && (
        <p className="one-small-step__error">Organization or project name required</p>
      )}
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "email",
          className: "one-small-step__input",
        })}
        placeholder="Your email"
        type="text"
        id="email"
        {...register("email", { required: true })}
      />
      {errors.email && <p className="one-small-step__error">Email required</p>}
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "phone",
          className: "one-small-step__input",
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
          className: "one-small-step__input",
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
          className: "one-small-step__input",
        })}
        id="inquiryLeadType"
        {...register("inquiryLeadType")}
      >
        <option>How did you hear about us?</option>
        <option>From a client of LaunchWare</option>
        <option>From an alum of Launch Academy</option>
      </select>
      <input type="hidden" value="giantLeapInquiry" {...register("form-name")} />
      <input className="button" type="submit" disabled={isLoading} value="Send message" />
    </form>
  );

  return (
    <section className="one-small-step">
      <div className="one-small-step__contents">
        <StaticImage
          alt=""
          className="one-small-step__alternate-circle"
          role="presentation"
          src="../../images/decorations/alternate_circle.png"
        />
        <div className="one-small-step__text-container">
          <Tagline tagline="Book Your Call" />
          <h2 className="one-small-step__heading">
            Stop Stressing. Start Shipping.
          </h2>
          <p className="one-small-step__text">
            Fill out the form below and tell us more about your project. We’ll get back to you
            within a business day to start making your vision a reality.
          </p>
          {isSuccess ? (
            <p className="one-small-step__text">
              Thanks for your inquiry. We'll be in touch!
            </p>
          ) : (
            formContent
          )}
        </div>
        <div className="one-small-step__image-container">
          <StaticImage
            layout="constrained"
            width={660}
            className="one-small-step__image"
            alt="Two men examining laptop screen"
            src="../../images/index/pair-examine-laptop.jpg"
          />
        </div>
      </div>
    </section>
  );
};
