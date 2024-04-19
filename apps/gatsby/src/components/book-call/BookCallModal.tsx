import React, { RefObject } from "react";

import "@launchware/replicator/dist/css/Modal/modal.css";
import "./css/book-call-modal.css";
import { StaticImage } from "gatsby-plugin-image";
import { BookCallEmbed } from "./BookCallEmbed";
import { UsercentricsProvider } from "../usercentrics/UsercentricsProvider";

export const BookCallModal = ({ enabled = true }: { enabled?: boolean }) => (
  <div className="book-call">
    <StaticImage
      alt=""
      className="book-call__decorative-square"
      src="../../images/decorations/decorative_square.png"
    />
    <div className="book-call__text-container">
      <h2 className="book-call__heading">Book Your Launch Call</h2>
      <p className="book-call__text">Let's chat about your custom software development project.</p>
    </div>
    <div className="book-call__widget-container">
      <UsercentricsProvider>
        <BookCallEmbed enabled={enabled} />
      </UsercentricsProvider>
    </div>
  </div>
);
