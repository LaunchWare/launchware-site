import React from "react";
import { PageProps } from "gatsby";

import { AboutHero } from "../components/about-page/AboutHero";
import { OurBeliefs } from "../components/about-page/OurBeliefs";
import { VisionToReality } from "../components/about-page/VisionToReality";
import { WhySoftwareExists } from "../components/about-page/WhySoftwareExists";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const AboutPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="About">
      <AboutHero />
      <WhySoftwareExists />
      <OurBeliefs />
      <VisionToReality />
    </Layout>
  );
};

export default AboutPage;
