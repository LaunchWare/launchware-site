import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/are-we-a-fit.css";

export const AreWeAFit = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="are-we-a-fit">
      <div className="are-we-a-fit__contents">
        <div className="are-we-a-fit__text-container">
          <h2 className="are-we-a-fit__heading">Are we a fit?</h2>
          <p className="are-we-a-fit__text">
            LaunchWare seeks partners, not transactions, and the best partnerships are forged on the
            basis of common ideals and beliefs. When it comes to software, we&#8217;re
            unapologetically focused on finding partnerships that work for both sides of the
            relationship, where both parties are intensely focused on building remarkable software.
          </p>
          <p className="are-we-a-fit__text">
            If you&#8217;re wanting a relationship with a software team where we work
            collaboratively and iteratively to build the right software product for the people you
            serve, you&#8217;re in the right place.
          </p>
          <p className="are-we-a-fit__text">
            We&#8217;re eager to collaborate with clients passionate about deploying impactful
            software products using a methodical, data-driven approach.
          </p>
          <p className="are-we-a-fit__text">
            Here&#8217;s what makes you an ideal partner for LaunchWare:
          </p>
          <ul className="are-we-a-fit__list">
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You embrace Agile principles, valuing adaptability, early delivery, and ongoing
                improvement.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You&#8217;re enthusiastic about co-creating a shared vision for your product, rather
                than handing off a list of requirements.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You understand the value of transparent communication, be it daily stand-ups or
                sprint reviews.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You&#8217;re willing to be actively involved in the development process, from
                planning to deployment.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You&#8217;re searching for a long-lasting partnership, not just a one-off gig.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You appreciate the importance of data-driven decision-making in software
                development.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You understand the importance of risk management; although we can&#8217;t foresee
                all obstacles, we can certainly prepare and adapt.
              </span>
            </li>
            <li className="are-we-a-fit__list-item">
              <FontAwesomeIcon className="are-we-a-fit__check" icon={faCheck} />
              <span>
                You recognize that every member of the development team, including stakeholders,
                brings valuable insights to the table.
              </span>
            </li>
          </ul>
          <p className="are-we-a-fit__text">
            Let&#8217;s build something great together, and have some fun in the process. If our
            values resonate with yours, we&#8217;d love to hear from you.
          </p>
          <input
            className="are-we-a-fit__button button"
            onClick={clickHandler}
            type="button"
            value="Get my quick process review"
          />
        </div>
        <div className="are-we-a-fit__image-container">
          <StaticImage
            layout="constrained"
            width={580}
            className="are-we-a-fit__image"
            alt="Man looking at blue wall with sticky notes"
            src="../../images/services/sticky-notes-on-blue.jpg"
          />
        </div>
      </div>
      {modal}
    </section>
  );
};
