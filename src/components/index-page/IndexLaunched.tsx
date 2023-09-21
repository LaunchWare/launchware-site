import { Link } from "gatsby";
import React from "react";

import arrowForward from "../../assets/images/arrow_forward.png";
import "./css/index-launched.css";

export const IndexLaunched = () => (
  <section className="index-launched">
    <div className="index-launched__contents">
      <div className="index-launched__heading-container">
        <h2 className="index-launched__heading">
          Go from stuck and stalled out to{" "}
          <span className="index-launched__uppercase">launched</span>
        </h2>
      </div>
      <div className="index-launched__columns-container">
        <div className="index-launched__column">
          <div className="index-launched__image-container">
            <img className="index-launched__image" src="https://placehold.co/378x330" />
          </div>
          <h3 className="index-launched__column-heading">
            Get a proven and transparent plan to take you where you want to go
          </h3>
          <p className="index-launched__text">
            You have a vision, and you need a partnership that can bring a clear path to get your
            software launched.
          </p>
          <p className="index-launched__text">
            Get the clarity you need, every step of the way, with a partner that prioritizes
            communicating.
          </p>
          <p className="index-launched__text">
            <Link className="index-launched__learn-more" to="#">
              <span>Learn More</span>
              <img className="index-launched__arrow-forward" src={arrowForward} />
            </Link>
          </p>
        </div>
        <div className="index-launched__column">
          <div className="index-launched__image-container">
            <img className="index-launched__image" src="https://placehold.co/378x330" />
          </div>
          <h3 className="index-launched__column-heading">
            Skip the technical guesswork with an experienced team
          </h3>
          <p className="index-launched__text">
            You don’t have time to experiment with talent that might meet your needs.
          </p>
          <p className="index-launched__text">
            Work with a partner that brings decades of software development experience.
          </p>
          <p className="index-launched__text">
            <Link className="index-launched__learn-more" to="#">
              <span>Learn More</span>
              <img className="index-launched__arrow-forward" src={arrowForward} />
            </Link>
          </p>
        </div>
        <div className="index-launched__column">
          <div className="index-launched__image-container">
            <img className="index-launched__image" src="https://placehold.co/378x330" />
          </div>
          <h3 className="index-launched__column-heading">
            Scale easily without hiring and managing engineers
          </h3>
          <p className="index-launched__text">
            You need flexibility and room to grow, without the typical HR hassle.
          </p>
          <p className="index-launched__text">
            Engage with a partner that can adapt to your organization’s changing needs.
          </p>
          <p className="index-launched__text">
            <Link className="index-launched__learn-more" to="#">
              <span>Learn More</span>
              <img className="index-launched__arrow-forward" src={arrowForward} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
