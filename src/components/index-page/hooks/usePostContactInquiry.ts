import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ContactInquiryFormValues } from "../models/ContactInquiryShapes";

export const usePostContactInquiry = () => {
  return useMutation(
    async (data: ContactInquiryFormValues) => {
      const resp = await axios.post(`localhost/api/v1`, data);
      return resp.data;
    },
    {
      onError: (err: Error | AxiosError) => {
        console.error(err);
      },
    },
  );
};
