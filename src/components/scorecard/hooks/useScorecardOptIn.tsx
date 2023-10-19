import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useApiClient } from "../../../api-client/hooks/useApiClient";
import { ScorecardOptInSchema } from "../models/ScorecardOptInSchema";

export const useScorecardOptIn = () => {
  const client = useApiClient();

  return useMutation(
    async (data: ScorecardOptInSchema) => {
      const resp = await client.post(`/general-opt-in`, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return resp.data;
    },
    {
      onError: (err: Error | AxiosError) => {
        console.error(err);
      },
    },
  );
};
