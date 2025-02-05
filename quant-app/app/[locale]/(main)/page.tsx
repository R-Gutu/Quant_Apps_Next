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
      </div>
    </>
  );
};

export default Page;
