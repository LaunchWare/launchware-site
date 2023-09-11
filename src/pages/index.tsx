import React from "react"
import { LaunchWareLogo } from "../components/LaunchWareLogo"
import { PageProps } from "gatsby"

import "../css/index.css"

const IndexPage = (pageProps: PageProps) => {
  return (<div className="coming-soon-notice">
    <div className="content-container">
      <LaunchWareLogo />
      <h1>Coming Soon</h1>
      <a href="/blog">Archive Blog Content</a>
    </div>
  </div>)
}

export default IndexPage
