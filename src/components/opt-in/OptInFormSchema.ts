import { z } from "zod"

export const optInFormSchema = z.object({
  email: z.string().email()
})

export type OptInFormSchema = z.infer<typeof optInFormSchema>
