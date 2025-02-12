'use client'
import { useTranslations } from "next-intl";
import { Grid2 } from "@mui/material";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { cn } from "@/lib/utils/utils";

const MobileMenu = () => {
  const t = useTranslations("app-toolbar");
  const pathname = usePathname();

  const onClickMobileLink = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const onClickClose = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu?.classList.remove("active");
  };

  const pages = ['services', 'projects', 'process', 'about-us', 'careers']



  return (
    <div className="top-0 left-0 h-auto p-[20px] overflow-hidden bg-white fixed z-[10000] rounded-b-[30px] w-full px-[50px]">
      <div className="flex right-[30px] top-[6px]">
        <Image src={'/icons/logo-mobile.svg'} width={500} height={300} alt="cross" className="cursor-pointer w-full" />
        <Image src={'/icons/cross.svg'} onClick={onClickClose} width={70} height={100} alt="cross" className="cursor-pointer" />
      </div>
      <ul className="flex flex-col w-full items-center gap-[35px] mt-[35px]">
        {pages.map(e =>
          <li className={cn('text-black', { 'active': pathname === `/${e}` })}>
            <Link href={`/${e}`} legacyBehavior>
              <a className="text-nowrap font-normal text-[28px] drop-shadow">{t(e)}</a>
            </Link>
          </li>
        )}
      </ul>

      <Grid2 container sx={{ width: "100%", mt: "20px" }} justifyContent="center">
        <LanguageSwitcher mobile />
      </Grid2>
    </div>
  );
};

export default MobileMenu;