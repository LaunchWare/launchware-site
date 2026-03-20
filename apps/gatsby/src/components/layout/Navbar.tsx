import React from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

import "../../css/index.css"
import "./css/navbar.css"

import { LaunchWareLogo } from "./LaunchWareLogo"
import { Link } from "gatsby"
import { useBookCallModal } from "../book-call/hooks/useBookCallModal"

export default function Navbar() {
  const { clickHandler, modal } = useBookCallModal()

  return (
    <Disclosure as="nav" className="primary-nav">
      {({ open }) => (
        <>
          <div className="primary-nav_container">
            <div className="primary-nav_mobile-button-container">
              <div className="primary-nav_mobile-button">
                {/* Mobile menu button */}
                <DisclosureButton className="primary-nav_mobile-button-disclosure">
                  <span className="primary-nav_mobile-button-spacer" />
                  <span className="primary-nav_mobile-button-accessible-message">
                    Open main menu
                  </span>
                  {open ? (
                    <XMarkIcon className="primary-nav_mobile-button-icon" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="primary-nav_mobile-button-icon" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="primary-nav-container__desktop">
                <div className="primary-nav_logo">
                  <Link to="/" title="LaunchWare">
                    <LaunchWareLogo />
                  </Link>
                </div>
                <div className="menu__desktop">
                  <Link to="/about" className="menu-item__desktop">
                    About
                  </Link>
                  <Link to="/services" className="menu-item__desktop">
                    Services
                  </Link>
                  <a
                    href="#"
                    onClick={clickHandler}
                    className="menu-item__desktop menu-item__desktop-button button"
                  >
                    Book My Launch Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="primary-nav_disclosure-panel">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <DisclosureButton
                as={Link}
                to="/services"
                className="primary-nav_disclosure-panel-item"
              >
                Services
              </DisclosureButton>
              <DisclosureButton as="a" href="#" className="primary-nav_disclosure-panel-item">
                About
              </DisclosureButton>

              <DisclosureButton
                href="#"
                onClick={clickHandler}
                as="a"
                className="primary-nav_disclosure-panel-item menu-item__desktop menu-item__mobile-button button"
              >
                Book My Launch Call
              </DisclosureButton>
            </div>
          </DisclosurePanel>
          {modal}
        </>
      )}
    </Disclosure>
  )
}
