import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./css/embrace-launchware.css";

export const EmbraceLaunchWare = () => (
  <div className="embrace-launchware">
    <div className="embrace-launchware__contents">
      <h2 className="embrace-launchware__heading">
        Unlock your project’s potential with LaunchWare
      </h2>
      <p>With LaunchWare, you can:</p>
      <ul role="list" className="embrace-launchware__list">
        <li>Identify and tackle software bottlenecks head-on</li>
        <li>Make informed decisions with transparent reporting</li>
        <li>Enhance your software’s performance for a superior user experience</li>
        <li>Recapture missed opportunities and steer your project towards success</li>
        <li>Enjoy the peace of mind that comes with expert guidance</li>
      </ul>
    </div>
  </div>
);
