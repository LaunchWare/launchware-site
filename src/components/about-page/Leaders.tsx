import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useBookCallModal } from "../book-call/hooks/useBookCallModal";
import "./css/leaders.css";
import { StaticImage } from "gatsby-plugin-image";

export const Leaders = () => {
  const { modal, clickHandler } = useBookCallModal();

  return (
    <section className="leaders">
      {modal}
      <div className="leaders__contents">
        <div className="leaders__heading-container">
          <h2 className="leaders__heading">Meet LaunchWare's Leaders</h2>
          <p></p>
        </div>
        <div className="leaders__grid">
          <div className="leaders__card">
            <div className="leaders__image-container">
              <StaticImage
                quality={90}
                transformOptions={{ fit: "cover", cropFocus: "north" }}
                className="leaders__image"
                src="../../images/leader-headshots/dan-pickett.jpeg"
                alt="Dan Pickett Headshot"
                width={604}
                height={400}
              />
            </div>
            <div className="leaders__text-container">
              <h3 className="leaders__card-heading">Dan Pickett</h3>
              <h3 className="leaders__card-heading__italic">Founder</h3>
              <p className="leaders__text">
                Dan believes software has the profound power to better our lives. Yet, as a
                respected technology leader and seasoned software developer, Dan often noticed a
                recurring issue: product teams trapped in a web of miscommunication, failing to
                sharply define the problems they intended to solve. The aftermath? Solutions riddled
                with technical debt, an inability to adapt to changing user needs, and oversights
                that let users down.
              </p>
              <p className="leaders__text">
                For Dan, these problems aren’t a simple observation—they’ve launched a personal
                mission. Every time a founder or tech executive brings a struggling product idea to
                the table, he sees beyond the code. He observes capable minds constrained by
                challenges—and the heartache of missed opportunities. As a founder himself, Dan
                genuinely understands the weight of missed opportunities and the added frustrations
                non-technical individuals face when navigating these challenges.
              </p>
              <p className="leaders__text">
                However, Dan isn’t just an empathetic ear. He's a solutions architect. Equipped with
                a Computer Science degree from Worcester Polytechnic Institute, his resume includes
                a role as a Director of Engineering and 15 rich years of consulting. He’s also a
                teacher at heart, having helped train over 1000 Software Engineers via Launch
                Academy. Partnering with Dan means you aren't merely crafting software; you're
                making dreams become tangible realities.
              </p>
              <p className="leaders__text">
                Outside of professional pursuits, Dan is a devoted husband and father to three
                children. When not in front of the screen, Dan enjoys weightlifting, hockey, and
                coaching his kids in baseball and soccer. His two dogs, aptly named Linux and Apple,
                hint at a tech passion that spills into his personal life. Always curious, he spends
                his evenings diving into new technological realms and hunting for new ways to uplift
                those around him.
              </p>
              <ul className="leaders__social-icons">
                <li>
                  <a href="https://www.linkedin.com/in/danpickett">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="leaders__card">
            <div className="leaders__image-container">
              <StaticImage
                aspectRatio={2.5}
                quality={90}
                transformOptions={{ fit: "cover", cropFocus: "north" }}
                className="leaders__image"
                src="../../images/leader-headshots/bill-rowell.jpeg"
                alt="Bill Rowell Headshot"
                width={604}
                height={400}
              />
            </div>
            <div className="leaders__text-container">
              <h3 className="leaders__card-heading">Bill Rowell</h3>
              <h3 className="leaders__card-heading__italic">Principal Engineer</h3>
              <p className="leaders__text">
                In an industry where technology often takes the center stage, Bill understands the
                importance of the human element in software development. It’s critical. In Bill's
                view, a healthy dialogue between every party involved in a project is not just
                beneficial but essential for the timely delivery of valuable software solutions.
              </p>
              <p className="leaders__text">
                Bill's empathy stems from a simple yet profound belief: Every participant in a
                project is an individual human being. We all have our personal and professional
                hurdles, and we all make mistakes. By keeping the people, both developers and
                end-users, at the forefront, he champions the creation of long-term, effective
                solutions.
              </p>
              <p className="leaders__text">
                With over 20 years as a Software Engineer, Bill brings a wealth of experience to the
                table. He has thrived in various team sizes and has also managed departments of 30
                or more, enabling him to address a spectrum of challenges. He’s an authority on both
                the technical and business nuances of software development.
              </p>
              <p className="leaders__text">
                A graduate of WPI in Computer Science, Bill blends his professional pursuits with an
                enriching personal life in Massachusetts. A loving husband and father of two, he's
                an avid mountain biker and skier, making the most of New England's diverse seasons.
                His family time is cherished, whether they're on the road or engaging in domestic
                projects.
              </p>
              <p className="leaders__text">
                One commendation from a previous manager succinctly captures Bill's unique value:
                “He thinks more strategically about our business, offering a refreshing perspective
                amid operation-focused managers.” For Bill, the business impact of his role is just
                as fulfilling as its technical aspects. He’s a well-rounded leader who knows how to
                balance human considerations with business imperatives.
              </p>
              <ul className="leaders__social-icons">
                <li>
                  <a href="https://www.linkedin.com/in/billr578">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="leaders__button button" type="button" onClick={clickHandler}>
          Book my launch call
        </button>
      </div>
    </section>
  );
};
