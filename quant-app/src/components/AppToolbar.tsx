import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { Box, useMediaQuery } from "@mui/material";

import LanguageSwitcher from "./LanguageSwitcher";
import TalkPopup from "./TalkPopup/TalkPopup";
import MobileMenu from "./MobileMenu";
import { openLetsTalkModal } from "../utils/modal";

import Logo from "../assets/icons/logo.svg";

import "../style/main.css";

const AppToolbar = () => {
  const { t } = useTranslation("app-toolbar");

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const target = document.getElementById("projects");
  //   const menuItem = document.querySelectorAll(
  //     '.menu__item[data-id="projects"]'
  //   );

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         menuItem.forEach((e) => e.classList.add("active"));
  //       } else {
  //         menuItem.forEach((e) => e.classList.remove("active"));
  //       }
  //     });
  //   });

  //   if (target) observer.observe(target);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [location]);

  const onClickBurger = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.add("active");
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // navigate("/");
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
                    {t("Services")}
                  </a>
                </li>
                {/* <li
                  className={`menu__item ${
                    location.pathname === "/gaming" ? "active" : ""
                  }`}
                >
                  <a
                    href="/gaming"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/gaming");
                    }}
                  >
                    {t("IGaming")}
                  </a>
                </li> */}
                <li
                  className={`menu__item ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  data-id="projects"
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/", { state: { scrollTo: "projects" } });
                    }}
                  >
                    {t("Projects")}
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
                    {t("AboutUs")}
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
                    {t("ContactUs")}
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
                  {t("LetsTalk")}
                </button>
              )}
              <span className="burger" onClick={() => onClickBurger()}></span>
            </div>

            {!isSmallScreen && <LanguageSwitcher />}
          </div>
        </div>
      </header>

      <TalkPopup />
      <MobileMenu />

      <Box sx={{ marginBottom: "110px" }} />
    </>
  );
};

export default AppToolbar;
