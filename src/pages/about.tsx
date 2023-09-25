import React from "react";
import { PageProps } from "gatsby";

import { AboutHero } from "../components/about-page/AboutHero";
import { BetterWay } from "../components/about-page/BetterWay";
import { Leaders } from "../components/about-page/Leaders";
import { SoftwareExistsTo } from "../components/about-page/SoftwareExistsTo";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const AboutPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="About">
      <AboutHero />
      <SoftwareExistsTo />
      <BetterWay />
      <Leaders />
    </Layout>
  );
};

export default AboutPage;
