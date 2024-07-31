import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/hassle-free-solutions.css";

export const HarnessPower = () => (
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
      headingText="Harness the power of skilled staff augmentation"
      text="Imagine a world where you can plug in the perfect team member, just when you need them. With LaunchWare’s staff augmentation, you’re not just filling a seat; you’re adding a new dimension to your team, enhancing capabilities, and ensuring your projects hit the mark every time."
      webViewImagePosition="right"
    />
  </div>
);
