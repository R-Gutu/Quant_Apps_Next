import { Link } from '@/i18n/routing'
import { getTranslations } from "next-intl/server";
import { Box } from "@mui/material";
import NextProject from "@/app/[locale]/_sections/NextProject";
import WhatWeOffer from "@/app/[locale]/_sections/WhatWeOffer";


import Introduction from "./_components/Introduction";
import QuantAppsSlider from "./_components/QuantAppsSlider";
import Projects from "./_components/Projects";
import Team from "./_components/Team";
import Vouches from "./_components/Vouches";
// import Blur from '@/components/Blur';

const Page = async () => {
  const t = await getTranslations("main");

  return (
    <>
      <div className="">
        <Introduction />
        <WhatWeOffer />
        <Box sx={{ mt: "50px", display: "flex", justifyContent: "center" }}>
          <Link href="/services" legacyBehavior>
            <button className="fill-btn z-10">{t("ReadMore")}</button>
          </Link>
        </Box>
        <QuantAppsSlider />
        <section className="owr-work-section" id="projects">
          <div className="container">
            <Projects />
            <Team />
          </div>
        </section>
        <Vouches />
        <NextProject />
        {/* <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-[15%] left-0 w-[600px] h-[600px] rounded-full bg-[rgba(186,8,255,0.8156512605042017)] blur-[140px] z-[-10]"/>
      </div> */}
      </div>
    </>
  );
};

export default Page;
