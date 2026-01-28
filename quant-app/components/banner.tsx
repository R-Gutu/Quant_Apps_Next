"use client"
import Image from "next/image"
import dynamic from 'next/dynamic'
const TalkModal = dynamic(() => import("@/components/TalkModal"))
import { ReactNode, useState } from "react"
import * as m from "motion/react-m"
import { bannerAnimation } from "@/lib/animations/bannerAnimation"

export default function Banner({ header, subHeader, src, className, button, icon, priority = false }: { header: string, subHeader: string | ReactNode, src: string, className?: string, button?: string, icon?: string, priority?: boolean }) {
    const [open, setOpen] = useState(false)
    
    return (
        <m.div 
            variants={bannerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`relative overflow-hidden w-full px-[16px] min-[600px]:px-[100px] min-[1000px]:px-[200px] py-[50px] min-[600px]:py-[100px] medium:px-[250px] rounded-[30px] bg-gradient-to-br from-[#141a76] via-[#1a237e] to-[#0d1445] text-white flex flex-col items-center justify-center border border-[#6A65FF]/20 shadow-[0_0_60px_rgba(106,101,255,0.15)] ${className}`}
        >
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    className="w-full h-full object-cover object-left opacity-40"
                    sizes="100vw"
                    width={1500}
                    height={800}
                    src={src}
                    alt=""
                    priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1445]/80 via-transparent to-[#0d1445]/40" />
            </div>
            
            {/* Icon */}
            {icon && (
                <m.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <Image 
                        className="mb-[40px] drop-shadow-2xl" 
                        src={icon} 
                        alt="icon" 
                        width={80} 
                        height={80} 
                    />
                </m.div>
            )}
            
            {/* Heading */}
            <h2 className="font-bold text-[26px] min-[600px]:text-[36px] medium:text-[44px] z-10 text-center min-[600px]:mb-[16px] leading-tight">
                {header}
            </h2>
            
            {/* Subheading */}
            <p className="font-normal text-[14px] min-[600px]:text-[16px] medium:text-[18px] z-10 text-center text-white/80 max-w-[600px]">
                {subHeader}
            </p>
            
            {/* CTA Button */}
            {button && (
                <button 
                    onClick={() => setOpen(true)} 
                    className="btn z-10 py-[16px] px-[40px] rounded-[12px] mt-[40px] bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] font-semibold text-[17px] shadow-lg hover:shadow-[0_0_30px_rgba(106,101,255,0.5)]"
                >
                    {button}
                </button>
            )}
            
            {button && open && <TalkModal isOpen={open} setIsOpen={setOpen} />}
        </m.div>
    )
}