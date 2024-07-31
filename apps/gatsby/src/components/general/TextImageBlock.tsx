// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./css/text-image-block.css";

type TextImageBlockProps = {
  headingText: string;
  text: string;
  image: React.ReactNode;
  webViewImagePosition: "left" | "right";
};

/*
  Creates a section with an image and text. The image can be positioned on the left or right side of the text.
  In mobile view, the image will be displayed above the text.
*/
export const TextImageBlock = ({
  headingText,
  text,
  image,
  webViewImagePosition,
}: TextImageBlockProps) => {
  const img = <div className="text-image-block__image-container">{image}</div>;

  return (
    <div className="text-image-block">
      <div className="text-image-block__image-container">
        {webViewImagePosition === "left" && img}
        <div className="text-image-block__text-contents">
          <h2 className="text-image-block__heading">{headingText}</h2>
          <p>{text}</p>
        </div>
        {webViewImagePosition === "right" && img}
      </div>
    </div>
  );
};
