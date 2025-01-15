
import { useTranslation } from "react-i18next";
import { Grid2 } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import LanguageSwitcher from "./LanguageSwitcher";

import FooterFacebook from "@/src/assets/icons/footer-facebook.svg";
import FooterInstagram from "@/src/assets/icons/footer-instagram.svg";
import TikTok from "@/src/assets/icons/tik-tok.svg";
import Telegram from "@/src/assets/icons/Telegram.svg";
import WhatsApp from "@/src/assets/icons/whats-app.svg";
import LinkedIn from "@/src/assets/icons/linked-in.svg";

const MobileMenu = () => {
  const { t } = useTranslation("app-toolbar");
  const router = useRouter();
  const pathname = usePathname();

  const onClickMobileLink = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const onClickClose = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const handleNavigation = (path: string, scrollTo?: string) => {
    onClickMobileLink();
    if (scrollTo) {
      router.push(path);
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      router.push(path);
    }
  };

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
            onClick={() => handleNavigation("/services")}
          >
            {t("Services")}
          </Link>
        </li>

        <li
          className="menu__item mobile-link"
          data-id="projects"
        >
          <Link
            href="/"
            className="text-left w-full"
            onClick={() => handleNavigation("/", "projects")}
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
            onClick={() => handleNavigation("/about-us")}
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
            onClick={() => handleNavigation("/contact-us")}
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
            onClick={() => handleNavigation("/faqs")}
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