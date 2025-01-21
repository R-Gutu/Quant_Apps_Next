"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import useOnScreen from "@/lib/utils/useOnScreen";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn, scrollToId } from "@/lib/utils/utils";

const AppToolbar = () => {
  const t = useTranslations("app-toolbar");
  const isSmallScreen = useMediaQuery("(max-width:950px)");
  const pathname = usePathname();
  const projectsAreVisible = useOnScreen('projects');

  useEffect(() => {
    // Handle hash scrolling
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.slice(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname]);

  const onClickBurger = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.add("active");
  };

  const projectsClickHandle = () => scrollToId('projects')

  return (
    <>
      <header>
        <div>
          <div className="header">
            <Link href="/" className="logo">
              <Image id="logo" src="/icons/logo.svg" width={0} height={0} className="h-auto w-auto" alt="Logo" />
            </Link>
            <nav >
              <ul className="menu">
                <li className={cn('menu__item', { 'active': pathname === '/services' })}>
                  <Link href="/services" className="text-nowrap">
                    {t("Services")}
                  </Link>
                </li>

                <li className={cn('menu__item', { 'active': pathname === '/' && projectsAreVisible })} data-id="projects" onClick={projectsClickHandle}>
                  <Link
                    href="/#projects"
                    className="text-left text-nowrap"
                    scroll={false}
                  >
                    {t("Projects")}
                  </Link>
                </li>

                <li className={cn('menu__item', { 'active': pathname === '/about-us' })}>
                  <Link href="/about-us" className="text-nowrap">
                    {t("AboutUs")}
                  </Link>
                </li>

                <li className={cn('menu__item', { 'active': pathname === '/contact-us' })}>
                  <Link href="/contact-us" className="text-nowrap">
                    {t("ContactUs")}
                  </Link>
                </li>

                <li className={cn('menu__item', { 'active': pathname === '/faqs' })}>
                  <Link href="/faqs" className="text-nowrap">
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="nav-right">
              {pathname !== "/contact-us" && (
                <Link
                  className="button lets-talk text-nowrap"
                  href='/talk-modal'
                >
                  {t("LetsTalk")}
                </Link>
              )}
            </div>

            <div className="flex justify-center">
              <span className="burger" onClick={onClickBurger}></span>
              {!isSmallScreen && <LanguageSwitcher mobile={isSmallScreen} />}
            </div>

          </div>
        </div>
      </header>
      <MobileMenu />
      <Box sx={{ marginBottom: "120px" }} />
    </>
  );
};

export default AppToolbar;