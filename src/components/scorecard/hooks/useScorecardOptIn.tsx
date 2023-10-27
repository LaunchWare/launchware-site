import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ScorecardOptInSchema } from "../models/ScorecardOptInSchema";

export const useScorecardOptIn = () => {
  return useMutation(
    async (data: ScorecardOptInSchema) => {
      const resp = await axios.post(`/`, data, {
        baseURL: "/",
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
