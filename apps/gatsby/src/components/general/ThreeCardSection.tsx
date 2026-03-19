import React, { FC } from "react";

import "./css/three-card-section.css";

interface ThreeCardProps {
  iconsInline?: boolean;
  sectionContents: {
    sectionHeading?: string;
    cards: {
      heading: string;
      icon: JSX.Element;
      paragraphs?: string[];
    }[];
  };
}

export const ThreeCardSection: FC<ThreeCardProps> = ({
  sectionContents: { sectionHeading, cards },
  iconsInline,
}) => {
  console.log(iconsInline);

  return (
    <>
      {sectionHeading && (
        <div className="three-card-section__heading-container">
          <h2 className="three-card-section__heading">{sectionHeading}</h2>
        </div>
      )}
      <div className="three-card-section__cards-container">
        {cards.map((card, index) => (
          <div className="three-card-section__card" key={index}>
            {iconsInline ? (
              <InlineIconHeading icon={card.icon} heading={card.heading} />
            ) : (
              <>
                <div className="three-card-section__image-container">{card.icon}</div>
                <h2 className="three-card-section__card-heading">{card.heading}</h2>
              </>
            )}
            {card.paragraphs &&
              card.paragraphs.map((paragraph) => (
                <p className="three-card-section__text" key={card.heading}>
                  {paragraph}
                </p>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

const InlineIconHeading: FC<{ icon: JSX.Element; heading: string }> = ({ icon, heading }) => (
  <div className="three-card-section__inline-icon-heading">
    <div className="three-card-section__image-container">{icon}</div>
    <h2 className="three-card-section__card-heading">{heading}</h2>
  </div>
);
