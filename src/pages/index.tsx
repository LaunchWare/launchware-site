import React from "react";
import { PageProps } from "gatsby";

import { IndexExasperation } from "../components/index-page/IndexExasperation";
import { IndexHero } from "../components/index-page/IndexHero";
import { LaunchWareLogo } from "../components/layout/LaunchWareLogo";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const IndexPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Home">
      <IndexHero />
      <IndexExasperation />
    </Layout>
  );
};

export default IndexPage;
