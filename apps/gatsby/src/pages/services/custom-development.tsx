import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../../components/layout/Layout";
import { HeadDefaults } from "../../components/layout/HeadDefaults";
import { CustomDevelopmentHero } from "../../components/custom-development/CustomDevelopmentHero.tsx";
import { HeroBullets } from "../../components/custom-development/HeroBullets.tsx";
import { NoMoreJuggling } from "../../components/custom-development/NoMoreJuggling.tsx";
import { HassleFreeSolutions } from "../../components/custom-development/HassleFreeSolutions.tsx";
import { PartnerWithExperts } from "../../components/custom-development/PartnerWithExperts.tsx";
import { WeAreWithYou } from "../../components/custom-development/WeAreWithYou.tsx";
import { Testimonials } from "../../components/custom-development/Testimonials.tsx";
import { ApplicationSteps } from "../../components/custom-development/ApplicationSteps.tsx";
import { EmbraceLaunchWare } from "../../components/custom-development/EmbraceLaunchWare.tsx";
import { CustomDevelopmentCallToAction } from "../../components/custom-development/CustomDevelopmentCallToAction.tsx";

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
const CustomDevelopmentPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Custom Development">
      <CustomDevelopmentHero />
      <HeroBullets />
      <NoMoreJuggling />
      <HassleFreeSolutions />
      <PartnerWithExperts />
      <WeAreWithYou />
      <ApplicationSteps />
      <Testimonials />
      <EmbraceLaunchWare />
      <CustomDevelopmentCallToAction />
    </Layout>
  );
};

export default CustomDevelopmentPage;
