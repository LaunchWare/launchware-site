type ServiceInfo = {
  id: string;
  name: string;
  consent: {
    status: boolean;
  };
};

export type UC_UI = {
  getServicesBaseInfo: () => ServiceInfo[];
  showSecondLayer: () => void;
  acceptService: (serviceId: string, consentType: "explicit" | "implicit") => void;
  isInitialized: () => boolean;
};

declare global {
  interface Window {
    UC_UI: UC_UI;
  }
}

export class UsercentricsService {
  static acceptService(serviceId: string, consentType: "explicit" | "implicit") {
    if (!this.isBrowser) {
      return;
    }

    window.UC_UI?.acceptService(serviceId, consentType);
  }

  static getServicesBaseInfo() {
    if (!this.isBrowser) {
      return [];
    }

    return window.UC_UI?.getServicesBaseInfo() || [];
  }

  static isInitialized() {
    return this.isBrowser && window.UC_UI?.isInitialized();
  }

  private static get isBrowser() {
    return typeof window !== "undefined";
  }
}
