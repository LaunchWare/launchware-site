import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { ScorecardOptInSchema } from "../models/ScorecardOptInSchema";

export const useScorecardOptIn = () =>
  useMutation({
    mutationFn: async (data: ScorecardOptInSchema) => {
      const resp = await axios.post(`/`, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return resp.data;
    },
    onError: (err: Error | AxiosError) => {
      // eslint-disable-next-line no-console
      console.error(err);
    },
  });
