import React from "react";
import { PageProps } from "gatsby";

import { ContactUsChat } from "../components/contact-page/ContactUsChat";
import { ContactUsHero } from "../components/contact-page/ContactUsHero";
import { GetInTouch } from "../components/contact-page/GetInTouch";
import { MediaInquiries } from "../components/contact-page/MediaInquiries";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

export const Head = () => (
  <>
    <title>Contact LaunchWare: Your Software Development Partner in Boston</title>
    <meta
      name="description"
      content="Ready to elevate your software? Reach out to LaunchWare, Boston’s trusted software consultants. We're here to assist and guide you every step of the way."
    />
    <meta
      name="keywords"
      content="contact LaunchWare, Boston software consultants, software development inquiry, LaunchWare contact"
    />
  </>
);

const AboutPage = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Contact Us">
      <ContactUsHero />
      <ContactUsChat />
      <MediaInquiries />
      <GetInTouch />
    </Layout>
  );
};

export default AboutPage;
