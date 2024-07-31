import React from "react";
import { ThreeCardSection } from "../general/ThreeCardSection.tsx";
import { StaticImage } from "gatsby-plugin-image";

import "./css/application-steps.css";
import { useBookCallModal } from "../book-call/hooks/useBookCallModal.tsx";

export const ApplicationSteps = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="application-steps">
      {modal}
      <div className="application-steps__contents">
        <ThreeCardSection
          sectionContents={{
            sectionHeading: "Three Simple Steps to Enhanced Capabilities",
            cards: [
              {
                icon: (
                  <StaticImage
                    src="../icons/chat-icon.png"
                    alt="chat icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 1: Let’s Talk",
                paragraphs: [
                  "Kick off your journey with a Launch Call with our founder, where you discuss your project requirements and team dynamics.",
                ],
              },
              {
                icon: (
                  <StaticImage
                    src="../icons/clipboard-icon.png"
                    alt="clipboard icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 2: Perfect Match",
                paragraphs: [
                  "We handpick the right professionals, ensuring a blend of technical expertise and cultural fit.",
                ],
              },
              {
                icon: (
                  <StaticImage
                    src="../icons/rocket-blastoff-icon.png"
                    alt="rocket blastoff icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 3: Seamless Integration",
                paragraphs: [
                  "Our team becomes part of yours, understanding your processes and contributing to your project success.",
                ],
              },
            ],
          }}
        />
        <button className="better-way__button button" type="button" onClick={clickHandler}>
          Book my launch call
        </button>
      </div>
    </div>
  );
};
