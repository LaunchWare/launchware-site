import React, { useEffect, useRef, useState } from "react";
import { PageProps } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { companyContactInformation } from "../configuration/companyContactInformation";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { BookCallEmbed } from "../components/book-call/BookCallEmbed";
import { UsercentricsProvider } from "../components/usercentrics/UsercentricsProvider";

export const Head = () => {
  return (
    <>
      <HeadDefaults />
    </>
  );
};

const BookLaunchCall = (pageProps: PageProps) => {
  return (
    <Layout location={pageProps.location} title="Book My Launch Call">
      <div className="parent-section">
        <div>
          <h2 className="book-call__heading">Book Your Launch Call</h2>
          <p className="book-call__text">
            Let's chat about your custom software development project.
          </p>
          <UsercentricsProvider>
            <BookCallEmbed />
          </UsercentricsProvider>
        </div>
      </div>
    </Layout>
  );
};

export default BookLaunchCall;
