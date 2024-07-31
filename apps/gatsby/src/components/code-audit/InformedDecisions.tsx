import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/partner-with-experts.css";

export const InformedDecisions = () => (
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
      headingText="Make informed decisions with clear insights"
      text="We don’t just identify bottlenecks in your software, we illuminate the path forward. Our code audits equip you with a detailed roadmap to optimize your software, giving you the clarity you need to make confident decisions."
      webViewImagePosition="left"
    />
  </div>
);
