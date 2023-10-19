import React from "react";

import { PageProps } from "gatsby";

import "../css/index.css";

import { Exasperation } from "../components/index-page/Exasperation";
import { IndexScorecard } from "../components/index-page/IndexScorecard";
import { IndexBuiltForYou } from "../components/index-page/IndexBuiltForYou";
import { IndexHero } from "../components/index-page/IndexHero";
import { IndexLaunched } from "../components/index-page/IndexLaunched";
import { IndexLogos } from "../components/index-page/IndexLogos";
import { IndexPartnership } from "../components/index-page/IndexPartnership";
import { IndexShipFaster } from "../components/index-page/IndexShipFaster";
import { IndexStopStressing } from "../components/index-page/IndexStopStressing";
import { MoreMomentum } from "../components/index-page/MoreMomentum";
import { Layout } from "../components/layout/Layout";

export const Head = () => (
  <>
    <title>LaunchWare: Custom Software Development in Boston, MA</title>
    <meta
      name="description"
      content="LaunchWare offers unparalleled software solutions tailored to your needs. Our deep technical expertise combined with a partnership approach ensures top-notch results. Discover our difference today."
    />
    <meta
      name="keywords"
      content="custom software development Boston, software consultancy, LaunchWare, technical experts, software solutions, Boston software development"
    />
  </>
);
const IndexPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Home">
      <IndexHero />
      <Exasperation />
      <IndexLaunched />
      <IndexPartnership />
      <IndexLogos />
      <IndexBuiltForYou />
      <IndexShipFaster />
      <MoreMomentum />
      {/* <IndexStopStressing /> */}
      <IndexScorecard />
    </Layout>
  );
};

export default IndexPage;
