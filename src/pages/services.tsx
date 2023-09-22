import React from "react";
import { PageProps } from "gatsby";

import { EnoughOnYourPlate } from "../components/services-page/EnoughOnYourPlate";
import { ProductListing } from "../components/services-page/ProductListing";
import { TrustedByTheBest } from "../components/services-page/TrustedByTheBest";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

const ServicesPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Services">
      <ProductListing />
      <EnoughOnYourPlate />
      <TrustedByTheBest />
    </Layout>
  );
};

export default ServicesPage;
