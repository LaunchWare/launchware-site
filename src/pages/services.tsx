import React from "react";
import { PageProps } from "gatsby";

import { AreWeAFit } from "../components/services-page/AreWeAFit";
import { ProductListing } from "../components/services-page/ProductListing";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";
import { ServicesStopStressing } from "../components/services-page/ServicesStopStressing";

const ServicesPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Services">
      <ProductListing />
      <AreWeAFit />
      <ServicesStopStressing />
    </Layout>
  );
};

export default ServicesPage;
