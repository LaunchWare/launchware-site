import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/we-are-with-you.css";

export const Together = () => (
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
      headingText="We’re in This Together"
      text="Bringing in external help can feel like a leap of faith, but at LaunchWare, we’re all about partnership. We understand your needs, share your goals, and work with you to achieve them. With transparent communication and a commitment to your success, we’re not just another service provider - we’re an extension of your team."
      webViewImagePosition="right"
    />
  </div>
);
