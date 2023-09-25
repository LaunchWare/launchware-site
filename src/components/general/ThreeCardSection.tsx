import React, { FC } from "react";

import "./css/three-card-section.css";

interface PropTypes {
  sectionContents: {
    sectionHeading: string;
    cards: {
      heading: string;
      paragraphs: string[];
    }[];
  };
}

export const ThreeCardSection: FC<PropTypes> = ({ sectionContents: { sectionHeading, cards } }) => {
  const cardParagraphs = cards.map((card) =>
    card.paragraphs.map((paragraph) => (
      <p className="three-card-section__text" key={card.heading}>
        {paragraph}
      </p>
    )),
  );

  return (
    <>
      <div className="three-card-section__heading-container">
        <h2 className="three-card-section__heading">{sectionHeading}</h2>
      </div>
      <div className="three-card-section__cards-container">
        <div className="three-card-section__card">
          <div className="three-card-section__image-container">
            <img className="three-card-section__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="three-card-section__card-heading">{cards[0].heading}</h2>
          {cardParagraphs[0]}
        </div>
        <div className="three-card-section__card">
          <div className="three-card-section__image-container">
            <img className="three-card-section__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="three-card-section__card-heading">{cards[1].heading}</h2>
          {cardParagraphs[1]}
        </div>
        <div className="three-card-section__card">
          <div className="three-card-section__image-container">
            <img className="three-card-section__image" src="https://placehold.co/104x104" />
          </div>
          <h2 className="three-card-section__card-heading">{cards[2].heading}</h2>
          {cardParagraphs[2]}
        </div>
      </div>
    </>
  );
};
