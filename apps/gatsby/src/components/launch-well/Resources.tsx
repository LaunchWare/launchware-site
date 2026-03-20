import React from "react"

import { faFileLines, faFileCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./css/resources.css"

export const Resources = () => {
  return (
    <div className="resources">
      <div className="resources__contents">
        <h2 className="resources__heading">Your Resources</h2>

        <div className="resources__video-container">
          <div className="resources__video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/5aX6VcNmlqE"
              title="PRD Template Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="resources__links">
          <a
            href="https://docs.google.com/document/d/1G3pcPItASgjKZIJSHUWSUKAWwMcuK23Q11Y1Yvjrtio/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resources__link-card"
          >
            <span className="resources__link-icon">
              <FontAwesomeIcon icon={faFileLines} />
            </span>
            <span className="resources__link-text">
              <span className="resources__link-title">Google Doc Template</span>
              <span className="resources__link-description">
                Make a copy and start filling it out today
              </span>
            </span>
          </a>

          <a href="/prd-template.md" download className="resources__link-card">
            <span className="resources__link-icon">
              <FontAwesomeIcon icon={faFileCode} />
            </span>
            <span className="resources__link-text">
              <span className="resources__link-title">Markdown Template</span>
              <span className="resources__link-description">
                Download for teams working in GitHub or code repos
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
