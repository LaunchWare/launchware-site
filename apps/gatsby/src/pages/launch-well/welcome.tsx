import React from "react"

import { PageProps } from "gatsby"

import "../../css/index.css"

import { Layout } from "../../components/layout/Layout"
import { HeadDefaults } from "../../components/layout/HeadDefaults"
import { WelcomeHero } from "../../components/launch-well/WelcomeHero"
import { WhyPrd } from "../../components/launch-well/WhyPrd"
import { Resources } from "../../components/launch-well/Resources"
import { WelcomeCta } from "../../components/launch-well/WelcomeCta"

export const Head = () => (
  <>
    <title>Welcome to Launch Well | LaunchWare</title>
    <meta
      name="description"
      content="Your PRD template and walkthrough from Launch Well. Get a battle-tested Product Requirements Document template to ship better software."
    />
    <meta name="robots" content="noindex" />
    <HeadDefaults />
  </>
)

const WelcomePage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Welcome to Launch Well">
      <WelcomeHero />
      <WhyPrd />
      <Resources />
      <WelcomeCta />
    </Layout>
  )
}

export default WelcomePage
