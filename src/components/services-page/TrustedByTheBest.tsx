import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Tagline } from "../general/Tagline";

import decorativeSquare from "../../images/decorations/decorative_square.png";
import "./css/trusted-by-the-best.css";

export const TrustedByTheBest = () => (
  <section className="trusted-by-the-best">
    <div className="trusted-by-the-best__contents">
      <img
        alt=""
        className="trusted-by-the-best__decorative-square"
        role="presentation"
        src={decorativeSquare}
      />
      <div className="trusted-by-the-best__text-container">
        <div className="trusted-by-the-best__heading-container">
          <Tagline tagline="Testimonials" />
          <h3 className="trusted-by-the-best__heading">Trusted by the Best</h3>
        </div>
        <ul className="trusted-by-the-best__cards-container">
          <li className="trusted-by-the-best__card">
            <p className="trusted-by-the-best__text">
              &#8220;They showed up and did exactly what I thought they were going to do and
              I&#8217;m thrilled.&#8221;
            </p>
            <div className="trusted-by-the-best__name">
              <UserCircleIcon className="trusted-by-the-best__icon" />
              <div>
                <p className="trusted-by-the-best__semibold">Catherine Headen</p>
                <p>Director, Product &amp; Design</p>
              </div>
            </div>
          </li>
          <li className="trusted-by-the-best__card">
            <p className="trusted-by-the-best__text">
              &#8220;A strong sense of vision about the process [without being] religious about any
              specific aspect. They have a strong point of view while remaining open to change their
              minds.” &#8221;
            </p>
            <div className="trusted-by-the-best__name">
              <UserCircleIcon className="trusted-by-the-best__icon" />
              <div>
                <p className="trusted-by-the-best__semibold">David Evans</p>
                <p>VP of Product</p>
              </div>
            </div>
          </li>

          {/* <li className="trusted-by-the-best__card">

            <div>
              <UserCircleIcon className="" />
              <p className="trusted-by-the-best__card-name"></p>

            </div>
          </li>
          <li className="trusted-by-the-best__card">

            <div>
              <UserCircleIcon className="" />
              <p className="trusted-by-the-best__card-name"></p>

            </div>
          </li> */}
        </ul>
      </div>
    </div>
  </section>
);
