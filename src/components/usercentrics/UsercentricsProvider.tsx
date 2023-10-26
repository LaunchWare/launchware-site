import React, { ReactNode, useCallback } from "react"
import { useEffect, useState } from "react"
import { UsercentricsService } from "../../services/UsercentricsService"

export type UCContext = {
  isInitialized: boolean
  isClientSide: boolean
  hasServiceConsent: null | undefined | ((name: string) => boolean)
  acceptService: null | undefined | ((name: string) => Promise<void>)
}

export const UsercentricsContext = React.createContext<UCContext>({
  isInitialized: false,
  isClientSide: false,
  hasServiceConsent: null,
  acceptService: null
})

export const UsercentricsProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isClientSide] = useState(typeof window !== "undefined")

  useEffect(() => {
    if (isClientSide) {
      // check to see if usercentrics is already initialized
      if (window.UC_UI && window.UC_UI.isInitialized()) {
        setIsInitialized(true)
      }
      // listen for initialization if not
      else {
        window.addEventListener('UC_UI_INITIALIZED', () => {
          setIsInitialized(true)
        }, { once: true })
      }

    }
  }, [isClientSide, isInitialized])

  const acceptService = useCallback(async (name: string) => {
    if (!isInitialized || !isClientSide) {
      return
    }
    else {
      const service = UsercentricsService.getServicesBaseInfo().find((service) => service.name === name)
      if (!!service && !!service.consent) {
        await UsercentricsService.acceptService(service.id, "explicit")
      }
    }
  }, [isInitialized, isClientSide])

  const hasServiceConsent = (name: string) => {
    if (!isInitialized || !isClientSide) {
      return false
    }
    else {
      const service = UsercentricsService.getServicesBaseInfo().find((service) => service.name === name)
      if (!!service && !!service.consent) {
        return service.consent.status
      }
      return false
    }
  }

  return <UsercentricsContext.Provider value={{
    isInitialized,
    isClientSide,
    hasServiceConsent,
    acceptService
  }}
  > {children}</UsercentricsContext.Provider>
}
