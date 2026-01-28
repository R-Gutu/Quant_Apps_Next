import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server";
import Image from "next/image"
import { ReactNode } from "react";

export default async function Review({ content, src, name, description, imgHeight = 70, className, link }: { content: ReactNode, src: string, name: string, description: string, imgHeight?: number, className?: string, link: string }) {
    const t = await getTranslations("home");
    
    return (
        <div className={`px-[80px] max-[1500px]:px-[40px] max-[600px]:px-[20px] min-[1150px]:pt-[100px] max-[1150px]:py-[50px] flex flex-col justify-between ${className}`}>
            {/* Quote */}
            <div className="relative">
                <span className="absolute -top-4 -left-4 text-[60px] text-[#6A65FF]/30 font-serif leading-none select-none">&ldquo;</span>
                <p className="font-medium italic text-[25px] text-[#6DB9FF] max-[1800px]:text-[20px] max-[600px]:text-[18px] max-[600px]:mb-[24px] leading-relaxed">
                    {content}
                </p>
            </div>
            
            {/* Author card */}
            <div className="mt-[20px] flex items-center justify-between border border-[#6A65FF]/20 p-[20px] rounded-[12px] bg-gradient-to-r from-[#24242433] to-[#6A65FF08] text-white backdrop-blur-sm">
                <div className="flex gap-[18px] items-center">
                    <Image 
                        src={src} 
                        alt={name} 
                        width={70} 
                        height={imgHeight}
                        style={{ height: imgHeight, width: 'auto' }}
                        className="object-contain"
                    />
                    <div>
                        <h2 className="font-semibold text-[20px] max-[1800px]:text-[16px]">{name}</h2>
                        <p className="font-normal text-[16px] max-[1800px]:text-[14px] text-[#B8BCC8]">{description}</p>
                    </div>
                </div>
                {name.includes("Sarah") && (
                    <Link href={link} legacyBehavior>
                        <a className="btn max-[600px]:hidden text-nowrap text-white bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] py-[14px] px-[24px] rounded-[10px] text-[16px] max-[1800px]:text-[14px] font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(106,101,255,0.4)]" target="_blank">
                            {t("reviewButton")}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}