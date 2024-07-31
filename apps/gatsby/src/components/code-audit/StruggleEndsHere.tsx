import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";

import "./css/no-more-juggling.css";

export const StruggleEndsHere = () => (
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
    headingText="Your software struggles end here"
    text="We know the frustration of dealing with software projects that veer off course. Delayed timelines, budget overruns, and subpar functionality can feel like a tangled mess, hindering your progress."
    webViewImagePosition="left"
  />
);
