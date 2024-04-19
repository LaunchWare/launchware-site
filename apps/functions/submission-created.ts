import { Handler } from "@netlify/functions";
import { Event } from "./src/activeCampaign/Event";
import { configure } from "./src/configure";
import { ScorecardOptInSchema } from "../gatsby/src/components/contact-page/models/ScorecardOptInSchema";

export const handler: Handler = async function (event) {
  await configure();
  const body = JSON.parse(event.body || "");
  const result = body.payload.data;
  if (body?.payload["form_name"] === "scorecardOptIn") {
    const event = new Event<ScorecardOptInSchema>({
      email: result.email,
      firstName: result.firstName,
      eventData: body.payload.data,
      eventName: "scorecardOptIn",
    });

    await event.save();
  }
  return {
    statusCode: 201,
    body: JSON.stringify({ message: "sent" }),
  };
};
