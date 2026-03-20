import type { Handler, HandlerEvent } from "@netlify/functions"

const handler: Handler = async (event: HandlerEvent) => {
  const { email } = JSON.parse(event.body || "{}")

  if (!email) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        error: "Required properties not specified: email",
      }),
    }
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY

  if (!publicationId || !apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "BeeHiiv not configured" }),
    }
  }

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email }),
    },
  )

  if (!response.ok) {
    const errorBody = await response.text()
    console.error(`BeeHiiv API error: ${response.status} ${errorBody}`)
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: "Failed to subscribe" }),
    }
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ success: true }),
  }
}

export { handler }
