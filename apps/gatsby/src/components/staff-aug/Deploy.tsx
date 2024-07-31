import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/partner-with-experts.css";

export const Deploy = () => (
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
      headingText="Deploy the perfect fit for your tech team"
      text="With LaunchWare, staff augmentation goes beyond mere headcount. Our meticulous matching process ensures that you’re paired with professionals who are a technical and cultural fit, bringing their unique expertise to your projects. With a keen understanding of your processes and goals, our professionals seamlessly integrate into your team, contributing to your success from day one."
      webViewImagePosition="left"
    />
  </div>
);
