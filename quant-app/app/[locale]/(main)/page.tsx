"use client"

import { useEffect, useState } from "react";
import { Link as NextLink } from '@/i18n/routing'
import { useTranslations } from "next-intl";
import { Box } from "@mui/material";
import NextProject from "@/src/components/NextProject";
import WhatWeOffer from "@/src/components/WhatWeOffer";
import "@/src/style/swiper.css";
import { usePathname, useSearchParams } from "next/navigation";
import TalkModal from "@/src/components/TalkPopup/TalkPopup";
import Introduction from "./_components/Introduction";
import QuanticaSlider from "./_components/QuanticaSlider";
import Projects from "./_components/Projects";
import Team from "./_components/Team";
import Vouches from "./_components/Vouches";

const MainPage = () => {
  const t = useTranslations("main");
  const pathname = usePathname();
  const searchParams = useSearchParams();


  useEffect(() => {
    const scrollTo = searchParams?.get('scrollTo');
    if (scrollTo) {
      const scrollToBlock = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
          if ('scrollBehavior' in document.documentElement.style) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            element.scrollIntoView();
          }
        }
      };

      setTimeout(() => {
        scrollToBlock(scrollTo);
      }, 100);
    }
  }, [pathname, searchParams]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseTalkModal = () => setIsModalOpen(false);

  return (
    <>
      <TalkModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        handleClose={handleCloseTalkModal}
      />
      <div className="container">
        <Introduction t={t} handleOpenModal={handleOpenModal} />
        <WhatWeOffer />
        <Box sx={{ mt: "50px", display: "flex", justifyContent: "center" }}>
          <NextLink href="/services">
            <button className="fill-btn">{t("ReadMore")}</button>
          </NextLink>
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
