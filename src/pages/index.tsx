import React from "react";
import { LaunchWareLogo } from "../components/layout/LaunchWareLogo";
import { PageProps } from "gatsby";

import "../css/index.css";
import { Layout } from "../components/layout/Layout";

const IndexPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Home">
      <div className="coming-soon-notice">
        <div className="content-container">
          <LaunchWareLogo />
          <h1>Coming Soon</h1>
          <a href="/blog">Archive Blog Content</a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
