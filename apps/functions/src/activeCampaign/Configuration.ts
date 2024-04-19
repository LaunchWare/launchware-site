export class RequiredConfigurationNotDefinedError extends Error {
  constructor(missingValues: string[]) {
    super(`ActiveCampaign is missing the following configuration variables: ${missingValues.join(",")}`)
  }
}
export class Configuration {
  constructor() {
    let missingValues: string[] = []
    const requiredConfigs = {
      actId: this.actId,
      eventKey: this.eventKey,
      apiKey: this.apiKey,
      subdomain: this.subdomain
    }

    Object.keys(requiredConfigs).forEach((key) => {
      if (!requiredConfigs[key] || requiredConfigs[key] === "") {
        missingValues = [
          ...missingValues,
          key
        ]
      }
    })

    if (missingValues.length > 0) {
      throw new RequiredConfigurationNotDefinedError(missingValues)
    }
  }
  get actId() {
    return process.env.ACT_ID
  }

  get eventKey() {
    return process.env.AC_EVENT_KEY
  }

  get apiKey() {
    return process.env.AC_API_KEY
  }

  get subdomain() {
    return process.env.AC_SUBDOMAIN
  }

  get baseUri() {

    return `https://${this.subdomain}.api-us1.com/api/3/`
  }
}
