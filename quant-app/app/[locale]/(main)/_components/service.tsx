import Image from "next/image"
import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function Service({ src, title, text, className, ariaLabel }: { src: string, title: string, text: string | ReactNode, className?: string, ariaLabel?: string }) {
    const t = await getTranslations("home");
    return (
        <div className={`group flex flex-col justify-between text-white p-[50px] max-[600px]:p-[20px] transition-all duration-300 hover:bg-[#6A65FF]/5 ${className}`}>
            <div>
                <div className="flex flex-col max-[600px]:flex-row max-[600px]:items-center max-[600px]:mb-[24px]">
                    {/* Icon container with hover effect */}
                    <div className="flex-shrink-0 min-[600px]:mb-[40px] border border-[#7D5AE6]/50 shadow-[0px_4px_8px_0px_#4A5DE580] w-[88px] h-[88px] max-[600px]:w-[58px] max-[600px]:h-[58px] rounded-[14px] flex justify-center items-center bg-gradient-to-b from-[#6A65FF] to-[#6A65FF]/20 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(106,101,255,0.4)] group-hover:scale-105">
                        <Image 
                            src={src} 
                            alt={title} 
                            width={40} 
                            height={40} 
                            className="max-[600px]:w-[26px] max-[600px]:h-[26px] transition-transform duration-300 group-hover:scale-110" 
                        />
                    </div>
                    <h3 className="max-[600px]:text-[20px] max-[600px]:ml-[14px] font-semibold text-[28px] max-[1600px]:text-[22px] min-[600px]:mb-[20px] transition-colors duration-300 group-hover:text-[#6DB9FF]">
                        {title}
                    </h3>
                </div>
                <p className="font-normal text-[16px] mb-[34px] text-[#B8BCC8] leading-relaxed">
                    {text}
                </p>
            </div>
            <Link href="/services" legacyBehavior aria-label={ariaLabel || ""} title={ariaLabel || ""}>
                <a className="max-[600px]:text-[14px] w-full h-[56px] text-[17px] font-semibold text-white flex justify-center items-center rounded-[10px] bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] btn shadow-lg hover:shadow-[0_0_25px_rgba(106,101,255,0.4)]" aria-label={ariaLabel || ""} title={ariaLabel || ""}>
                    <span className="sr-only">{ariaLabel || ""}</span>
                    {t("serviceButton")}
                </a>
            </Link>
        </div>
    )
}