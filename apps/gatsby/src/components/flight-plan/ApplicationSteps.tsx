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
            sectionHeading: "Your software journey, simplified in three steps",
            cards: [
              {
                icon: (
                  <StaticImage
                    src="../icons/chat-icon.png"
                    alt="chat icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 1: Share your vision",
                paragraphs: [
                  "Our ‘Jobs to Be Done Workshop’ helps us understand your target audience and the unique solutions your software aims to deliver.",
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
                heading: "Step 2: Get your blueprint",
                paragraphs: [
                  "Our team crafts intuitive wireframes, clear user stories, and a strategic project plan, forming a comprehensive blueprint for your software journey.",
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
                heading: "Launch with confidence",
                paragraphs: [
                  "With a clear flight plan in hand, you can confidently embark on your software development journey, knowing your path is clear.",
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
