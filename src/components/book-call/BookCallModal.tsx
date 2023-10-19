import React, { RefObject } from "react";

import "@launchware/replicator/dist/css/Modal/modal.css";
import "./css/book-call-modal.css";
import { StaticImage } from "gatsby-plugin-image";

export const BookCallModal = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => (
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
      <div ref={divRef} className="calendly-inline-widget" data-auto-load="false" />
    </div>
  </div>
);
