import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { GetInTouchFormValues } from "../models/GetInTouchFormShapes";

export const usePostGeneralInquiry = () => {
  return useMutation(
    async (data: GetInTouchFormValues) => {
      const resp = await axios.post(`/`, data, {
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
