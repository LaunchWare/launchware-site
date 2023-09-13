import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import "../../css/index.css"
import "./css/navbar.css";

import { LaunchWareLogo } from '../LaunchWareLogo'
import { Link } from 'gatsby';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="primary-nav">
      {({ open }) => (
        <>
          <div className="primary-nav_container">
            <div className="primary-nav_mobile-button-container">
              <div className="primary-nav_mobile-button">
                {/* Mobile menu button */}
                <Disclosure.Button className="primary-nav_mobile-button-disclosure">
                  <span className="primary-nav_mobile-button-spacer" />
                  <span className="primary-nav_mobile-button-accessible-message">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="primary-nav_mobile-button-icon" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="primary-nav_mobile-button-icon" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="primary-nav-container__desktop">
                <div className="primary-nav_logo">
                  <Link to="/">
                    <LaunchWareLogo />
                  </Link>
                </div>
                <div className="menu__desktop">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="menu-item__desktop"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="menu-item__desktop"
                  >
                    About
                  </a>
                  <a href="#" className="menu-item__desktop menu-item__desktop-button button">Book Launch Call</a>

                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="primary-nav_disclosure-panel">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="primary-nav_disclosure-panel-item"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="primary-nav_disclosure-panel-item"
              >
                About
              </Disclosure.Button>

              <Disclosure.Button
                href="#"
                as="a"
                className="primary-nav_disclosure-panel-item menu-item__desktop menu-item__mobile-button button">
                Book Launch Call
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
