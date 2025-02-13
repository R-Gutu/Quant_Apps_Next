'use client'
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";

import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils/utils";

const MobileMenu = ({menuVisible, setMenuVisible}: {menuVisible: boolean, setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const t = useTranslations("app-toolbar");
  const pathname = usePathname();
  const pages = ['services', 'projects', 'process', 'about-us', 'careers']

  return (
    <div className={cn('top-0 left-0 h-auto p-[20px] overflow-hidden bg-white fixed z-[10000] rounded-b-[30px] w-full px-[20%] flex flex-col items-center small:hidden', {'invisible': !menuVisible})}>
        <Image src={'/icons/logo-mobile.svg'} width={237} height={58} alt="quant apps logo" className="cursor-pointer" />
      <div className="flex justify-between absolute top-[-5px] right-[5%]">
        <Image src={'/icons/cross.svg'} onClick={() => setMenuVisible(false)} width={70} height={100} alt="cross" className="cursor-pointer" />
      </div>
      <ul className="flex flex-col w-full items-center gap-[35px] mt-[35px]">
        {pages.map(e =>
          <Link href={`/${e}`} legacyBehavior>
            <a className={cn('text-nowrap font-normal text-[28px] text-black drop-shadow', { 'text-[var(--purple)]': pathname === `/${e}` })}>{t(e)}</a>
          </Link>
        )}
        <div className="ml-9">
          <LanguageSwitcher mobile />
        </div>
      </ul>

      <div className={cn('my-[50px]', {'hidden': !menuVisible})}>
        <LanguageSwitcher isMobile />
      </div>
    </div>
  );
};

export default MobileMenu;