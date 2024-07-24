import React from "react";

import { PageProps } from "gatsby";

import { Policy } from "../components/general/Policy";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";

export function Head() {
  return (
    <HeadDefaults />
  );
}
function PrivacyPolicy({location}: PageProps) {
  return (
    <Layout location={location} title="Privacy Policy">
      <Policy policyKey="UTB0MFNFcGFka2t3TjNneVJuYzlQUT09" />
    </Layout>
  );
}

export default PrivacyPolicy;
