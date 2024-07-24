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
function PrivacyPolicy(pageProps: PageProps) {
  return (
    <Layout location={pageProps.location} title="Privacy Policy">
      <Policy policyKey="VTJWVGJXWlNkbkpIT1VoemQxRTlQUT09" />
    </Layout>
  );
}

export default PrivacyPolicy;
