import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThreeCardSection } from "../general/ThreeCardSection.tsx";

import "./css/highlight-bullets.css";

export const HeroBullets = () => {
  const sectionContents = {
    cards: [
      {
        heading: "Turn your ideas into applications",
        icon: (
          <FontAwesomeIcon height="36px" className="highlight-bullets__icon" icon={faCheckCircle} />
        ),
      },
      {
        heading: "Tailored software solutions",
        icon: (
          <FontAwesomeIcon height="36px" className="highlight-bullets__icon" icon={faCheckCircle} />
        ),
      },
      {
        heading: "Dedicated team of experts",
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
