import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { ContactInquiryFormValues } from "../models/ContactInquiryShapes";

export const usePostContactInquiry = () =>
  useMutation({
    mutationFn: async (data: ContactInquiryFormValues) => {
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
