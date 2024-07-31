import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Tagline } from "../general/Tagline";
import { StaticImage } from "gatsby-plugin-image";

import "./css/testimonials.css";

export const Testimonials = () => (
  <div className="testimonials">
    <div className="testimonials__contents">
      <StaticImage
        alt=""
        className="testimonials__decorative-square"
        src="../../images/decorations/decorative_square.png"
      />
      <div className="testimonials__text-container">
        <div className="testimonials__heading-container">
          <Tagline tagline="Testimonials" />
          <h3 className="testimonials__heading">Don't just take our word for it</h3>
        </div>
        <ul className="testimonials__cards-container">
          <li className="testimonials__card">
            <p className="testimonials__text">
              &#8220;They showed up and did exactly what I thought they were going to do and
              I&#8217;m thrilled.&#8221;
            </p>
            <div className="testimonials__name">
              <UserCircleIcon className="testimonials__icon" />
              <div>
                <p className="testimonials__semibold">Catherine Headen</p>
                <p>Director, Product &amp; Design</p>
              </div>
            </div>
          </li>
          <li className="testimonials__card">
            <p className="testimonials__text">
              &#8220;A strong sense of vision about the process [without being] religious about any
              specific aspect. They have a strong point of view while remaining open to change their
              minds.” &#8221;
            </p>
            <div className="testimonials__name">
              <UserCircleIcon className="testimonials__icon" />
              <div>
                <p className="testimonials__semibold">David Evans</p>
                <p>VP of Product</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
