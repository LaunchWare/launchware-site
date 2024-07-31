import React from "react";
import { TextImageBlock } from "../general/TextImageBlock.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/we-are-with-you.css";

export const Expertise = () => (
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
      headingText="Expertise meets approachability"
      text="We get it. The world of software development can feel like uncharted territory. That’s why at LaunchWare, we’re dedicated to guiding you through the process, making it approachable and easy to understand. We’re committed to demystifying the process and empowering you to make informed decisions every step of the way."
      webViewImagePosition="right"
    />
  </div>
);
