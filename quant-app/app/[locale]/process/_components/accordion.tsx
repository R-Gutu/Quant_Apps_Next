"use client"
import Image from "next/image"
import { useState } from "react"

const Accordion = ({id, title, text} : {id: string, title: string, text: string}) => {
    const [active, setActive] = useState<boolean>(false);
    const onClickAccordion = () => {
        setActive(prev => !prev);
    };

    return (
        <div 
            onClick={onClickAccordion} 
            className={`cursor-pointer pt-[41px] pr-[60px] pb-[41px] pl-[60px] flex flex-col gap-[30px] rounded-[12px] transition-colors duration-500 ease-in-out ${
                active 
                    ? "bg-[linear-gradient(87.57deg,_#5D5FEF_1.02%,_#0A1A3F_143.1%)] shadow-[0px_5px_15px_0px_#9B6BFFB2] shadow-[inset_0px_4px_8px_0px_#00000040]"
                    : "bg-transparent border-[2px] border-[#E1E4ED]"
            }`}
        >
            <div className={`flex justify-between ${active ? "" : "translate-y-4"}`}>
                <div className="flex gap-[25px] items-center">
                    <div className="font-semibold text-[60px] leading-[72.61px] tracking-[0%] text-[#B8B6FF]">{id}</div>
                    <h2 className="font-semibold text-[30px] leading-[36.31px] tracking-[0%] text-[#E5E9F0]">{title}</h2>
                </div>
                <div className={`${active ? "" : "hidden"} flex items-center`}>
                    <Image width={30} height={30} alt="cross" src="/images/icons/faqCross.svg"/>
                </div>
            </div>

            {/* Smooth Height Transition for Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <hr className="border-[1px] border-[#F5F5F5]" />
                <p className="w-full font-normal text-[22px] leading-[26.63px] tracking-[0%] text-[#E5E9F0] mt-4">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Accordion;
