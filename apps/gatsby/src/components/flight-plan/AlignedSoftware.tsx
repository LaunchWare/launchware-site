import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/hassle-free-solutions.css";

export const AlignedSoftware = () => (
  <div className="hassle-free-solutions">
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
      headingText="Imagine your software, perfectly aligned with user needs"
      text="Visualize the successful launch of your software. Your solution doesn’t just work; it resonates with your users, solving their problems with elegance and ease. It’s a beautiful synergy of your innovative vision and their unmet needs, made possible through meticulous planning and strategic execution."
      webViewImagePosition="right"
    />
  </div>
);
