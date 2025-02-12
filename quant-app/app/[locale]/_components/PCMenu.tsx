'use client'
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@mui/material";
import { cn } from "@/lib/utils/utils";


const PCMenu = () => {
    const t = useTranslations("app-toolbar");
    const isSmallScreen = useMediaQuery("(max-width:1100px)");
    const pathname = usePathname();

    const onClickBurger = () => {
        const mobileMenu = document.querySelector(".mobile-menu");
        mobileMenu?.classList.add("active");
    };

    const pages = ['services', 'projects', 'process', 'about-us', 'careers']

    return (
        <header className="fixed top-0 left-0 z-50 bg-[#051139] w-full  flex justify-between items-center
                           px-[16px] h-[108px]
                           small:px-[30px]
                           medium:px-[80px] medium:h-[85px]
                           big:px-[162px] big:h-[100px]
        ">
            <Link href="/" legacyBehavior className="w-[178px] h-[60px]">
                <a className="w-[118px] h-[40px] smallest:w-[178px] smallest:h-[60px] self-center flex justify-center items-center">
                    <Image priority id="logo" src="/icons/logo.svg" width={178} height={60} alt="Logo" />
                </a>
            </Link>
            <nav>
                <ul className="max-[1100px]:hidden small:flex small:justify-between small:gap-[30px]">
                    {pages.map(e =>
                        <li className={cn('', { 'active': pathname === `/${e}` })}>
                            <Link href={`/${e}`} legacyBehavior>
                                <a className="text-nowrap font-medium text-[18px] text-white">{t(e)}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

            <div className="flex">
                {isSmallScreen || <LanguageSwitcher mobile={isSmallScreen} />}
                <div className="nav-right flex justify-center items-center">
                    {pathname !== "/contact-us" && (
                        <Link
                            href='/talk-modal'
                            legacyBehavior
                        >
                            <a className="text-nowrap border-white border-[1px] text-white rounded-[8px] px-[24px] py-[8px] text-[16px] smallest:px-[40px] smallest:text-[18px] flex justify-center items-center font-semibold">
                                {t("lets-talk")}
                            </a>
                        </Link>
                    )}
                </div>
                {isSmallScreen &&
                    <Image
                        src="/icons/button.svg"
                        alt="mobile menu"
                        width={100}
                        height={100}
                        className="w-full h-full ml-[33px]"
                        onClick={onClickBurger}
                    />
                }
            </div>

        </header>
    )
}

export default PCMenu;