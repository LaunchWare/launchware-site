import React from "react";

import { PageProps } from "gatsby";

import "../css/index.css";

import { AboutHero } from "../components/about-page/AboutHero";
import { BetterWay } from "../components/about-page/BetterWay";
import { Leaders } from "../components/about-page/Leaders";
import { OurBeliefs } from "../components/about-page/OurBeliefs";
import { VisionToReality } from "../components/about-page/VisionToReality";
import { WhySoftwareExists } from "../components/about-page/WhySoftwareExists";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";
import { ScorecardOptInForm } from "../components/scorecard/ScorecardOptInForm";

export function Head() {
  return <>
    <title>About LaunchWare: Boston’s Premier Software Consultants</title>
    <meta
      name="description"
      content="A history rooted in deep technical expertise, transparent communication, and a unique partnership approach. Get to know LaunchWare."
    />
    <meta
      name="keywords"
      content="about LaunchWare, software consultancy Boston, technical experts, LaunchWare team, software development beliefs, LaunchWare history"
    />
    <HeadDefaults />
  </>
}

function AboutPage(pageProps: PageProps) {
  return (
    <Layout location={pageProps.location} title="About">
      <AboutHero />
      <WhySoftwareExists />
      <BetterWay />
      <Leaders />
      <OurBeliefs />
      <VisionToReality />
      <ScorecardOptInForm className="hidden" />
    </Layout>
  );
}

export default AboutPage;
