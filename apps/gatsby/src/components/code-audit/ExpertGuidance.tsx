import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/we-are-with-you.css";

export const ExpertGuidance = () => (
  <div className="we-are-with-you">
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
      headingText="Expert guidance, in plain language"
      text="We believe that you don’t need to be a tech whizz to understand your software. Our team speaks your language, simplifying complex tech terms and guiding you every step of the way."
      webViewImagePosition="right"
    />
  </div>
);
