"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useMediaQuery } from "@mui/material";
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
      <header className="fixed top-0 left-0 z-50 bg-[#051139] w-full py-2">
        <div className="grid grid-cols-[2fr_5fr_1fr_1fr] pl-5 max-[950px]:flex max-[950px]:justify-between min-h-[80px]">
          <Link href="/" legacyBehavior>
            <a className="w-full self-center pl-10 max-[950px]:pl-0">
            <Image priority id="logo" src="/icons/logo.svg" width={500} height={0} className="h-auto w-auto max-[550px]:w-[80%]" alt="Logo" />
            </a>
          </Link>
          <nav>
            <ul className="menu">
            <li className={cn('menu__item', { 'active': pathname === '/services' })}>
              <Link href="/services" legacyBehavior>
                <a className="text-nowrap">{t("Services")}</a>
              </Link>
            </li>

            <li className={cn('menu__item', { 'active': pathname === '/' && projectsAreVisible })} data-id="projects" onClick={projectsClickHandle}>
              <Link href="/#projects" scroll={false} legacyBehavior>
                <a className="text-left text-nowrap">{t("Projects")}</a>
              </Link>
            </li>

            <li className={cn('menu__item', { 'active': pathname === '/about-us' })}>
              <Link href="/about-us" legacyBehavior>
                <a className="text-nowrap">{t("AboutUs")}</a>
              </Link>
            </li>

            <li className={cn('menu__item', { 'active': pathname === '/contact-us' })}>
              <Link href="/contact-us" legacyBehavior>
                <a className="text-nowrap">{t("ContactUs")}</a>
              </Link>
            </li>

              <li className={cn('menu__item', { 'active': pathname === '/faqs' })}>
                <Link href="/faqs" legacyBehavior>
                  <a className="text-nowrap">
                    FAQs
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-right justify-center">
            {pathname !== "/contact-us" && (
              <Link
                href='/talk-modal'
                legacyBehavior
              >
                <a className="button lets-talk text-nowrap !w-auto !px-[20px]">
                  {t("LetsTalk")}
                </a>
              </Link>
            )}
          </div>
          <div className="flex justify-center self-center px-[15px] w-[70px] overflow-hidden">

            {isSmallScreen ?
              <Image
                src="/icons/burger.svg"
                alt="mobile menu"
                width={100}
                height={100}
                className="w-full h-full"
                onClick={onClickBurger}
              />
              :
              <LanguageSwitcher mobile={isSmallScreen} />
            }
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default AppToolbar;