import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Grid2, Link } from "@mui/material";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";

import FooterFacebook from "../assets/icons/footer-facebook.svg";
import FooterInstagram from "../assets/icons/footer-instagram.svg";
import TikTok from "../assets/icons/tik-tok.svg";
import Telegram from "../assets/icons/telegram.svg";
import WhatsApp from "../assets/icons/whats-app.svg";
import LinkedIn from "../assets/icons/linked-in.svg";

const MobileMenu = () => {
  const { t } = useTranslation("app-toolbar");

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

  //   if (target) {
  //     observer.observe(target);
  //   } else {
  //     menuItem.forEach((e) => e.classList.remove("active"));
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [location]);

  const onClickMobileLink = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const onClickClose = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  return (
    <div className="mobile-menu">
      <span className="close" onClick={() => onClickClose()}></span>
      <ul className="menu">
        <li
          className={`menu__item mobile-link ${
            location.pathname === "/services" ? "active" : ""
          }`}
          onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // navigate("/services");
            }}
          >
            {t("Services")}
          </a>
        </li>
        {/* <li
          className={`menu__item mobile-link ${
            location.pathname === "/gaming" ? "active" : ""
          }`}
          onClick={() => onClickMobileLink()}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/gaming");
            }}
          >
            {t("IGaming")}
          </a>
        </li> */}
        <li
          className="menu__item mobile-link"
          data-id="projects"
          onClick={() => onClickMobileLink()}
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
          className={`menu__item mobile-link ${
            location.pathname === "/about-us" ? "active" : ""
          }`}
          onClick={() => onClickMobileLink()}
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
          className={`menu__item mobile-link ${
            location.pathname === "/contact-us" ? "active" : ""
          }`}
          onClick={() => onClickMobileLink()}
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
          className={`menu__item mobile-link ${
            location.pathname === "/faqs" ? "active" : ""
          }`}
          onClick={() => onClickMobileLink()}
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

      <Grid2
        container
        direction="row"
        justifyContent="center"
        gap="20px"
        mt="50px"
      >
        <Link href="https://www.facebook.com/profile.php?id=61571073299478">
          <Image style={{ width: "30px" }} src={FooterFacebook} alt="Facebook" />
        </Link>

        <Link href="https://www.instagram.com/quantapps_/">
          <Image
            style={{ width: "30px" }}
            src={FooterInstagram}
            alt="Instagram"
          />
        </Link>

        <Link href="https://www.linkedin.com/company/quant-apps">
          <Image style={{ width: "30px" }} src={LinkedIn} alt="LinkedIn" />
        </Link>

        <Link href="https://www.tiktok.com/@quantapps">
          <Image style={{ width: "30px" }} src={TikTok} alt="TikTok" />
        </Link>

        <Link href="https://t.me/quantapps">
          <Image style={{ width: "30px" }} src={Telegram} alt="Telegram" />
        </Link>

        <Link href="https://wa.me/37369882331">
          <Image style={{ width: "30px" }} src={WhatsApp} alt="WhatsApp" />
        </Link>
      </Grid2>

      <Grid2 container sx={{ width: "100%", mt: "20px" }} justifyContent="center">
        <LanguageSwitcher mobile />
      </Grid2>
    </div>
  );
};

export default MobileMenu;
