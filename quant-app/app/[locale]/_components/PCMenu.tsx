'use client'
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/utils";


const PCMenu = ({ setMenuVisible, setTalkModalOpen }: { setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>, setTalkModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("app-toolbar");
    const pathname = usePathname();
    const pages = ['services', 'projects', 'process', 'pricing', 'about-us', 'careers']

    return (
        <>
            <header className="fixed top-0 left-0 z-50 bg-[var(--header-bg-color)]/95 backdrop-blur-md border-b border-[#6A65FF]/10 w-full flex justify-between items-center
                           px-[16px] h-[108px]
                           small:px-[30px]
                           medium:px-[80px] medium:h-[85px]
                           big:px-[162px] big:h-[100px]
        ">
                <Link href="/" legacyBehavior className="w-[178px] h-[60px]">
                    <a className="w-[118px] mr-4 h-[40px] smallest:w-[178px] smallest:h-[60px] self-center flex justify-center items-center group">
                        <Image priority id="logo" src="/images/icons/Logo.svg" width={178} height={60} alt="Logo" className="transition-all duration-300 group-hover:brightness-125 group-hover:scale-[1.02]" />
                    </a>
                </Link>
                <nav>
                    <ul className="gap-[30px] max-small:hidden small:flex small:justify-between small:gap-[30px]">
                        {pages.map(e =>
                            <li key={e} className="relative group">
                                <Link href={`/${e}`} legacyBehavior>
                                    <a 
                                        className={cn(
                                            'text-nowrap font-medium text-[18px] text-white/80 hover:text-white duration-200 transition-colors py-2',
                                            { 'text-white': pathname === `/${e}` }
                                        )} 
                                        dangerouslySetInnerHTML={{__html: t.raw(e)}}
                                    />
                                </Link>
                                {/* Underline effect */}
                                <span className={cn(
                                    'absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] transition-all duration-300',
                                    pathname === `/${e}` ? 'w-full' : 'w-0 group-hover:w-full'
                                )} />
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="flex items-center">
                    {/* Phone numbers - visible on large screens */}
                    <a href="tel:+40756119304" className="text-white/70 hover:text-white text-[15px] font-medium mr-[16px] hidden big:block transition-colors duration-200">
                        +40 756 119 304
                    </a>
                    <a href="tel:+37368099992" className="text-white/70 hover:text-white text-[15px] font-medium mr-[24px] hidden big:block transition-colors duration-200">
                        +373 680 999 92
                    </a>

                    <span className="mr-[24px] hidden small:block"><LanguageSwitcher /></span>
                    <div className="nav-right flex justify-center items-center">
                        <button 
                            onClick={() => setTalkModalOpen(true)} 
                            className="group relative text-nowrap overflow-hidden rounded-[10px] px-[20px] py-[10px] text-[14px] smallest:px-[32px] smallest:text-[16px] flex justify-center items-center font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] hover:shadow-[0_0_25px_rgba(106,101,255,0.5)] hover:scale-[1.02]"
                        >
                            <span className="relative z-10">{t("lets-talk")}</span>
                        </button>
                    </div>
                    <div className="w-[46px] h-[46px] ml-[24px] block small:hidden">
                        <Image
                            priority
                            src="/images/elements/Button.svg"
                            alt="mobile menu"
                            width={46}
                            height={46}
                            className="w-full h-full cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
                            onClick={() => setMenuVisible(true)}
                        />
                    </div>
                </div>
            </header>

            {/* Spacer for fixed header */}
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