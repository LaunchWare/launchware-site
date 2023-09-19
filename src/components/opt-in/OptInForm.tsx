import React, { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import "../../css/forms.css"
import { OptInFormSchema, optInFormSchema } from "./OptInFormSchema"
import { useGeneralOptIn } from "./hooks/useGeneralOptIn"
import { Spinner } from "../spinner/Spinner"

export const OptInForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<OptInFormSchema>({
    mode: "onBlur",
    resolver: zodResolver(optInFormSchema)
  })

  const { mutate, isSuccess, isLoading } = useGeneralOptIn()

  const onSubmit = (data: OptInFormSchema) => {
    mutate(data)
  }

  const formContent = <>
    <div className="footer_opt-in-email-container">
      <input type="email" disabled={isLoading} autoComplete="off" placeholder="Email" className="footer_opt-in-email" {...register("email")} />
      {isLoading && <Spinner className="footer_spinner" />}
    </div>
    {errors.email && (
      <p className="error">{errors.email?.message}</p>
    )}
    <input type="submit" disabled={isLoading} className="button button__full-width footer_button" value="Submit" data-lpignore="true" />
    <p className="footer_opt-in-terms">By submitting this form, you confirm that you have read and agree to the Terms & Conditions.</p>
  </>

  const successContent = <p>Thanks! We'll be in touch.</p>

  return (<form className="footer_group footer_group__last" noValidate={true} onSubmit={handleSubmit(onSubmit)}>
    <h3 className="footer_headline">Stay in our orbit</h3>
    {isSuccess ? successContent : formContent}
  </form>)
}
