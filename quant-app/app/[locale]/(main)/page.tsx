"use client"

import { Link } from '@/i18n/routing'
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";
import NextProject from "@/src/components/NextProject";
import WhatWeOffer from "@/src/components/WhatWeOffer";
import "@/src/style/swiper.css";

import Introduction from "./_components/Introduction";
import QuanticaSlider from "./_components/QuanticaSlider";
import Projects from "./_components/Projects";
import Team from "./_components/Team";
import Vouches from "./_components/Vouches";

const MainPage = () => {
  const t = useTranslations("main");


  return (
    <>
      <div className="container">
        <Introduction t={t} />
        <WhatWeOffer />
        <Box sx={{ mt: "50px", display: "flex", justifyContent: "center" }}>
          <Link href="/services">
            <button className="fill-btn">{t("ReadMore")}</button>
          </Link>
        </Box>
      </div>
      <QuanticaSlider />
      <section className="owr-work-section" id="projects">
        <div className="container">
          <Projects t={t} />
          <Team t={t} />
        </div>
      </section>
      <Vouches t={t} />
      <NextProject />
    </>
  );
};

export default MainPage;
