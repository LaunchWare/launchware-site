import React, { useEffect } from "react"

import TagManager from 'react-gtm-module'

export const TrackingCodes = () => {
  const tagManagerArgs = {
    gtmId: "GTM-WGNPB4RJ"
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <></>
}
