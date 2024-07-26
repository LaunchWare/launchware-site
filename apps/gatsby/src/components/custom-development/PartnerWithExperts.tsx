import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/partner-with-experts.css";

export const PartnerWithExperts = () => (
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
      headingText="Discover the Ease of Partnering with Experts"
      text="With LaunchWare, you gain more than a service provider; you gain a partner who speaks your language. We handle the intricacies of the development process, transforming your ideas into functional, user-centric software."
      webViewImagePosition="left"
    />
  </div>
);
