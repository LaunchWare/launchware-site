import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/software-exists-to.css";

export const SoftwareExistsTo = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="software-exists-to">
      <div className="software-exists-to__contents">
        <div className="software-exists-to__image-container">
          <img className="software-exists-to__image" src="https://placehold.co/800x948" />
        </div>

        <div className="software-exists-to__text-container">
          <h2 className="software-exists-to__heading">
            Software exists to make work easier, not harder.
          </h2>
          <p className="software-exists-to__text">
            When a project is floundering, all we see is missed opportunity.
          </p>
          <p className="software-exists-to__text">
            If you're like us, you've seen this story play out: a project begins with high
            aspirations and enthusiasm, and then tragically grinds to a halt when it's time to start
            building.
          </p>
          <ul className="software-exists-to__list">
            <li className="software-exists-to__list-item">
              The project doesn't have clear executive sponsorship, so it lacks the resources it
              needs.
            </li>
            <li className="software-exists-to__list-item">
              The Product Manager and the Director of Engineering don't get along, so they can't
              communicate in a way to get the work done.
            </li>
            <li className="software-exists-to__list-item">
              The COO is too busy to define what they want in the latest version, so the definition
              of requirements is stalled out.
            </li>
            <li className="software-exists-to__list-item">
              There are so many bugs in production, the development team can't work on new features.
            </li>
            <li className="software-exists-to__list-item">
              The release schedule is a moving target, and it's impossible to plan strategically
              around getting the software out the door.
            </li>
          </ul>
          <p className="software-exists-to__text">
            These types of symptoms point to a larger diagnosis:{" "}
            <span className="software-exists-to__semibold">
              an ineffective software development process.
            </span>
          </p>
          <input
            className="software-exists-to__button button"
            onClick={clickHandler}
            type="button"
            value="Get my quick process review"
          />
        </div>
      </div>
      {modal}
    </section>
  );
};
