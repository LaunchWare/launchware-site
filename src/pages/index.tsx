import React from "react";

import { PageProps } from "gatsby";

import { Exasperation } from "../components/index-page/Exasperation";
import { IndexBestProducts } from "../components/index-page/IndexBestProducts";
import { IndexBuiltForYou } from "../components/index-page/IndexBuiltForYou";
import { IndexHero } from "../components/index-page/IndexHero";
import { IndexLaunched } from "../components/index-page/IndexLaunched";
import { IndexLogos } from "../components/index-page/IndexLogos";
import { IndexOneSmallStep } from "../components/index-page/IndexOneSmallStep";
import { IndexPartnership } from "../components/index-page/IndexPartnership";
import { IndexShipFaster } from "../components/index-page/IndexShipFaster";
import { IndexStopStressing } from "../components/index-page/IndexStopStressing";
import { MoreMomentum } from "../components/index-page/MoreMomentum";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

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
      <IndexStopStressing />
      <IndexBestProducts />
      <IndexOneSmallStep />
    </Layout>
  );
};

export default IndexPage;
