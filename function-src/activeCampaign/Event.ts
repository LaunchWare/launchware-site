import got, { Got } from "got"
import { Configuration } from "./Configuration";
import { Contact } from "./Contact";

export class Event {
  email: string;
  eventName: string;
  private gotClient?: Got
  private configuration: Configuration

  constructor({ email, eventName }) {
    this.email = email
    this.eventName = eventName
    this.configuration = new Configuration()
  }

  async save() {
    const contactResult = await this.syncContact()
    const formData = new FormData()
    return this.getClient().post("event", {
      form: {
        key: this.configuration.eventKey || "",
        actid: this.configuration.actId || "",
        event: this.eventName,
        visit: JSON.stringify({ email: this.email })
      }
    })
  }

  private syncContact() {
    const contact = new Contact({ email: this.email })
    return contact.create()
  }

  private getClient() {
    if (!this.gotClient) {
      this.gotClient = got.extend({
        prefixUrl: "https://trackcmp.net/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "accept": "application/json",
          "Api-Token": this.configuration.apiKey || ""
        },
        responseType: "json"
      })
    }
    return this.gotClient
  }
}
