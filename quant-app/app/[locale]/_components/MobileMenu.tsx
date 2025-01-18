
import { useTranslations } from "next-intl";
import { Grid2 } from "@mui/material";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "./LanguageSwitcher";

import FooterFacebook from "@/src/assets/icons/footer-facebook.svg";
import FooterInstagram from "@/src/assets/icons/footer-instagram.svg";
import TikTok from "@/src/assets/icons/tik-tok.svg";
import Telegram from "@/src/assets/icons/Telegram.svg";
import WhatsApp from "@/src/assets/icons/whats-app.svg";
import LinkedIn from "@/src/assets/icons/linked-in.svg";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const  t  = useTranslations("app-toolbar");
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState('/');

  const onClickMobileLink = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const onClickClose = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  useEffect(() => {
    if (currentPathname === '/en') {
      setPathname('/projects');
    } else {
      const pathSegments = currentPathname.split('/');
      setPathname('/' + (pathSegments[2] || ''));
    }
    onClickMobileLink()
  }, [currentPathname])



  return (
    <div className="mobile-menu">
      <span className="close" onClick={onClickClose}></span>
      <ul className="menu">
        <li
          className={`menu__item mobile-link ${
            pathname === "/services" ? "active" : ""
          }`}
        >
          <Link
            href="/services"
            className="text-left w-full"
          >
            {t("Services")}
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${pathname === "/projects" ? "active" : ""}`} data-id="projects"
        >
          <Link
            href="/#projects"
            className="text-left w-full"
            scroll={false}
          >
            {t("Projects")}
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/about-us" ? "active" : ""
          }`}
        >
          <Link
            href="/about-us"
            className="text-left w-full"
          >
            {t("AboutUs")}
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/contact-us" ? "active" : ""
          }`}
        >
          <Link
            href="/contact-us"
            className="text-left w-full"
          >
            {t("ContactUs")}
          </Link>
        </li>

        <li
          className={`menu__item mobile-link ${
            pathname === "/faqs" ? "active" : ""
          }`}
        >
          <Link
            href="/faqs"
            className="text-left w-full"
          >
            FAQs
          </Link>
        </li>
      </ul>

      <Grid2
        container
        direction="row"
        justifyContent="center"
        gap="20px"
        mt="50px"
      >
        <Link 
          href="https://www.facebook.com/profile.php?id=61571073299478"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src={FooterFacebook} alt="Facebook" />
        </Link>

        <Link 
          href="https://www.instagram.com/quantapps_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={30}
            height={30}
            src={FooterInstagram}
            alt="Instagram"
          />
        </Link>

        <Link 
          href="https://www.linkedin.com/company/quant-apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src={LinkedIn} alt="LinkedIn" />
        </Link>

        <Link 
          href="https://www.tiktok.com/@quantapps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src={TikTok} alt="TikTok" />
        </Link>

        <Link 
          href="https://t.me/quantapps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src={Telegram} alt="Telegram" />
        </Link>

        <Link 
          href="https://wa.me/37369882331"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src={WhatsApp} alt="WhatsApp" />
        </Link>
      </Grid2>

      <Grid2 container sx={{ width: "100%", mt: "20px" }} justifyContent="center">
        <LanguageSwitcher mobile />
      </Grid2>
    </div>
  );
};

export default MobileMenu;