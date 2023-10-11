import React from "react";
import { Policy } from "../components/general/Policy";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout/Layout";

const PrivacyPolicy = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Privacy Policy">
      <Policy policyKey="VTJWVGJXWlNkbkpIT1VoemQxRTlQUT09" />
    </Layout>
  );
};

export default PrivacyPolicy;
