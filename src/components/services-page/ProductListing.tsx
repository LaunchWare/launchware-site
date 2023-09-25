import React from "react";

import { Link } from "gatsby";

import decorativeCircle from "../../assets/images/decorative_circle.png";
import "./css/product-listing.css";
import { useBookCallModal } from "../book-call/hooks/useBookCallModal";

export const ProductListing = () => {
  const { clickHandler, modal } = useBookCallModal();
  return (
    <>
      <section className="product-listing">
        <div className="product-listing__contents">
          <img
            alt=""
            className="product-listing__decorative-circle"
            role="presentation"
            src={decorativeCircle}
          />

          <div className="product-listing__heading-container">
            <h2 className="product-listing__heading">
              Professional development services to meet your needs
            </h2>
            <ul className="product-listing__icon-card-container">
              <li className="product-listing__icon-card">
                <img className="product-listing__icon" src="https://placehold.co/38x27" />
                <h3 className="product-listing__icon-card-heading">Code Audit</h3>
              </li>
              <li className="product-listing__icon-card">
                <img className="product-listing__icon" src="https://placehold.co/38x27" />
                <h3 className="product-listing__icon-card-heading">Flight Plan</h3>
              </li>
              <li className="product-listing__icon-card">
                <img className="product-listing__icon" src="https://placehold.co/38x27" />
                <h3 className="product-listing__icon-card-heading">Staff Augmentation</h3>
              </li>
              <li className="product-listing__icon-card">
                <img className="product-listing__icon" src="https://placehold.co/38x27" />
                <h3 className="product-listing__icon-card-heading">Custom Development</h3>
              </li>
            </ul>
          </div>

          <div className="product-listing__grid">
            <div className="product-listing__image-container">
              <img className="product-listing__image" src="https://placehold.co/585x438" />
            </div>

            <div className="product-listing__text-container">
              <div className="product-listing__card">
                <h3 className="product-listing__card-heading">Code Audit</h3>
                <p className="product-listing__text">
                  Even seasoned software teams can encounter technical roadblocks that slow down
                  innovation. Our Code Audit Engagement is designed to shine a light on those hidden
                  challenges.
                </p>
                <p className="product-listing__text">
                  Our Code Audit process thoroughly explores your codebase and analyzes the
                  processes and the team behind it. It&APOS;s more than just identifying what&APOS;s
                  wrong. It&APOS;s about understanding what you have and creating a strategy for
                  where you want to go.
                </p>
                <p className="product-listing__text">
                  Following our in-depth assessment, you're presented with a comprehensive
                  report—highlighting the bottlenecks and also offering solutions, starting with the
                  most critical areas first. With these insights, you&APOS;ll gain clarity,
                  recapture missed opportunities, and set a definitive course for success.
                </p>
                <button
                  type="button"
                  className="product-listing__button button"
                  onClick={clickHandler}
                >
                  Book my launch call
                </button>
              </div>
              <div className="product-listing__card">
                <h3 className="product-listing__card-heading">Flight Plan</h3>
                <p className="product-listing__text">
                  Business leaders brim with innovative software ideas. But it&APOS;s not easy to
                  turn a visionary idea into something your team can efficiently execute.
                </p>
                <p className="product-listing__text">
                  Enter our Flight Plan engagement—how smart leaders map out their software
                  development journey. We&APOS;ll kick things off with our 'Jobs to Be Done
                  Workshop', honing in on your target audience and the unique solutions your product
                  promises them.
                </p>
                <p className="product-listing__text">
                  From there, our seasoned team will craft intuitive wireframes, create clear user
                  stories, and lay out a strategic project plan. This blueprint will illuminate the
                  path for the initial iterations and ensure your software resonates with the
                  audience it&apos;s meant for.
                </p>
                <p className="product-listing__text">
                  For organizations wanting to make their vision for their software a reality, the
                  Flight Plan becomes an indispensable guide, ensuring a confident and impactful
                  software launch.
                </p>
                <button
                  type="button"
                  className="product-listing__button button"
                  onClick={clickHandler}
                >
                  Book my launch call
                </button>
              </div>
            </div>

            <div className="product-listing__text-container">
              <div className="product-listing__card">
                <h3 className="product-listing__card-heading">Staff Augmentation</h3>
                <p className="product-listing__text">
                  Too much work and too little time? No one wins when your engineering teams get
                  stretched thin.
                </p>
                <p className="product-listing__text">
                  LaunchWare&APOS;s Staff Augmentation is not just getting an extra set of hands.
                  It&APOS;s about enhancing your team&APOS;s capabilities. By seamlessly integrating
                  our skilled professionals into your environment, we don&APOS;t just fill the gap –
                  we become an intrinsic part of your team that&APOS;s busy getting things shipped.
                </p>
                <p className="product-listing__text">
                  We&APOS;ll pull from our team of senior and junior developers to make sure we
                  match you with the right people for your project. Then, we&APOS;ll immerse
                  ourselves in understanding your codebase, your unique processes, and the
                  milestones you're aiming for. Together, we ensure that your projects not only stay
                  on track but also achieve excellence, every single time.
                </p>
                <button
                  type="button"
                  className="product-listing__button button"
                  onClick={clickHandler}
                >
                  Book my launch call
                </button>
              </div>
              <div className="product-listing__card">
                <h3 className="product-listing__card-heading">Custom Development </h3>
                <p className="product-listing__text">
                  Transforming an idea into a tangible software solution requires more than just
                  vision. It demands the expertise, dedication, and finesse of a seasoned
                  development team.
                </p>
                <p className="product-listing__text">
                  That&APOS;s where LaunchWare&APOS;s Custom Development comes in. Imagine
                  harnessing the collective experience of a team that has successfully launched
                  dozens of software products. With us, every phase of the journey—from nascent
                  design stages, through development, all the way to triumphant deployment—is
                  meticulously catered for.
                </p>
                <p className="product-listing__text">
                  The best part? You bypass the hurdles of recruitment, hiring, and team management.
                  No more paying hefty recruiter fees or trying to hire talented developers in a
                  competitive job market. Simply entrust your idea with us, and together, we&APOS;ll
                  transform your idea into a successful digital reality.
                </p>
                <button
                  type="button"
                  className="product-listing__button button"
                  onClick={clickHandler}
                >
                  Book my launch call
                </button>
              </div>
            </div>

            <div className="product-listing__image-container">
              <img className="product-listing__image" src="https://placehold.co/680x520" />
            </div>
          </div>
        </div>
        {modal}
      </section>
    </>
  );
};