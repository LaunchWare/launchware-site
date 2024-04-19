import React from "react";

import "./css/blog-hero.css";

export const BlogHero = () => {
  return (
    <div className="blog-hero">
      <div className="blog-hero__contents">
        <div className="blog-hero__text-container">
          <h2 className="blog-hero__heading">Blog</h2>
          <p className="blog-hero__text">
            Read the latest from the team at LaunchWare. We'll discuss software development, what
            we've learned, and launching your next project.
          </p>
        </div>
      </div>
    </div>
  );
};
