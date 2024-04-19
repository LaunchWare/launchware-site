import got, { Got } from "got"
import { Configuration } from "./Configuration";
import { Contact } from "./Contact";

export class Event<EventData> {
  email: string;
  eventName: string;
  private gotClient?: Got
  private configuration: Configuration
  private eventData: EventData | {}
  private firstName?: string
  private lastName?: string
  private phone?: string


  constructor({ email, eventName, eventData, firstName, lastName, phone }: {
    email: string,
    eventName: string,
    eventData?: EventData,
    firstName?: string,
    lastName?: string,
    phone?: string
  }) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone

    this.eventName = eventName
    this.configuration = new Configuration()
    this.eventData = eventData || {}
  }

  async save() {
    await this.syncContact()
    return this.getClient().post("event", {
      form: {
        key: this.configuration.eventKey || "",
        actid: this.configuration.actId || "",
        event: this.eventName,
        eventdata: JSON.stringify(this.eventData),
        visit: JSON.stringify({ email: this.email })
      }
    })
  }

  private syncContact() {
    const contact = new Contact({ email: this.email, firstName: this.firstName, lastName: this.lastName, phone: this.phone })
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
