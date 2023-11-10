import { Handler } from '@netlify/functions'
import { Event } from '../function-src/activeCampaign/Event'
import { configure } from '../function-src/configure'
import { ScorecardOptInSchema } from "../src/components/contact-page/models/ScorecardOptInSchema"

export const handler: Handler = async function (event, context) {
  await configure();
  const body = JSON.parse(event.body || "")
  console.log(body)
  const result = body.payload.data
  console.log(result["form-name"])
  if (body?.payload["form_name"] === "scorecardOptIn") {
    console.log("attempting to save")
    const event = new Event<ScorecardOptInSchema>({
      email: result.email,
      firstName: result.firstName,
      eventData: body.payload.data,
      eventName: "scorecardOptIn"
    })

    await event.save()
  }
  return {
    statusCode: 201,
    body: JSON.stringify({ message: "sent" }),
  }
}
