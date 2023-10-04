import React from "react";
import { PageProps } from "gatsby";

import "../css/index.css";

import { AreWeAFit } from "../components/services-page/AreWeAFit";
import { EnoughOnYourPlate } from "../components/services-page/EnoughOnYourPlate";
import { ProductListing } from "../components/services-page/ProductListing";
import { ServicesStopStressing } from "../components/services-page/ServicesStopStressing";
import { TrustedByTheBest } from "../components/services-page/TrustedByTheBest";
import { Layout } from "../components/layout/Layout";

const ServicesPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Services">
      <ProductListing />
      <EnoughOnYourPlate />
      <TrustedByTheBest />
      <AreWeAFit />
      <ServicesStopStressing />
    </Layout>
  );
};

export default ServicesPage;
