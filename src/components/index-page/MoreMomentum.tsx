import React from "react";

import decorativeSquare from "../../assets/images/decorative_square.png";
import { ThreeCardSection } from "../general/ThreeCardSection";
import "./css/more-momentum.css";

export const MoreMomentum = () => {
  const sectionContents = {
    sectionHeading: "Build Your Application with More Momentum and Less Stress",
    cards: [
      {
        heading: "Request your launch call",
        paragraphs: [
          "Let’s hop on a call to discuss what challenges your facing, and how we can help. It takes 30 minutes, and we’ll clearly identify next steps to advance your project.",
        ],
      },
      {
        heading: "Revive your project",
        paragraphs: [
          "Together, we’ll identify the most important next steps to get your project back on track. Any big or complex endeavor can be broken down into small steps, so we’ll collaboratively map out the all-important first leap.",
        ],
      },
      {
        heading: "Reach your goals",
        paragraphs: [
          "When your product solves the right problems and is built to scale, the sky is the limit for where it will take your organization.",
        ],
      },
    ],
  };

  return (
    <section className="more-momentum">
      <div className="more-momentum__contents">
        <img
          alt=""
          className="more-momentum__decorative-square"
          role="presentation"
          src={decorativeSquare}
        />
        <ThreeCardSection sectionContents={sectionContents} />
      </div>
    </section>
  );
};
