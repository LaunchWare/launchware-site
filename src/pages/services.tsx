import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../components/layout/Layout";
import "../css/index.css";
import { ProductListing } from "../components/services-page/ProductListing";

const ServicesPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Services">
      <ProductListing />
    </Layout>
  );
};

export default ServicesPage;
