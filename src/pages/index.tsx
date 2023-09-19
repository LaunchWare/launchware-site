import React from "react";
import { PageProps } from "gatsby";

import { IndexExasperation } from "../components/index-page/IndexExasperation";
import { IndexHero } from "../components/index-page/IndexHero";
import { IndexLaunched } from "../components/index-page/IndexLaunched";
import { IndexPartnership } from "../components/index-page/IndexPartnership";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const IndexPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Home">
      <IndexHero />
      <IndexExasperation />
      <IndexLaunched />
      <IndexPartnership />
    </Layout>
  );
};

export default IndexPage;
