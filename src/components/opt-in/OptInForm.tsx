import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import "../../css/forms.css"

const formSchema = z.object({
  email: z.string().email()
})

type FormSchema = z.infer<typeof formSchema>

export const OptInForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<FormSchema>({
    mode: "onBlur",
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormSchema) => {

  }

  return (<form className="footer_group footer_group__last" noValidate={true} onSubmit={handleSubmit(onSubmit)}>
    <h3 className="footer_headline">Stay in our orbit</h3>
    <input type="email" placeholder="Email" className="footer_opt-in-email" {...register("email")} />
    {errors.email && (
      <p className="error">{errors.email?.message}</p>
    )}
    <input type="submit" className="button button__full-width footer_button" value="Submit" data-lpignore="true" />
    <p className="footer_opt-in-terms">By submitting this form, you confirm that you have read and agree to the Terms & Conditions.</p>
  </form>)
}
