import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { useScorecardOptIn } from "./hooks/useScorecardOptIn";
import { scorecardOptInSchema, ScorecardOptInSchema } from "./models/ScorecardOptInSchema";
import { getFieldClassName } from "../general/services/getFieldClassName";
import { useNotifications } from "../../hooks/useNotifications";
import "./css/scorecard-form.css";

export const ScorecardOptInForm = ({ className = "" }: { className?: string }) => {
  const { addNotification } = useNotifications();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ScorecardOptInSchema>({
    resolver: zodResolver(scorecardOptInSchema),
  });

  const {
    mutate: postScorecardOptIn,
    error: backendErrors,
    isSuccess,
    isLoading,
  } = useScorecardOptIn();

  const onSubmit: SubmitHandler<ScorecardOptInSchema> = (formValues) => {
    postScorecardOptIn(formValues, {
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

  const blockClassName = "scorecard-form";
  const errorClassPrefix = `${blockClassName}__input`;

  const successContent = "Thank you! Check your inbox for the scorecard."

  const formContent = (
    <form
      className={`scorecard-form__form ${className}`}
      data-netlify="true"
      name="scorecardOptIn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        autoFocus
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "firstName",
          className: "scorecard-form__input",
        })}
        placeholder="Your first name"
        type="text"
        id="firstName"
        {...register("firstName")}
      />
      {errors.firstName && <p className="scorecard-form__error">First name required</p>}
      <input
        className={getFieldClassName({
          errorClassPrefix,
          errors,
          fieldName: "email",
          className: "scorecard-form__input",
        })}
        placeholder="Your email"
        type="text"
        id="email"
        {...register("email")}
      />
      {errors.email && <p className="scorecard-form__error">Email required</p>}
      <input type="hidden" value="scorecardOptIn" {...register("form-name")} />
      <input className="button" type="submit" disabled={isLoading} value="Download the Scorecard" />
    </form>
  );

  return (isSuccess ? successContent : formContent)
};
