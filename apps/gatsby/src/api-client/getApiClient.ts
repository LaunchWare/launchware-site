import axios, { AxiosInstance } from "axios";

export class ApiClient {
  private _client: AxiosInstance;
  static instance: ApiClient;

  private constructor() {
    this._client = axios.create({
      baseURL: "/.netlify/functions",
    });
  }

  static getInstance() {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  get client() {
    return this._client;
  }
}
