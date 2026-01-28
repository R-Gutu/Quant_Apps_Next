'use client'
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";

import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils/utils";

const MobileMenu = ({ menuVisible, setMenuVisible }: { menuVisible: boolean, setMenuVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const t = useTranslations("app-toolbar");
  const pathname = usePathname();
  const pages = ['services', 'projects', 'process', 'pricing', 'about-us', 'careers']

  return (
    <AnimatePresence>
      {menuVisible && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuVisible(false)}
            className="fixed inset-0 bg-black/50 z-[9999] small:hidden"
          />
          
          {/* Menu */}
          <m.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="top-0 left-0 h-auto p-[20px] overflow-visible bg-white fixed z-[10000] rounded-b-[30px] w-full px-[20%] flex flex-col items-center small:hidden shadow-2xl"
          >
            <Image src={'/images/icons/logo-mobile.svg'} width={237} height={58} alt="Quant apps logo" className="cursor-pointer" />
            <div className="flex justify-between absolute top-[-5px] right-[5%]">
              <m.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image src={'/images/icons/cross.svg'} onClick={() => setMenuVisible(false)} width={70} height={100} alt="close menu" className="cursor-pointer" />
              </m.div>
            </div>
            <ul className="flex flex-col w-full items-center gap-[30px] mt-[35px]">
              {pages.map((e, index) =>
                <m.li
                  key={e}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link href={`/${e}`} legacyBehavior>
                    <a 
                      onClick={() => setMenuVisible(false)} 
                      className={cn(
                        'text-nowrap font-medium text-[24px] max-mui-md:text-[20px] max-smallest:text-[16px] text-gray-800 transition-colors duration-200 hover:text-[var(--purple)]', 
                        { 'text-[var(--purple)]': pathname === `/${e}` }
                      )}
                    >
                      {t(e)}
                    </a>
                  </Link>
                </m.li>
              )}
            </ul>

            <m.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="my-[40px]"
            >
              <LanguageSwitcher mobile />
            </m.div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;