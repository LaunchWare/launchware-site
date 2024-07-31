import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/hassle-free-solutions.css";

export const SeamlessSoftware = () => (
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
      headingText="Envision a world of seamless software"
      text="Imagine your software humming along like a finely tuned engine, each line of code contributing to a perfectly synchronized rhythm. With LaunchWare’s code audits, that vision becomes your reality."
      webViewImagePosition="right"
    />
  </div>
);
