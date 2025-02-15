'use client'
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/utils";


const PCMenu = ({ setMenuVisible }: { setMenuVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("app-toolbar");
    const pathname = usePathname();
    const pages = ['services', 'projects', 'process', 'about-us', 'careers']

    return (
        <>
            <header className="fixed top-0 left-0 z-50 bg-[var(--header-bg-color)] w-full  flex justify-between items-center
                           px-[16px] h-[108px]
                           small:px-[30px]
                           medium:px-[80px] medium:h-[85px]
                           big:px-[162px] big:h-[100px]
        ">
                <Link href="/" legacyBehavior className="w-[178px] h-[60px]">
                    <a className="w-[118px] h-[40px] smallest:w-[178px] smallest:h-[60px] self-center flex justify-center items-center">
                        <Image priority id="logo" src="/images/icons/logo.svg" width={178} height={60} alt="Logo" />
                    </a>
                </Link>
                <nav>
                    <ul className="gap-[30px] max-[1100px]:hidden small:flex small:justify-between small:gap-[30px]">
                        {pages.map(e =>
                            <Link key={e} href={`/${e}`} legacyBehavior>
                                <a className={cn('text-nowrap font-medium text-[18px] text-white hover:text-[var(--purple)] duration-200 transition-colors', { 'text-[var(--purple)]': pathname === `/${e}` })}>{t(e)}</a>
                            </Link>
                        )}
                    </ul>
                </nav>
                <div className="flex items-center">
                    <span className="mr-[33px] hidden small:block"><LanguageSwitcher /></span>
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
                    <div className="w-[46px] h-[46px] ml-[33px] block small:hidden">
                        <Image
                            src="/images/elements/button.svg"
                            alt="mobile menu"
                            width={46}
                            height={46}
                            className="w-full h-full cursor-pointer"
                            onClick={() => setMenuVisible(true)}
                        />
                    </div>
                </div>
            </header>

            {/* this is a fake header, to give the same margin as the original header on the top of the page */}
            <div className="invisible w-full
                px-[16px] h-[108px]
                small:px-[30px]
                medium:px-[80px] medium:h-[85px]
                big:px-[162px] big:h-[100px]
            "></div>
        </>
    )
}

export default PCMenu;