import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/we-are-with-you.css";

export const WeAreWithYou = () => (
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
      headingText="We’re With You, Every Step of the Way"
      text="At LaunchWare, we’re not just about delivering top-notch code. We’re here to guide you through every step of the process, ensuring that your journey from concept to code is as smooth as possible. We pride ourselves on clear communication, actionable plans, and a steadfast commitment to making your software vision a reality."
      webViewImagePosition="right"
    />
  </div>
);
