import React, { FC } from "react";

import "./css/three-card-section.css";

interface ThreeCardProps {
  sectionContents: {
    sectionHeading: string;
    cards: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export const ThreeCardSection: FC<ThreeCardProps> = ({
  sectionContents: { sectionHeading, cards },
}) => {
  const cardList = cards.map((card) => (
    <div className="three-card-section__card">
      <div className="three-card-section__image-container">
        <img className="three-card-section__image" src="https://placehold.co/104x104" />
      </div>
      <h2 className="three-card-section__card-heading">{card.heading}</h2>
      {card.paragraphs.map((paragraph) => (
        <p className="three-card-section__text" key={card.heading}>
          {paragraph}
        </p>
      ))}
    </div>
  ));

  return (
    <>
      <div className="three-card-section__heading-container">
        <h2 className="three-card-section__heading">{sectionHeading}</h2>
      </div>
      <div className="three-card-section__cards-container">{cardList}</div>
    </>
  );
};
