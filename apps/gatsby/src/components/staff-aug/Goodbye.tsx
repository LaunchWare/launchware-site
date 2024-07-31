import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";

import "./css/no-more-juggling.css";

export const Goodbye = () => (
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
    headingText="Say Goodbye to Burnout and Bottlenecks"
    text="Your tech team is talented, but they’re also stretched thin. Juggling multiple projects and tight deadlines can quickly lead to burnout, impacting both the quality of work and the well-being of your team. The trick is to find the right resources to lighten the load without causing disruption."
    webViewImagePosition="left"
  />
);
