import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Event } from "../function-src/activeCampaign/Event";
import { configure } from "../function-src/configure";
import { AxiosError } from "axios"

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // your server-side functionality
  await configure()
  const { email } = JSON.parse(event.body || "{}")

  if (!email) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        error: "Required properties not specified: email"
      })
    }
  }
  else {
    const activeCampaignEvent = new Event<{}>({
      email,
      eventName: "generalOptIn"
    })

    await activeCampaignEvent.save()

    return {
      statusCode: 201,
      body: JSON.stringify({
        success: true
      })
    }
  }
};

export { handler };
