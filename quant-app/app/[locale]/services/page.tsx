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
    <div className="">

    </div>
  );
};

export default Page;