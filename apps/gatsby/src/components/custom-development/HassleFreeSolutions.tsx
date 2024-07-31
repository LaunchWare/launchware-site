import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/hassle-free-solutions.css";

export const HassleFreeSolutions = () => (
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
      headingText="Welcome to a world of hassle-free software solutions"
      text="Picture this: your innovative idea transformed into a fully-functional, user-friendly application that not only meets your needs but also delights your end users. Sounds like a dream? With LaunchWare, it’s your new reality."
      webViewImagePosition="right"
    />
  </div>
);
