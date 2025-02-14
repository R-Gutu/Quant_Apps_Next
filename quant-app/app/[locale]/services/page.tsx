import { getTranslations } from "next-intl/server";
import Image from 'next/image'
import NextProject from "../_sections/NextProject";
import WhatWeOffer from "../_sections/WhatWeOffer";
import Accordion from "./_components/Accordion";
import WhyIOS from "./_components/WhyIOS";
import Blur from "@/components/Blur";

const Page = async () => {
  const t = await getTranslations("services");

  return (
    <div className="px-[161px] mt-[112px] font-inter ">
      <div className=" flex flex-col gap-4">
        <h1 className="font-semibold text-[48px] leading-[58.09px] tracking-[0] text-[#FFFFFF]">Design</h1>
        <p className="text-[#E6E6E6] font-normal text-[18px] leading-[27px] tracking-[-0.006em]">At Quant-Apps, our design team is dedicated to crafting visually striking, user-focused designs that engage your audience and strengthen your brand. We believe that exceptional design goes beyond aesthetics—it's about delivering seamless and intuitive user experiences.</p>
        <div className="bg-[#4A6ED1] w-fit rounded-[8px] p-[12px_14px] gap-[10px] font-normal text-[22px] leading-[26.63px] tracking-[0] text-[#FFFFFF]">Our design services include:</div>
      </div>
    </div>
  );
};

export default Page;