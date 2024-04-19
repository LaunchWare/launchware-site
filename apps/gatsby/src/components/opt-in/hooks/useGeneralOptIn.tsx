import { useMutation } from "@tanstack/react-query";
import { OptInFormSchema } from "../OptInFormSchema";
import { useApiClient } from "../../../api-client/hooks/useApiClient";

export const useGeneralOptIn = () => {
  const client = useApiClient()
  return useMutation({
    mutationFn: (optInData: OptInFormSchema) => { return client.post("/general-opt-in", optInData) }
  })
}
