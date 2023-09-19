import React from "react";
import { PageProps } from "gatsby";

import { IndexBuiltForYou } from "../components/index-page/IndexBuiltForYou";
import { IndexExasperation } from "../components/index-page/IndexExasperation";
import { IndexHero } from "../components/index-page/IndexHero";
import { IndexLaunched } from "../components/index-page/IndexLaunched";
import { IndexLogos } from "../components/index-page/IndexLogos";
import { IndexPartnership } from "../components/index-page/IndexPartnership";
import { IndexShipFaster } from "../components/index-page/IndexShipFaster";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const IndexPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Home">
      <IndexHero />
      <IndexExasperation />
      <IndexLaunched />
      <IndexPartnership />
      <IndexLogos />
      <IndexBuiltForYou />
      <IndexShipFaster />
    </Layout>
  );
};

export default IndexPage;
