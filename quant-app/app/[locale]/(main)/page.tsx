import { Link } from '@/i18n/routing'
import { getTranslations } from "next-intl/server";
import { Box } from "@mui/material";
import NextProject from "@/app/[locale]/_sections/NextProject";
import WhatWeOffer from "@/app/[locale]/_sections/WhatWeOffer";
import Blur from '@/components/Blur';


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
        <WhatWeOffer className='pt-10'/>
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
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
          <Blur
            color="#9C08FFB2"
            left="-10%"
            top="1100px"
            width="600px"
            height="600px"
            filter="blur(150px)"
            className="absolute max-[900px]:top-[1000px]"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
