import React from "react"
import { LaunchWareLogoLight } from "./LaunchWareLogoLight"
import { Link, Script } from "gatsby"
import { companySocialProfiles } from "../../configuration/getCompanySocialProfile"
import { CompanySocialIcon } from "../social/CompanySocialIcon"
import { companyContactInformation } from "../../configuration/companyContactInformation"

import "./css/footer.css"
import { TrackingCodes } from "./TrackingCodes"
import { useBookCallModal } from "../book-call/hooks/useBookCallModal"
import { OptInForm } from "../opt-in/OptInForm"

const Footer = () => {
  const { modal, clickHandler } = useBookCallModal();

  const socialListItems = Object.keys(companySocialProfiles).map((network: string) => {
    return <li key={network}><CompanySocialIcon network={network} /></li>
  })

  return (
    <footer className="footer">
      {modal}
      <div className="footer_container">
        <div className="footer_logo-container">
          <LaunchWareLogoLight className="footer_logo" />
        </div>
        <div className="footer_grid">
          <nav className="footer_group footer_group__serve">
            <h3 className="footer_headline">How we serve</h3>
            <ul className="footer_link-list">
              <li className="footer_link-list-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="footer_link-list-item">
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li className="footer_link-list-item">
                <Link to="/case-studies">Case Studies</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer_group footer_group__who">
            <h3 className="footer_headline">Who we are</h3>
            <ul className="footer_link-list">
              <li className="footer_link-list-item">
                <Link to="/about">About</Link>
              </li>
              <li className="footer_link-list-item">
                <Link to="/careers">Careers</Link>
              </li>
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
            <p><a href={`tel:${companyContactInformation.phone}`}> {companyContactInformation.phone}</a></p>
            <p><a href={`mailto:${companyContactInformation.email}`}>{companyContactInformation.email}</a></p>
            <ul className="footer_social-list">
              {socialListItems}
            </ul>
          </div>

          <OptInForm />
        </div>

        <div className="footer_legal">
          <p className="footer_copyright-notice">&copy; {new Date().getFullYear()} LaunchWare. All rights reserved.</p>
          <ul className="footer_legal-links">
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
      <TrackingCodes />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </footer >
  )
}

export default Footer
