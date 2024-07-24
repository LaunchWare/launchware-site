import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/why-software-exists.css";

export function WhySoftwareExists() {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="why-software-exists">
      <div className="why-software-exists__contents">
        <div className="why-software-exists__image-container">
          <StaticImage
            layout="constrained"
            width={690}
            className="why-software-exists__image"
            alt="Woman in striped shirt thinking"
            src="../../images/about/thinking-woman.jpg"
          />
        </div>

        <div className="why-software-exists__text-container">
          <h2 className="why-software-exists__heading">
            Software exists to make work easier, not harder.
          </h2>
          <p className="why-software-exists__text">
            When a project is floundering, all we see is missed opportunity.
          </p>
          <p className="why-software-exists__text">
            If you&rsquo;re like us, you&rsquo;ve seen this story play out: a project begins with high
            aspirations and enthusiasm, and then tragically grinds to a halt when it&rsquo;s time to start
            building.
          </p>
          <ul className="why-software-exists__list">
            <li className="why-software-exists__list-item">
              The project doesn&rsquo;t have clear executive sponsorship, so it lacks the resources it
              needs.
            </li>
            <li className="why-software-exists__list-item">
              The Product Manager and the Director of Engineering don&rsquo;t get along, so they can&rsquo;t
              communicate in a way to get the work done.
            </li>
            <li className="why-software-exists__list-item">
              The COO is too busy to define what they want in the latest version, so the definition
              of requirements is stalled out.
            </li>
            <li className="why-software-exists__list-item">
              There are so many bugs in production, the development team can&rsquo;t work on new features.
            </li>
            <li className="why-software-exists__list-item">
              The release schedule is a moving target, and it&rsquo;s impossible to plan strategically
              around getting the software out the door.
            </li>
          </ul>
          <p className="why-software-exists__text">
            These types of symptoms point to a larger diagnosis:{" "}
            <span className="why-software-exists__semibold">
              an ineffective software development process.
            </span>
          </p>
          <button
            className="why-software-exists__button button"
            type="button"
            onClick={clickHandler}
          >
            Book my launch call
          </button>
        </div>
      </div>
      {modal}
    </div>
  );
}
