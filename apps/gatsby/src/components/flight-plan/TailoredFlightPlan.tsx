import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/partner-with-experts.css";

export const TailoredFlightPlan = () => (
  <div className="partner-with-experts">
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
      headingText="A tailored flight plan for your software journey"
      text="At LaunchWare, we’re not just your software developers; we’re your co-pilots. We start with our unique ‘Jobs to Be Done Workshop’, where we define your target audience and pinpoint their needs. From there, we craft a flight plan that includes intuitive wireframes, user stories, and a strategic project plan that builds your path to success."
      webViewImagePosition="left"
    />
  </div>
);
