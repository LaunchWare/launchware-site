import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../../components/layout/Layout.tsx";
import { HeadDefaults } from "../../components/layout/HeadDefaults.tsx";
import { FlightPlanHero } from "../../components/flight-plan/FlightPlanHero.tsx";
import { HeroBullets } from "../../components/flight-plan/HeroBullets.tsx";
import { IdeasTakeFlight } from "../../components/flight-plan/IdeasTakeFlight.tsx";
import { AlignedSoftware } from "../../components/flight-plan/AlignedSoftware.tsx";
import { TailoredFlightPlan } from "../../components/flight-plan/TailoredFlightPlan.tsx";
import { Expertise } from "../../components/flight-plan/Expertise.tsx";
import { ApplicationSteps } from "../../components/flight-plan/ApplicationSteps.tsx";
import { ExperienceAdvantage } from "../../components/flight-plan/ExperienceAdvantage.tsx";
import { CallToAction } from "../../components/flight-plan/CallToAction.tsx";

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
      <FlightPlanHero />
      <HeroBullets />
      <IdeasTakeFlight />
      <AlignedSoftware />
      <TailoredFlightPlan />
      <Expertise />
      <ApplicationSteps />
      <ExperienceAdvantage />
      <CallToAction />
    </Layout>
  );
};

export default CodeAuditPage;
