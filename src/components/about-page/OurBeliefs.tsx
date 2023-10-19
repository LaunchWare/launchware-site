import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import "./css/our-beliefs.css";

export const OurBeliefs = () => (
  <div className="our-beliefs">
    <div className="our-beliefs__contents">
      <div className="our-beliefs__image-container">
        <StaticImage
          layout="constrained"
          width={1220}
          className="our-beliefs__image"
          alt="Four office mates talking while leaning on tables or wall"
          src="../../images/about/leaning-foursome.jpg"
        />
      </div>
      <h2 className="our-beliefs__section-heading">What We Believe</h2>
      <p className="our-beliefs__text_center">
        At LaunchWare, we're driven by a set of foundational beliefs that guide every project we
        undertake. These are more than just talking points. They're the principles that shape our
        approach, influence our decisions, and define who we are as a team.
      </p>
      <ul className="our-beliefs__grid">
        <li>
          <h3 className="our-beliefs__paragraph-heading">Technology is a Force for Good</h3>
          <p className="our-beliefs__text">
            We're adamant that technology should enhance the well-being of its users. If a project's
            intent is deceptive or ethically questionable, it doesn't just merit reconsideration—it
            simply won't be built by us.
          </p>
        </li>
        <li>
          <h3 className="our-beliefs__paragraph-heading">Every Project is Unique</h3>
          <p className="our-beliefs__text">
            We understand that each client and each technological hurdle is singular in its
            complexities and opportunities. There's no one-size-fits-all solution, which is why we
            value custom approaches tailored to each project's unique demands.
          </p>
        </li>
        <li>
          <h3 className="our-beliefs__paragraph-heading">Evolution Over Stagnation</h3>
          <p className="our-beliefs__text">
            In our eyes, software development is not a linear process but an evolutionary journey.
            Adaptability and flexibility aren't mere 'nice-to-haves'. They're essential traits for
            navigating the unpredictable landscape of software innovation.
          </p>
        </li>
        <li>
          <h3 className="our-beliefs__paragraph-heading">
            Software is an Exercise in Communication
          </h3>
          <p className="our-beliefs__text">
            We believe that software projects are, at their core, exercises in effective
            communication. From the initial idea to the final product, clear and open dialogue is
            crucial. It enables us to understand not just what needs to be built, but why, for whom,
            and to what end.
          </p>
        </li>
        <li>
          <h3 className="our-beliefs__paragraph-heading">Transparency and Accountability</h3>
          <p className="our-beliefs__text">
            Openness builds trust, and trust is the foundation of any successful partnership. We
            believe in maintaining transparency about our processes, decisions, and progress,
            holding ourselves accountable for delivering on our commitments.
          </p>
        </li>
        <li>
          <p className="our-beliefs__text">
            By staying true to these core beliefs, we aim to foster partnerships that are not just
            profitable, but also meaningful and enduring. If these beliefs resonate with you, you're
            likely the kind of partner we're looking to collaborate with.
          </p>
        </li>
      </ul>
    </div>
  </div>
);
