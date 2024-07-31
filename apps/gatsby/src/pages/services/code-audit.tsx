import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../../components/layout/Layout.tsx";
import { HeadDefaults } from "../../components/layout/HeadDefaults.tsx";
import { CodeAuditHero } from "../../components/code-audit/CodeAuditHero.tsx";
import { HeroBullets } from "../../components/code-audit/HeroBullets.tsx";
import { StruggleEndsHere } from "../../components/code-audit/StruggleEndsHere.tsx";
import { SeamlessSoftware } from "../../components/code-audit/SeamlessSoftware.tsx";
import { InformedDecisions } from "../../components/code-audit/InformedDecisions.tsx";
import { ExpertGuidance } from "../../components/code-audit/ExpertGuidance.tsx";
import { ApplicationSteps } from "../../components/code-audit/ApplicationSteps.tsx";
import { EmbraceLaunchWare } from "../../components/code-audit/EmbraceLaunchWare.tsx";
import { CallToAction } from "../../components/code-audit/CallToAction.tsx";

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
      <CodeAuditHero />
      <HeroBullets />
      <StruggleEndsHere />
      <SeamlessSoftware />
      <InformedDecisions />
      <ExpertGuidance />
      <ApplicationSteps />
      <EmbraceLaunchWare />
      <CallToAction />
    </Layout>
  );
};

export default CodeAuditPage;
