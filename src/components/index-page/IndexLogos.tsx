import React from "react";

import "./css/index-logos.css";
import { StaticImage } from "gatsby-plugin-image";

export const IndexLogos = () => (
  <section className="index-logos">
    <ul className="index-logos__contents">
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/ezCater_Logo.jpg" alt="ezCater Logo" />
      </li>
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/Optum.jpeg" alt="Optum Logo" />
      </li>
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/better-manager.png" alt="Better Manager Logo" />
      </li>
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/meetcaregivers-logo.png" alt="MeetCaregivers Logo" />
      </li>
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/iclei-logo.png" alt="ICLEI Logo" />
      </li>
      <li>
        <StaticImage height={124} src="../../images/portfolio-logos/we-are-rosie-logo.jpg" alt="We Are Rosie Logo" />
      </li>
    </ul>
  </section>
);
