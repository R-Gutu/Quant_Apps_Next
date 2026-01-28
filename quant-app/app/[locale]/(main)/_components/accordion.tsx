'use client'
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils/utils";
import Cross from "./cross";

export default function Accordion({ question, answer, number, className }: { question: string, answer: string | ReactNode, number: string, className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div 
            className={cn(
                "px-[50px] max-[1500px]:px-[20px] py-[50px] max-[600px]:py-[34px] border-solid border-[#6A65FF] transition-colors duration-300 cursor-pointer",
                { "bg-[#6A65FF]/5": isOpen },
                className
            )}
            onClick={() => setIsOpen(p => !p)}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[24px] max-[600px]:gap-[16px]">
                    {/* Number badge */}
                    <div className={cn(
                        "relative flex justify-center items-center text-white text-[28px] max-[600px]:text-[22px] w-[72px] h-[72px] max-[600px]:w-[50px] max-[600px]:h-[50px] rounded-[14px] transition-all duration-300 border border-transparent overflow-hidden flex-shrink-0",
                        { 
                            "border-[#6A65FF]/60 shadow-[0_0_20px_rgba(106,101,255,0.3)]": isOpen,
                            "hover:border-[#6A65FF]/30": !isOpen
                        }
                    )}>
                        <span className={cn(
                            "absolute inset-0 transition-opacity duration-300 bg-gradient-to-b from-[#6A65FF]/20 to-transparent",
                            { "opacity-0": isOpen }
                        )} />
                        <span className={cn(
                            "absolute inset-0 transition-opacity duration-300 bg-gradient-to-b from-[#6A65FF] to-[#6A65FF]/30 opacity-0",
                            { "opacity-100": isOpen }
                        )} />
                        <span className="relative font-semibold">{number}</span>
                    </div>

                    {/* Question */}
                    <h2 className={cn(
                        "font-medium text-[20px] text-white/90 duration-300 transition-colors max-[600px]:text-[15px] pr-4",
                        { "text-[#6DB9FF]": isOpen }
                    )}>
                        {question}
                    </h2>
                </div>
                
                {/* Toggle button */}
                <div 
                    className={cn(
                        "flex-shrink-0 p-[8px] w-[36px] h-[36px] rounded-full border border-[#6A65FF]/30 duration-300 transition-all will-change-transform hover:border-[#6A65FF]/60",
                        { "rotate-45 bg-[#6A65FF]/20": isOpen }
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(p => !p);
                    }}
                >
                    <Cross className={cn("fill-white/80 duration-300 transition-colors w-full h-full", { "fill-[#6DB9FF]": isOpen })} />
                </div>
            </div>
            
            {/* Answer */}
            <div 
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <p className="ml-[96px] max-[600px]:ml-[66px] max-[600px]:text-[14px] font-normal text-[16px] text-[#B8BCC8] leading-relaxed pt-4">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}