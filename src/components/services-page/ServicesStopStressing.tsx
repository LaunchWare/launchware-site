import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { ThreeCardSection } from "../general/ThreeCardSection";
import decorativeSquare from "../../assets/images/decorative_square.png";
import "./css/services-stop-stressing.css";

export const ServicesStopStressing = () => {
  const { modal, clickHandler } = useBookCallModal();

  const sectionContents = {
    sectionHeading: "Stop Stressing. Start Shipping.",
    cards: [
      {
        heading: "Define",
        paragraphs: [
          "Let’s hop on a call to discuss what challenges your facing, and how we can help. It takes 30 minutes, and we’ll clearly identify next steps to advance your project.",
        ],
      },
      {
        heading: "Develop",
        paragraphs: [
          "Let’s take your idea or project and make it real. Build a product that grows with you.",
          "Let building your scalable and maintainable application be our thing so, that you can focus on advancing your goals. ",
        ],
      },
      {
        heading: "Deploy",
        paragraphs: [
          "Put what you’ve built in the hands of your stakeholders. Work with a team with decades of experience delivering applications.",
          "Together, we’ll build, measure, and learn to improve the product together.",
        ],
      },
    ],
  };

  return (
    <section className="services-stop-stressing">
      <div className="services-stop-stressing__contents">
        <img
          alt=""
          className="services-stop-stressing__decorative-square"
          role="presentation"
          src={decorativeSquare}
        />
        <ThreeCardSection sectionContents={sectionContents} />;
        <button className="services-stop-stressing__button button" type="button" onClick={clickHandler}>
          Book my launch call
        </button>
      </div>
      {modal}
    </section>
  );
};
