import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./css/embrace-launchware.css";

export const EmbraceLaunchWare = () => (
  <div className="embrace-launchware">
    <div className="embrace-launchware__contents">
      <h2 className="embrace-launchware__heading">Embrace the LaunchWare Advantage</h2>
      <p>
        Ready to transform your software idea into a successful application? Here’s what you can
        look forward to when you partner with LaunchWare:
      </p>
      <ul role="list" className="embrace-launchware__list">
        <li>
          A custom software solution that reflects your vision and wows your users - we believe
          technology is a force for good and should solve real problems for your users.
        </li>
        <li>
          A break from the headaches of recruitment and team management - we take extra care when
          assigning the right resources so they blend into your culture and make things easy for you
          and your team.
        </li>
        <li>
          A dedicated team of experts at your disposal - we place a strong emphasis on continuous
          development of our staff to make sure we can match your needs to the right expertise.
        </li>
        <li>
          A transparent development process that keeps you in the loop - we believe that software
          development is first and foremost an exercise in communication and that is reflected in
          how we work with our clients on each and every project.
        </li>
        <li>
          The peace of mind that comes with knowing your software is in good hands - from our
          expertise to our transparency, we build a partnership with you so you feel comfortable at
          each step of the process. No black boxes or feature factories where you worry about what
          will be delivered at the end of the project.
        </li>
      </ul>
    </div>
  </div>
);
