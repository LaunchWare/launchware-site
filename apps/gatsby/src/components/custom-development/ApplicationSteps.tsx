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
            sectionHeading: "Your dream application, just three steps away",
            cards: [
              {
                icon: (
                  <StaticImage
                    src="../icons/chat-icon.png"
                    alt="chat icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 1: Let’s chat",
                paragraphs: ["Schedule a call with our founder to discuss your vision and goals."],
              },
              {
                icon: (
                  <StaticImage
                    src="../icons/clipboard-icon.png"
                    alt="clipboard icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 2: Plan your success",
                paragraphs: [
                  "We’ll put together a tailored proposal, detailing the scope, timeline, and cost of your project.",
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
                heading: "Step 3: Sit back and watch your vision come alive",
                paragraphs: [
                  "Our dedicated team will take the reins, keeping you in the loop at every stage of the development process.",
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
