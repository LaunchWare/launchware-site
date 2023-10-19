import { z } from "zod";

export const scorecardOptInSchema = z.object({
  firstName: z.string().trim().nonempty(),
  email: z.string().email(),
  "form-name": z.string().default("scorecardOptIn"),
});

export type ScorecardOptInSchema = z.infer<typeof scorecardOptInSchema>;
