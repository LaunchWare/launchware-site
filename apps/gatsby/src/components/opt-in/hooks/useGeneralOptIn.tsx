import { useMutation } from "@tanstack/react-query";

import { useApiClient } from "../../../api-client/hooks/useApiClient";
import { OptInFormSchema } from "../OptInFormSchema";

export const useGeneralOptIn = () => {
  const client = useApiClient();
  return useMutation({
    mutationFn: (optInData: OptInFormSchema) => client.post("/general-opt-in", optInData),
  });
};
