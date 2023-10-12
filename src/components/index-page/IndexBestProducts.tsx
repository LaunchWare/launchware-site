import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./css/index-best-products.css";

export const IndexBestProducts = () => (
  <div className="index-best-products">
    <div className="index-best-products__contents">
      <div className="index-best-products__text-container">
        <h2 className="index-best-products__heading">
          The Best Products Start with a Focus on Who They Serve
        </h2>
        <p className="index-best-products__text">
          The first step in building a remarkable product is getting clear on who it helps.
        </p>
        <p className="index-best-products__text">
          By following our Jobs to Be Done oriented approach to defining products, you’ll ensure
          your product is laser focused on an audience that would benefit from using it. Download
          our Jobs to Be Done Workbook to get in a user-driven mindset.
        </p>
        <p className="index-best-products__text">
          <Link className="index-best-products__link" to="#">
            <span>Get the workbook</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </p>
      </div>
      <div className="index-best-products__image-container">
        <img className="index-best-products__image" src="https://placehold.co/680x509" />
        {/* <StaticImage
          layout="constrained"
          width={680}
          className="index-best-products__image"
          alt=""
          src="../../images/index/.jpg"
        /> */}
      </div>
    </div>
  </div>
);
