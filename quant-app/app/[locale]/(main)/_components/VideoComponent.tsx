"use client"
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import dynamic from 'next/dynamic'
const VideoModal = dynamic(() => import("./VideoModal"))

export default function VideoComponent({ ipadAlt, watchAlt } : { ipadAlt: string, watchAlt: string }) {
    const [videoOpen, setVideoOpen] = useState(false);
    
    return (
        <>
            <div className="flex items-center justify-center relative mt-[25px] w-full">
                {/* Glow effect behind iPad - CSS only */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[400px] h-[300px] bg-[#4A5DE5]/20 rounded-full blur-[100px]" />
                </div>
                
                {/* iPad image */}
                <Image 
                    src="/images/pictures/ipad.webp" 
                    priority 
                    width={578} 
                    height={443} 
                    alt={ipadAlt} 
                    className="h-auto w-[85%] min-[700px]:w-[530px] min-[1900px]:w-[578px] relative z-10 drop-shadow-2xl" 
                />
                
                {/* Play button - centered using inset-0 + flex */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Image 
                        onClick={() => setVideoOpen(true)}
                        src="/images/elements/watch.svg" 
                        width={261} 
                        height={120} 
                        alt={watchAlt}
                        className="h-auto w-[200px] min-[700px]:w-[220px] min-[1900px]:w-[261px] cursor-pointer transition-transform duration-200 hover:scale-110 drop-shadow-[0_0_30px_rgba(106,101,255,0.5)]"
                    />
                </div>
            </div>
            
            <AnimatePresence>
                {videoOpen && <VideoModal setIsOpen={setVideoOpen}/>}
            </AnimatePresence>
        </>
    )
}