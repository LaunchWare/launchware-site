import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThreeCardSection } from "../general/ThreeCardSection.tsx";

import "./css/highlight-bullets.css";

export const HeroBullets = () => {
  const sectionContents = {
    cards: [
      {
        heading: "Bolster your tech team",
        icon: (
          <FontAwesomeIcon height="36px" className="highlight-bullets__icon" icon={faCheckCircle} />
        ),
      },
      {
        heading: "Nail every deadline",
        icon: (
          <FontAwesomeIcon height="36px" className="highlight-bullets__icon" icon={faCheckCircle} />
        ),
      },
      {
        heading: "Prevent burnout",
        icon: (
          <FontAwesomeIcon
            height="36px"
            width="36px"
            className="highlight-bullets__icon"
            icon={faCheckCircle}
          />
        ),
      },
    ],
  };

  return (
    <div className="highlight-bullets">
      <div className="highlight-bullets__contents">
        <ThreeCardSection sectionContents={sectionContents} iconsInline={true} />
      </div>
    </div>
  );
};
