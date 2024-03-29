import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/better-way.css";

export const BetterWay = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="better-way">
      <div className="better-way__contents">
        <StaticImage
          alt=""
          className="better-way__decorative-square"
          src="../../images/decorations/decorative_square_large.png"
        />
        <div className="better-way__text-container">
          <h2 className="better-way__heading">LaunchWare has found a better way.</h2>
          <p className="better-way__text">
            Years ago, we had enough with seeing audacious visions unrealized. For the past 22
            years, we've helped dozens of people just like you cure what's ailing their software
            development process and get their software shipped.
          </p>

          <figure className="better-way__list">
            <figcaption>Imagine what's possible for your software:</figcaption>
            <ul>
              <li className="better-way__list-item">
                <FontAwesomeIcon height="1rem" className="better-way__check" icon={faCheck} />
                <span>
                  Clear, written understanding of product objectives and how it contributes to the
                  company's strategy
                </span>
              </li>
              <li className="better-way__list-item">
                <FontAwesomeIcon height="1rem" className="better-way__check" icon={faCheck} />
                <span>Regular releases every 2 weeks</span>
              </li>
              <li className="better-way__list-item">
                <FontAwesomeIcon height="1rem" className="better-way__check" icon={faCheck} />
                <span>
                  Consistent backlog refinement so that engineers have clarity on what they're
                  building
                </span>
              </li>
              <li className="better-way__list-item">
                <FontAwesomeIcon height="1rem" className="better-way__check" icon={faCheck} />
                <span>
                  Automated testing that ensures every build of your software makes its quality
                  better, not worse
                </span>
              </li>
              <li className="better-way__list-item">
                <FontAwesomeIcon height="1rem" className="better-way__check" icon={faCheck} />
                <span>
                  Well-established development milestones and an understanding of how to allocate
                  the team
                </span>
              </li>
            </ul>
          </figure>

          <p className="better-way__text">
            At LaunchWare, that's the reality we're creating for all of our clients. We're committed
            to doing the same for you, so that you can{" "}
            <span className="better-way__semibold">stop stressing and start shipping.</span>
          </p>
          <button className="better-way__button button" type="button" onClick={clickHandler}>
            Book my launch call
          </button>
        </div>
        <div className="better-way__image-container">
          <StaticImage
            layout="constrained"
            width={707}
            className="better-way__image"
            alt="Two men fist bumping with thumbs-ups"
            src="../../images/about/thumbs-up-bump.jpg"
          />
        </div>
      </div>
      {modal}
    </div>
  );
};
