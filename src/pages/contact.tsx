import React from "react";
import { PageProps } from "gatsby";

import { ContactUsChat } from "../components/contact-page/ContactUsChat";
import { ContactUsHero } from "../components/contact-page/ContactUsHero";
import { GetInTouch } from "../components/contact-page/GetInTouch";
import { MediaInquiries } from "../components/contact-page/MediaInquiries";
import { Layout } from "../components/layout/Layout";
import "../css/index.css";

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
