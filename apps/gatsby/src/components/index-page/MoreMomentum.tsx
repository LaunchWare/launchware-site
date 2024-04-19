import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { ThreeCardSection } from "../general/ThreeCardSection";
import { HiFiveIcon } from "../icons/HiFiveIcon";
import { LaptopStackIcon } from "../icons/LaptopStackIcon";
import { SendMessagesIcon } from "../icons/SendMessagesIcon";
import decorativeSquare from "";
import "./css/more-momentum.css";
import { StaticImage } from "gatsby-plugin-image";

export const MoreMomentum = () => {
  const { modal, clickHandler } = useBookCallModal();

  const sectionContents = {
    sectionHeading: "Build Your Application with More Momentum and Less Stress",
    cards: [
      {
        heading: "Request your launch call",
        icon: <SendMessagesIcon width="104" />,
        paragraphs: [
          "Let’s hop on a call to discuss what challenges your facing, and how we can help. It takes 30 minutes, and we’ll clearly identify next steps to advance your project.",
        ],
      },
      {
        heading: "Revive your project",
        icon: <LaptopStackIcon width="104" />,
        paragraphs: [
          "Together, we’ll identify the most important next steps to get your project back on track. Any big or complex endeavor can be broken down into small steps, so we’ll collaboratively map out the all-important first leap.",
        ],
      },
      {
        heading: "Reach your goals",
        icon: <HiFiveIcon width="104" />,
        paragraphs: [
          "When your product solves the right problems and is built to scale, the sky is the limit for where it will take your organization.",
        ],
      },
    ],
  };

  return (
    <div className="more-momentum">
      {modal}
      <div className="more-momentum__contents">
        <StaticImage
          alt=""
          className="more-momentum__decorative-square"
          src="../../images/decorations/decorative_square.png"
        />
        <ThreeCardSection sectionContents={sectionContents} />
        <button className="more-momentum__button button" type="button" onClick={clickHandler}>
          Book My Launch Call
        </button>
      </div>
    </div>
  );
};
