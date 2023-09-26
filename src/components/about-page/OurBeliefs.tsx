import React from "react";

import "./css/our-beliefs.css";

export const OurBeliefs = () => (
  <section className="our-beliefs">
    <div className="our-beliefs__contents">
      <div className="our-beliefs__image-container">
        <img className="our-beliefs__image" src="https://placehold.co/1220x360" />
      </div>
      <h2 className="our-beliefs__section-heading">Our Beliefs</h2>
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
          <h3 className="our-beliefs__paragraph-heading">Uniqueness in Every Challenge</h3>
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
          <h3 className="our-beliefs__paragraph-heading">Communication as the Alpha and Omega</h3>
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
      </ul>
      <p className="our-beliefs__text_center">
        By staying true to these core beliefs, we aim to foster partnerships that are not just
        profitable, but also meaningful and enduring. If these beliefs resonate with you, you're
        likely the kind of partner we're looking to collaborate with.
      </p>
    </div>
  </section>
);
