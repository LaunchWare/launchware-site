import React from "react";
import { Policy } from "../components/general/Policy";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { HeadDefaults } from "../components/layout/HeadDefaults";

export const Head = () => {
  return <>
    <HeadDefaults />
  </>
}
const PrivacyPolicy = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Privacy Policy">
      <Policy policyKey="UTB0MFNFcGFka2t3TjNneVJuYzlQUT09" />
    </Layout>
  );
};

export default PrivacyPolicy;
