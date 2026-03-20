const BASE_URL = "/.netlify/functions"

export class ApiClient {
  static instance: ApiClient

  static getInstance() {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  get client() {
    return {
      post: async (url: string, data: unknown) => {
        const response = await fetch(`${BASE_URL}${url}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      },
    }
  }
}
