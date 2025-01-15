"use client"

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Box, useMediaQuery } from "@mui/material";

import TalkPopup from "./TalkPopup/TalkPopup";
import MobileMenu from "./MobileMenu";
import { openLetsTalkModal } from "../utils/modal";

import Logo from "../assets/icons/logo.svg";

import "../style/main.css";
import LanguageSwitcher from "./LanguageSwitcher";

const AppToolbar = () => {
  const t = useTranslations("app-toolbar");
  // const router = useRouter();
  const pathname = usePathname();
  
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const onClickBurger = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.add("active");
  };

  const handleNavigation = (scrollTo?: string) => {
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <Link href="/" className="logo">
              <Image id="logo" src={Logo} alt="Logo" />
            </Link>
            
            <nav>
              <ul className="menu">
                <li className={`menu__item ${pathname === "/services" ? "active" : ""}`}>
                  <Link href="/services">
                    {t("Services")}
                  </Link>
                </li>
                
                <li className={`menu__item ${pathname === "/" ? "active" : ""}`} data-id="projects">
                  <Link 
                  href="/"
                    onClick={() => handleNavigation("projects")}
                    className="text-left"
                  >
                    {t("Projects")}
                  </Link>
                </li>
                
                <li className={`menu__item ${pathname === "/about-us" ? "active" : ""}`}>
                  <Link href="/about-us">
                    {t("AboutUs")}
                  </Link>
                </li>
                
                <li className={`menu__item ${pathname === "/contact-us" ? "active" : ""}`}>
                  <Link href="/contact-us">
                    {t("ContactUs")}
                  </Link>
                </li>
                
                <li className={`menu__item ${pathname === "/faqs" ? "active" : ""}`}>
                  <Link href="/faqs">
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="nav-right">
              {pathname !== "/contact-us" && (
                <button
                  className="lets-talk"
                  onClick={() => openLetsTalkModal()}
                >
                  {t("LetsTalk")}
                </button>
              )}
              <span className="burger" onClick={onClickBurger}></span>
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