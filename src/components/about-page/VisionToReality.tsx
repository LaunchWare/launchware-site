import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { ThreeCardSection } from "../general/ThreeCardSection";
import { HiFiveIcon } from "../icons/HiFiveIcon";
import { LaptopStackIcon } from "../icons/LaptopStackIcon";
import { SendMessagesIcon } from "../icons/SendMessagesIcon";
import "./css/vision-to-reality.css";
import { StaticImage } from "gatsby-plugin-image";

export const VisionToReality = () => {
  const { modal, clickHandler } = useBookCallModal();

  const sectionContents = {
    sectionHeading: "Make your vision a reality.",
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
    <div className="vision-to-reality">
      <div className="vision-to-reality__contents">
        <StaticImage
          alt=""
          className="vision-to-reality__decorative-circle"
          src="../../images/decorations/alternate_circle.png"
        />
        <ThreeCardSection sectionContents={sectionContents} />
        <button className="vision-to-reality__button button" type="button" onClick={clickHandler}>
          Book my launch call
        </button>
      </div>
      {modal}
    </div>
  );
};
