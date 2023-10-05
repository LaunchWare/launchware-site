import React, { RefObject } from "react";

import decorativeSquare from "../../assets/images/decorative_square.png";
import "@launchware/replicator/dist/css/Modal/modal.css";
import "./css/book-call-modal.css";

export const BookCallModal = ({ divRef }: { divRef: RefObject<HTMLDivElement> }) => (
  <div className="book-call">
    <img
      alt=""
      className="book-call__decorative-square"
      role="presentation"
      src={decorativeSquare}
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
