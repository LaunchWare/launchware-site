import React from "react";
import { PageProps } from "gatsby";

import { AboutHero } from "../components/about-page/AboutHero";
import { WhySoftwareExists } from "../components/about-page/WhySoftwareExists";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const AboutPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="About">
      <AboutHero />
      <WhySoftwareExists />
    </Layout>
  );
};

export default AboutPage;
