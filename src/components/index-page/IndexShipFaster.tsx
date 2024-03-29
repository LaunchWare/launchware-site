import React from "react";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import { Tagline } from "../general/Tagline";
import { BinaryIcon } from "../icons/BinaryIcon";
import { CodingScriptIcon } from "../icons/CodingScriptIcon";
import { CommunityIcon } from "../icons/CommunityIcon";
import { DocsSignIcon } from "../icons/DocsSignIcon";
import "./css/index-ship-faster.css";

export const IndexShipFaster = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <div className="index-ship-faster">
      {modal}
      <div className="index-ship-faster__contents">
        <div className="index-ship-faster__heading-container">
          <h2 className="index-ship-faster__heading">Ship websites faster</h2>
          <p>
            Sometimes, getting started is the hardest part. That’s why we make it easy for us to
            begin the journey together.
          </p>
        </div>
        <div className="index-ship-faster__grid">
          <div className="index-ship-faster__card">
            <Tagline tagline="Understand the technical strength of your product" />
            <div className="index-ship-faster__image-container">
              <BinaryIcon className="index-ship-faster__image" width="104" />
            </div>
            <h2 className="index-ship-faster__card-heading">Code Audit</h2>
            <p className="index-ship-faster__text">
              Even seasoned software teams can encounter technical roadblocks that slow down
              innovation. Our Code Audit Engagement is designed to shine a light on those hidden
              challenges.
            </p>
            <p className="index-ship-faster__text">
              Our Code Audit process thoroughly explores your codebase and analyzes the processes
              and the team behind it. It’s more than just identifying what’s wrong. It’s about
              understanding what you have and creating a strategy for where you want to go.
            </p>
            <p className="index-ship-faster__text">
              Following our in-depth assessment, you're presented with a comprehensive
              report—highlighting the bottlenecks and also offering solutions, starting with the
              most critical areas first. With these insights, you’ll gain clarity, recapture missed
              opportunities, and set a definitive course for success.
            </p>
            <button
              className="index-ship-faster__button button"
              type="button"
              onClick={clickHandler}
            >
              Book My Launch Call
            </button>
          </div>
          <div className="index-ship-faster__card">
            <Tagline tagline="Define what your product needs to do" />
            <div className="index-ship-faster__image-container">
              <DocsSignIcon className="index-ship-faster__image" width="104" />
            </div>
            <h2 className="index-ship-faster__card-heading">Flight Plan</h2>
            <p className="index-ship-faster__text">
              Business leaders brim with innovative software ideas. But it’s not easy to turn a
              visionary idea into something your team can efficiently execute.
            </p>
            <p className="index-ship-faster__text">
              Enter our Flight Plan engagement—how smart leaders map out their software development
              journey.
            </p>
            Here’s how it works:
            <ol className="index-ship-faster__ordered-list">
              <li>
                We kick things off with our &lsquo;Jobs to Be Done Workshop&rsquo;, honing in on
                your target audience and the unique solutions your product promises them.
              </li>
              <li>
                Our seasoned team then crafts intuitive wireframes, creates clear user stories, and
                lays out a strategic project plan.
              </li>
              <li>
                This blueprint not only illuminates the path for the initial iterations but ensures
                your software resonates with the audience it’s meant for.
              </li>
            </ol>
            <p className="index-ship-faster__text">
              For organizations wanting to make the vision for their software a reality, the Flight
              Plan becomes an indispensable guide, ensuring a confident and impactful software
              launch.
            </p>
            <button
              className="index-ship-faster__button button"
              type="button"
              onClick={clickHandler}
            >
              Book My Launch Call
            </button>
          </div>
          <div className="index-ship-faster__card">
            <Tagline tagline="Additional velocity for your existing development team" />
            <div className="index-ship-faster__image-container">
              <CommunityIcon className="index-ship-faster__image" width="104" />
            </div>
            <h2 className="index-ship-faster__card-heading">Staff Augmentation</h2>
            <p className="index-ship-faster__text">
              Too much work and too little time? No one wins when your engineering teams get
              stretched thin.
            </p>
            <p className="index-ship-faster__text">
              LaunchWare’s Staff Augmentation is not just getting an extra set of hands. It’s about
              enhancing your team’s capabilities. By seamlessly integrating our skilled
              professionals into your environment, we don’t just fill the gap – we become an
              intrinsic part of your team that’s busy getting things shipped.
            </p>
            <p className="index-ship-faster__text">
              We’ll pull from our team of senior and junior developers to make sure we match you
              with the right people for your project. Then, we’ll immerse ourselves in understanding
              your codebase, your unique processes, and the milestones you're aiming for. Together,
              we ensure that your projects not only stay on track but also achieve excellence, every
              single time.
            </p>
            <button
              className="index-ship-faster__button button"
              type="button"
              onClick={clickHandler}
            >
              Book My Launch Call
            </button>
          </div>
          <div className="index-ship-faster__card">
            <Tagline tagline="Done for you software development" />
            <div className="index-ship-faster__image-container">
              <CodingScriptIcon className="index-ship-faster__image" width="104" />
            </div>
            <h2 className="index-ship-faster__card-heading">Custom Development</h2>
            <p className="index-ship-faster__text">
              Transforming an idea into a tangible software solution requires more than just vision.
              It demands the expertise, dedication, and finesse of a seasoned development team.
            </p>
            <p className="index-ship-faster__text">
              That’s where LaunchWare’s Custom Development comes in. Imagine harnessing the
              collective experience of a team that has successfully launched dozens of software
              products. With us, every phase of the journey—from nascent design stages, through
              development, all the way to triumphant deployment—is meticulously catered for.
            </p>
            <p className="index-ship-faster__text">
              The best part? You bypass the hurdles of recruitment, hiring, and team management. No
              more paying hefty recruiter fees or trying to hire talented developers in a
              competitive job market. Simply entrust your idea with us, and together, we’ll
              transform your idea into a successful digital reality.
            </p>
            <button
              className="index-ship-faster__button button"
              type="button"
              onClick={clickHandler}
            >
              Book My Launch Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
