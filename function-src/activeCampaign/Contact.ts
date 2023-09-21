import { Configuration } from "./Configuration";
import got, { Got, Response } from "got"

export class Contact {
  email: string;
  configuration: Configuration;
  private gotClient: Got

  constructor({ email }) {
    this.email = email;
    this.configuration = new Configuration();
  }

  async create() {
    return this.getClient().post("contacts", {
      json: { contact: { email: this.email } }
    }).then((resp: Response) => {
      console.log(resp)
      return true
    }).catch((error) => {
      if (error.response?.statusCode === 422) {
        console.error(error.response.body)
        return true
      }
      else {
        throw error
      }
    })
  }

  private getClient() {
    if (!this.gotClient) {
      this.gotClient = got.extend({
        prefixUrl: this.configuration.baseUri,
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "Api-Token": this.configuration.apiKey || ""
        },
        responseType: "json"
      })
    }
    return this.gotClient
  }
}
