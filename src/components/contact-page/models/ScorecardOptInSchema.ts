import { z } from "zod";

export const scorecardOptInSchema = z.object({
  firstName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  "form-name": z.string().default("scorecardOptIn"),
});

export type ScorecardOptInSchema = z.infer<typeof scorecardOptInSchema>;
