import { ApiClient } from "../getApiClient"

export const useApiClient = () => {
  return ApiClient.getInstance().client
}
