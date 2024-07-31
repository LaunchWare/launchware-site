import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../../components/layout/Layout.tsx";
import { HeadDefaults } from "../../components/layout/HeadDefaults.tsx";
import { Hero } from "../../components/staff-aug/Hero.tsx";
import { HeroBullets } from "../../components/staff-aug/HeroBullets.tsx";
import { Goodbye } from "../../components/staff-aug/Goodbye.tsx";
import { HarnessPower } from "../../components/staff-aug/HarnessPower.tsx";
import { Deploy } from "../../components/staff-aug/Deploy.tsx";
import { Together } from "../../components/staff-aug/Together.tsx";
import { ApplicationSteps } from "../../components/staff-aug/ApplicationSteps.tsx";
import { LaunchWareAdvantage } from "../../components/staff-aug/LaunchWareAdvantage.tsx";
import { CallToAction } from "../../components/staff-aug/CallToAction.tsx";

export const Head = () => (
  <>
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
);
const CodeAuditPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Custom Development">
      <Hero />
      <HeroBullets />
      <Goodbye />
      <HarnessPower />
      <Deploy />
      <Together />
      <ApplicationSteps />
      <LaunchWareAdvantage />
      <CallToAction />
    </Layout>
  );
};

export default CodeAuditPage;
