import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";

import "./css/no-more-juggling.css";

export const IdeasTakeFlight = () => (
  <TextImageBlock
    image={
      <StaticImage
        layout="constrained"
        className="contact-us-chat__image"
        alt="Pair of hands typing on a laptop"
        width={680}
        src="../../images/contact/hands-and-laptop.jpg"
      />
    }
    headingText="Your great ideas deserve to take flight"
    text="In the bustling world of technology, innovative ideas often get lost in the shuffle. The path to turning a brilliant concept into a successful software product can feel overwhelming, riddled with technical jargon and unforeseen hurdles. Without a clear flight plan, your great ideas may never reach the skies they’re meant to soar in."
    webViewImagePosition="left"
  />
);
