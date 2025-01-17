"use client"

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, useRouter } from "@/i18n/routing";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu";

import Logo from "../assets/icons/logo.svg";

import "../style/main.css";
import LanguageSwitcher from "./LanguageSwitcher";

const AppToolbar = () => {
  const t = useTranslations("app-toolbar");
  const router = useRouter();
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState('/');
  
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    // Handle hash scrolling
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Handle pathname setting
    console.log(currentPathname);
    if (currentPathname === '/en') {
      setPathname('/projects');
    } else {
      const pathSegments = currentPathname.split('/');
      setPathname('/' + (pathSegments[2] || ''));
    }
    console.log(pathname);
  }, [currentPathname]);

  const onClickBurger = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.add("active");
  };

  useEffect(() => {
    const target = document.getElementById("projects");
    const menuItem = document.querySelectorAll(
      '.menu__item[data-id="projects"]'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          menuItem.forEach((e) => e.classList.add("active"));
        } else {
          menuItem.forEach((e) => e.classList.remove("active"));
        }
      });
    });

    if (target) observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

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
                
                <li className={`menu__item ${pathname === "/projects" ? "active" : ""}`} data-id="projects">
                  <Link 
                    href="/#projects"
                    className="text-left"
                    scroll={false}
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
                <Link
                  className="button lets-talk"
                  href='/talk-modal'
                >
                  {t("LetsTalk")}
                </Link>
              )}
              <span className="burger" onClick={onClickBurger}></span>
            </div>

            {!isSmallScreen && <LanguageSwitcher />}
          </div>
        </div>
      </header>
      <MobileMenu />

      <Box sx={{ marginBottom: "120px" }} />
    </>
  );
};

export default AppToolbar;