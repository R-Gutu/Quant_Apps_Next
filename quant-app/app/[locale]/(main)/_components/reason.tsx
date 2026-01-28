import Image from "next/image"
import { ReactNode } from "react"

export default function Reason({ src, title, text, className }: { src: string, title: string, text: string | ReactNode, className?: string }) {
    return (
        <div className={`group flex flex-col justify-between text-white p-[80px] max-[1150px]:p-[40px] max-[600px]:px-[20px] transition-all duration-300 hover:bg-[#6A65FF]/5 ${className}`}>
            <div className="flex items-center mb-[40px]">
                {/* Icon with glow on hover */}
                <div className="flex-shrink-0 border border-[#7D5AE6]/50 shadow-[0px_4px_8px_0px_#4A5DE580] w-[88px] h-[88px] max-[600px]:w-[58px] max-[600px]:h-[58px] rounded-[14px] flex justify-center items-center bg-gradient-to-b from-[#6A65FF] to-[#6A65FF]/20 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(106,101,255,0.4)] group-hover:scale-105">
                    <Image 
                        src={src} 
                        alt={title} 
                        width={40} 
                        height={40} 
                        className="max-[600px]:w-[26px] max-[600px]:h-[26px] transition-transform duration-300 group-hover:scale-110" 
                    />
                </div>
                <h3 className="ml-[24px] font-semibold text-[24px] max-[600px]:text-[18px] transition-colors duration-300 group-hover:text-[#6DB9FF]">
                    {title}
                </h3>
            </div>
            <p className="font-normal text-[16px] text-[#B8BCC8] leading-relaxed">
                {text}
            </p>
        </div>
    )
}