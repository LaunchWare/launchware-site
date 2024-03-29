import React, { MouseEventHandler } from "react"
import { LaunchWareLogoLight } from "./LaunchWareLogoLight"
import { Link, Script } from "gatsby"
import { companySocialProfiles } from "../../configuration/getCompanySocialProfile"
import { CompanySocialIcon } from "../social/CompanySocialIcon"
import { companyContactInformation } from "../../configuration/companyContactInformation"

import "./css/footer.css"
import { TrackingCodes } from "./TrackingCodes"
import { useBookCallModal } from "../book-call/hooks/useBookCallModal"
import { OptInForm } from "../opt-in/OptInForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faSms } from "@fortawesome/free-solid-svg-icons"
import { UC_UI } from "../usercentrics/UsercentricsProvider"

declare global {
  interface Window {
    UC_UI: UC_UI
  }
}
const Footer = () => {
  const { modal, clickHandler } = useBookCallModal();

  const socialListItems = Object.keys(companySocialProfiles).map((network: string) => {
    return <li key={network}><CompanySocialIcon network={network} /></li>
  })

  const privacySettingsHandler: MouseEventHandler = (event) => {
    event.preventDefault()
    if (window.UC_UI) {
      window.UC_UI.showSecondLayer()
    }
  }

  return (
    <footer className="footer">
      {modal}
      <div className="footer_container">
        <div className="footer_logo-container">
          <Link to="/" title="LaunchWare">
            <LaunchWareLogoLight className="footer_logo" />
          </Link>
        </div>
        <div className="footer_grid">
          <nav className="footer_group footer_group__serve">
            <h3 className="footer_headline">How we serve</h3>
            <ul className="footer_link-list">
              <li className="footer_link-list-item">
                <Link to="/services">Services</Link>
              </li>
              {/* <li className="footer_link-list-item">
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li className="footer_link-list-item">
                <Link to="/case-studies">Case Studies</Link>
              </li> */}
            </ul>
          </nav>

          <nav className="footer_group footer_group__who">
            <h3 className="footer_headline">Who we are</h3>
            <ul className="footer_link-list">
              <li className="footer_link-list-item">
                <Link to="/about">About</Link>
              </li>
              {/* <li className="footer_link-list-item">
                <Link to="/careers">Careers</Link>
              </li> */}
              <li className="footer_link-list-item">
                <Link to="/blog">Insight</Link>
              </li>
            </ul>
          </nav>

          <div className="footer_group footer_group__connect">
            <h3 className="footer_headline">Connect</h3>
            <p onClick={clickHandler}>
              <a href="#">Book Your Launch Call</a>
            </p>
            <p><Link to="/contact">Contact Us</Link></p>
            <p>
              <FontAwesomeIcon icon={faPhone} />&nbsp;
              <a href={`tel:${companyContactInformation.phoneHref}`}> {companyContactInformation.phoneFormatted}</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faSms} />&nbsp;
              <a href={`tel:${companyContactInformation.phoneHref}`}>{companyContactInformation.sms}</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />&nbsp;
              <a href={`mailto:${companyContactInformation.email}`}>{companyContactInformation.email}</a>
            </p>
            <ul className="footer_social-list">
              {socialListItems}
            </ul>
          </div>

          <OptInForm />
        </div>

        <div className="footer_legal">
          <p className="footer_copyright-notice">&copy; {new Date().getFullYear()} LaunchWare. All rights reserved.</p>
          <ul className="footer_legal-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
            <li><a href="#" onClick={privacySettingsHandler}>Privacy Settings</a></li>
          </ul>
        </div>
      </div>
      <TrackingCodes />
    </footer >
  )
}

export default Footer
