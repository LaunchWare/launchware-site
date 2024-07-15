import { ApiClient } from "../getApiClient";

export const useApiClient = () => ApiClient.getInstance().client;
