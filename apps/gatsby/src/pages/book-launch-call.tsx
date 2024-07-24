import React from "react";

import { PageProps } from "gatsby";

import { BookCallEmbed } from "../components/book-call/BookCallEmbed";
import { HeadDefaults } from "../components/layout/HeadDefaults";
import { Layout } from "../components/layout/Layout";
import { UsercentricsProvider } from "../components/usercentrics/UsercentricsProvider";

export function Head() {
  return (
    <HeadDefaults />
  );
}

function BookLaunchCall({location}: PageProps) {
  return (
    <Layout location={location} title="Book My Launch Call">
      <div className="parent-section">
        <div>
          <h2 className="book-call__heading">Book Your Launch Call</h2>
          <p className="book-call__text">
            Let&rsquo;s chat about your custom software development project.
          </p>
          <UsercentricsProvider>
            <BookCallEmbed />
          </UsercentricsProvider>
        </div>
      </div>
    </Layout>
  );
}

export default BookLaunchCall;
