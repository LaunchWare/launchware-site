import React from "react"
import "./css/footer.css"
import { LaunchWareLogoLight } from "./LaunchWareLogoLight"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_logo-container">
          <LaunchWareLogoLight className="footer_logo" />
        </div>
        <div className="footer_grid">
          <nav className="footer_group">
            <h3 className="footer_headline">How we serve</h3>
            <ul className="footer_link-list">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li>
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li>
                <a href="#">Book Your Launch Call</a>
              </li>
            </ul>
          </nav>

          <nav className="footer_group">
            <h3 className="footer_headline">Who we are</h3>
            <ul className="footer_link-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">Insight</Link>
              </li>
              <li>
                <a href="#">Book Your Launch Call</a>
              </li>
            </ul>
          </nav>

          <div className="footer_group">
            <h3 className="footer_headline">Connect</h3>
            <p><a href="tel:50855555555">Change Phone Number</a></p>
            <p><a href="mailto:hello@launchware.com">hello@launchware.com</a></p>
            <ul className="footer_social-list">
              <li></li>
            </ul>
          </div>

          <form className="footer_group">
            <h3 className="footer_headline">Stay in our orbit</h3>
            <input type="email" placeholder="Email" />
            <input type="submit" className="button button__full-width" value="Submit" data-lpignore="true" />
            <p>By submitting this form, you confirm that you have read and agree to the Terms & Conditions.</p>
          </form>
        </div>
        <p className="footer_copyright-notice">&copy; {new Date().getFullYear()} LaunchWare. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
