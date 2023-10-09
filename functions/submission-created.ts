import { Handler } from '@netlify/functions'
import { Event } from '../function-src/activeCampaign/Event'
import { GiantLeapInquiry } from '../function-src/contact-inquiries/GiantLeapInquiry'
import { configure } from '../function-src/configure'

export const handler: Handler = async function (event, context) {
  await configure();
  const body = JSON.parse(event.body || "")
  const result = body.payload.data
  if (result["form-name"] === "giantLeapInquiry") {
    const event = new Event<GiantLeapInquiry>({
      email: result.email,
      firstName: result.firstName,
      lastName: result.lastName,
      phone: result.phone,
      eventName: "giantLeapInquiry",
      eventData: body.payload.data
    })

    await event.save()
  }
  return {
    statusCode: 201,
    body: JSON.stringify({ message: "sent" }),
  }
}
