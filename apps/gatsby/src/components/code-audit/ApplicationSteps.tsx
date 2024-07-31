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
            sectionHeading: "Achieve optimized software in three simple steps",
            cards: [
              {
                icon: (
                  <StaticImage
                    src="../icons/chat-icon.png"
                    alt="chat icon"
                    className="application-steps__image"
                  />
                ),
                heading: "Step 1: Book Your Code Audit",
                paragraphs: [
                  "Book a convenient time to chat with our founder about the application you want to review and if a code audit is a fit, we’ll get you scheduled for your custom code audit.",
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
                heading: "Step 2: Get a detailed analysis",
                paragraphs: [
                  "Our team dives deep into your software, uncovering bottlenecks and opportunities.",
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
                heading: "Step 3: Take action",
                paragraphs: [
                  "Receive your detailed roadmap, complete with clear insights and actionable steps.",
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
