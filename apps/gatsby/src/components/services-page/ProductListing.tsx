import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { BinaryIcon } from "../icons/BinaryIcon";
import { CodingScriptIcon } from "../icons/CodingScriptIcon";
import { CommunityIcon } from "../icons/CommunityIcon";
import { DocsSignIcon } from "../icons/DocsSignIcon";
import "./css/product-listing.css";

export function ProductListing() {
  const { clickHandler, modal } = useBookCallModal();

  return (
    <div className="product-listing">
      {modal}
      <div className="product-listing__contents">
        <StaticImage
          alt=""
          className="product-listing__decorative-circle"
          src="../../images/decorations/decorative_circle.png"
        />
        <h2 className="product-listing__section-heading__hidden">Product Listing</h2>
        <ul className="product-listing__icon-card-container">
          <li className="product-listing__icon-card">
            <BinaryIcon className="product-listing__icon" width="54" />
            <h3 className="product-listing__icon-card-heading">Code Audit</h3>
          </li>
          <li className="product-listing__icon-card">
            <DocsSignIcon className="product-listing__icon" width="54" />
            <h3 className="product-listing__icon-card-heading">Flight Plan</h3>
          </li>
          <li className="product-listing__icon-card">
            <CommunityIcon className="product-listing__icon" width="54" />
            <h3 className="product-listing__icon-card-heading">Staff Augmentation</h3>
          </li>
          <li className="product-listing__icon-card">
            <CodingScriptIcon className="product-listing__icon" width="54" />
            <h3 className="product-listing__icon-card-heading">Custom Development</h3>
          </li>
        </ul>

        <div className="product-listing__grid">
          <div className="product-listing__image-container">
            <StaticImage
              layout="constrained"
              width={585}
              className="product-listing__image"
              alt="Coders at a hackathon"
              src="../../images/services/hackathon.jpg"
            />
          </div>

          <div className="product-listing__text-container">
            <div className="product-listing__card">
              <h3 className="product-listing__card-heading">Staff Augmentation</h3>
              <p className="product-listing__text">
                Too much work and too little time? No one wins when your engineering teams get
                stretched thin.
              </p>
              <p className="product-listing__text">
                LaunchWare&rsquo;s Staff Augmentation is not just getting an extra set of hands. it&rsquo;s
                about enhancing your team&rsquo;s capabilities. By seamlessly integrating our skilled
                professionals into your environment, we don&rsquo;t just fill the gap – we become an
                intrinsic part of your team that&rsquo;s busy getting things shipped.
              </p>
              <p className="product-listing__text">
                We&rsquo;ll pull from our team of senior and junior developers to make sure we match you
                with the right people for your project. Then, we&rsquo;ll immerse ourselves in
                understanding your codebase, your unique processes, and the milestones you&rsquo;re aiming
                for. Together, we ensure that your projects not only stay on track but also achieve
                excellence, every single time.
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
                vision. It demands the expertise, dedication, and finesse of a seasoned development
                team.
              </p>
              <p className="product-listing__text">
                That&rsquo;s where LaunchWare&rsquo;s Custom Development comes in. Imagine harnessing the
                collective experience of a team that has successfully launched dozens of software
                products. With us, every phase of the journey—from nascent design stages, through
                development, all the way to triumphant deployment—is meticulously catered for.
              </p>
              <p className="product-listing__text">
                The best part? You bypass the hurdles of recruitment, hiring, and team management.
                No more paying hefty recruiter fees or trying to hire talented developers in a
                competitive job market. Simply entrust your idea with us, and together, we&rsquo;ll
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

          <div className="product-listing__text-container">
            <div className="product-listing__card">
              <h3 className="product-listing__card-heading">Code Audit</h3>
              <p className="product-listing__text">
                Even seasoned software teams can encounter technical roadblocks that slow down
                innovation. Our Code Audit Engagement is designed to shine a light on those hidden
                challenges.
              </p>
              <p className="product-listing__text">
                Our Code Audit process thoroughly explores your codebase and analyzes the processes
                and the team behind it. it&rsquo;s more than just identifying what&rsquo;s wrong. it&rsquo;s about
                understanding what you have and creating a strategy for where you want to go.
              </p>
              <p className="product-listing__text">
                Following our in-depth assessment, you&rsquo;re presented with a comprehensive
                report—highlighting the bottlenecks and also offering solutions, starting with the
                most critical areas first. With these insights, you&rsquo;ll gain clarity, recapture
                missed opportunities, and set a definitive course for success.
              </p>
              <button
                type="button"
                className="product-listing__button button"
                onClick={clickHandler}
              >
                Book My Launch Call
              </button>
            </div>
            <div className="product-listing__card">
              <h3 className="product-listing__card-heading">Flight Plan</h3>
              <p className="product-listing__text">
                Business leaders brim with innovative software ideas. But it&rsquo;s not easy to turn a
                visionary idea into something your team can efficiently execute.
              </p>
              <p className="product-listing__text">
                Enter our Flight Plan engagement—how smart leaders map out their software
                development journey. We&rsquo;ll kick things off with our &apos;Jobs to Be Done Workshop&apos;,
                honing in on your target audience and the unique solutions your product promises
                them.
              </p>
              <p className="product-listing__text">
                From there, our seasoned team will craft intuitive wireframes, create clear user
                stories, and lay out a strategic project plan. This blueprint will illuminate the
                path for the initial iterations and ensure your software resonates with the audience
                it&rsquo;s meant for.
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
                Book My Launch Call
              </button>
            </div>
          </div>

          <div className="product-listing__image-container">
            <StaticImage
              layout="constrained"
              width={585}
              className="product-listing__image"
              alt="Woman coding with dual displays"
              src="../../images/services/woman-dual-displays.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
