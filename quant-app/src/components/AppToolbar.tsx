"use client"
import { useEffect } from "react";
import Image from "next/image";

import TalkPopup from "./TalkPopup";
import MobileMenu from "./MobileMenu";
import { openLetsTalkModal } from "../utils/modal";
import Logo from "../assets/icons/logo.svg";
import "../style/main.css";

const AppToolbar = () => {

  // const onClickBurger = () => {
  //   const mobileMenu = document.querySelector(".mobile-menu");
  //   mobileMenu.classList.add("active");
  // };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // navigate("/main");
              }}
              className="logo"
            >
              <Image id="logo" src={Logo} alt="" />
            </a>
            <nav>
              <ul className="menu">
                <li
                  className={`menu__item ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                >
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li
                  className={`menu__item ${
                    location.pathname === "/main" ? "active" : ""
                  }`}
                  data-id="projects"
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/main", { state: { scrollTo: "projects" } });
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={`menu__item ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/about-us");
                    }}
                  >
                    About us
                  </a>
                </li>
                <li
                  className={`menu__item ${
                    location.pathname === "/contact-us" ? "active" : ""
                  }`}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/contact-us");
                    }}
                  >
                    Contact us
                  </a>
                </li>
                <li
                  className={`menu__item ${
                    location.pathname === "/faqs" ? "active" : ""
                  }`}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/faqs");
                    }}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
            <div className="nav-right">
              {location.pathname !== "/contact-us" && (
                <button
                  className="lets-talk"
                  onClick={() => openLetsTalkModal()}
                >
                  Let’s Talk
                </button>
              )}
              <span className="burger" 
              // onClick={() => onClickBurger() }
              ></span>
            </div>
          </div>
        </div>
      </header>

      <TalkPopup />
      <MobileMenu />
    </>
  );
};

export default AppToolbar;