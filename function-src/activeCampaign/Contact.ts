import { Configuration } from "./Configuration";
import got, { Got, Response } from "got"

export class Contact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;

  configuration: Configuration;
  private gotClient: Got

  constructor({ email, firstName, lastName, phone }:
    { email: string, firstName?: string, lastName?: string, phone?: string }) {

    this.email = email;
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
    this.configuration = new Configuration();
  }

  get postJson() {
    return {
      contact: {
        email: this.email, firstName: this.firstName, lastName: this.lastName, phone: this.phone
      }
    }
  }

  async create() {
    return this.getClient().post("contacts", {
      json: this.postJson
    }).then((resp: Response) => {
      console.log(resp)
      return true
    }).catch((error) => {
      if (error.response?.statusCode === 422) {
        return this.sync().then(() => true).catch((error) => { throw error })
      }
      else {
        throw error
      }
    })
  }

  sync() {
    return this.getClient().post("contact/sync", {
      json: this.postJson
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
