import { useMutation } from "@tanstack/react-query"
import { ScorecardOptInSchema } from "../models/ScorecardOptInSchema"

export const useScorecardOptIn = () => {
  return useMutation({
    mutationFn: async (data: ScorecardOptInSchema) => {
      const resp = await fetch(`/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!resp.ok) throw new Error(`Request failed: ${resp.status}`)
      return resp.text()
    },
    onError: (err: Error) => {
      console.error(err)
    },
  })
}
