import React from "react";

import { PageProps } from "gatsby";

import "../css/index.css";

import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";
import { AreWeAFit } from "../components/services-page/AreWeAFit";
import { EnoughOnYourPlate } from "../components/services-page/EnoughOnYourPlate";
import { ProductListing } from "../components/services-page/ProductListing";
import { ServicesHero } from "../components/services-page/ServicesHero";
import { ServicesStopStressing } from "../components/services-page/ServicesStopStressing";
import { TrustedByTheBest } from "../components/services-page/TrustedByTheBest";

export function Head() {
  return <>
    <title>LaunchWare Services: Custom Development & Staff Augmentation</title>
    <meta
      name="description"
      content="From rescuing struggling projects to providing top-tier staff at every level, LaunchWare is your trusted partner in software development and staff augmentation."
    />
    <meta
      name="keywords"
      content="software staff augmentation, software development services, project rescue, junior developers, mid-level developers, senior developers, LaunchWare services"
    />
    <HeadDefaults />
  </>
}
function ServicesPage(pageProps: PageProps) {
  return (
    <Layout location={pageProps.location} title="Services">
      <ServicesHero />
      <ProductListing />
      <EnoughOnYourPlate />
      <TrustedByTheBest />
      <AreWeAFit />
      <ServicesStopStressing />
    </Layout>
  );
}

export default ServicesPage;
