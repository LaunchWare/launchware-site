import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";

import "./css/no-more-juggling.css";

export const NoMoreJuggling = () => (
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
    headingText="No More Juggling Between Recruitment and Development"
    text="Ever felt like you’re juggling too many balls trying to transform your software ideas into reality? You’re not alone. Many tech leaders are grappling with finding the right team, juggling project timelines, and staying true to their vision. It can feel like an uphill battle, and we get it."
    webViewImagePosition="left"
  />
);
