import React from "react";

import { PageProps } from "gatsby";

import { Policy } from "../components/general/Policy";
import { Layout } from "../components/layout/Layout";

function PrivacyPolicy(pageProps: PageProps) {
  return (
    <Layout location={pageProps.location} title="Privacy Policy">
      <Policy policyKey="VWpOVmNYcFVkbE5GVWpaVVEyYzlQUT09" />
    </Layout>
  );
}

export default PrivacyPolicy;
