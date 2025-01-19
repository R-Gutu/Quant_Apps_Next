import { Link } from '@/i18n/routing'
import { getTranslations } from "next-intl/server";
import { Box } from "@mui/material";
import NextProject from "@/app/[locale]/_sections/NextProject";
import WhatWeOffer from "@/app/[locale]/_sections/WhatWeOffer";


import Introduction from "./_components/Introduction";
import QuanticaSlider from "./_components/QuanticaSlider";
import Projects from "./_components/Projects";
import Team from "./_components/Team";
import Vouches from "./_components/Vouches";

const Page = async () => {
  const t = await getTranslations("main");

  return (
    <>
      <div className="container">
        <Introduction />
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
          <Projects />
          <Team />
        </div>
      </section>
      <Vouches />
      <NextProject />
    </>
  );
};

export default Page;
