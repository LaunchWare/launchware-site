import React from "react";

import { PageProps } from "gatsby";

import "../css/index.css";

import { Exasperation } from "../components/index-page/Exasperation";
import { IndexBuiltForYou } from "../components/index-page/IndexBuiltForYou";
import { IndexHero } from "../components/index-page/IndexHero";
import { IndexLaunched } from "../components/index-page/IndexLaunched";
import { IndexLogos } from "../components/index-page/IndexLogos";
import { IndexPartnership } from "../components/index-page/IndexPartnership";
import { IndexScorecard } from "../components/index-page/IndexScorecard";
import { IndexShipFaster } from "../components/index-page/IndexShipFaster";
import { MoreMomentum } from "../components/index-page/MoreMomentum";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";

export function Head() {
  return <>
    <title>LaunchWare: Custom Software Development in Boston, MA</title>
    <meta
      name="description"
      content="LaunchWare offers unparalleled software solutions tailored to your needs. Our deep technical expertise combined with a partnership approach ensures top-notch results. Discover our difference today."
    />
    <meta
      name="keywords"
      content="custom software development Boston, software consultancy, LaunchWare, technical experts, software solutions, Boston software development"
    />
    <HeadDefaults />
  </>
}
function IndexPage({location}: PageProps) {
  return (
    <Layout location={location} title="Home">
      <IndexHero />
      <Exasperation />
      <IndexLaunched />
      <IndexPartnership />
      <IndexLogos />
      <IndexBuiltForYou />
      <IndexShipFaster />
      <MoreMomentum />
      <IndexScorecard />
    </Layout>
  );
}

export default IndexPage;
