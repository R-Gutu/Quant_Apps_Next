'use client'

import { Grid2, Typography } from "@mui/material"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"

import { getRoadMapByLanguage } from "@/src/utils/languageUtils";
import { useState } from "react";

const TimeLine = () => {

    const t = useTranslations("about-us");

    const currentLocale = useLocale();

    const [roadMap, setRoadMap] = useState(
        getRoadMapByLanguage(currentLocale)
      );

  return (
    <div>
        <Grid2
        container
        sx={{
          justifyContent: "center",
          paddingLeft: "30px",
          mt: "200px",
        }}
      >
        <Grid2
          container
          gap="1.6vw"
          sx={{
            alignItems: "end",
            height: "fit-content",
            "& h1": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              fontSize: "5.3vw",
              fontWeight: "600",
            },
            "& p": {
              fontFamily: `"ClashDisplay", "Inter", sans-serif`,
              color: "white",
              fontSize: "1.5vw",
            },
          }}
        >
          <Grid2 width="fit-content">
            <Typography variant="h1">{t("Timeline")}</Typography>
          </Grid2>

          <Grid2 size={5}>
            <Typography>{t("ShapingFutureMilestone")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2 container height="1vw" justifyContent="end" size={12} mb="50px">
          <span
            style={{
              height: "100%",
              width: "77%",
              backgroundColor: "#555DEB80",
            }}
          />
        </Grid2>

        <Image width={0} style={{ width: '100%' }} src={roadMap} alt="RoadMap" key={roadMap} />

        <Grid2
          container
          sx={{
            color: "#C0C4CD",
            width: "100%",
            "& p": { fontFamily: `"ClashDisplay", "Inter", sans-serif`, fontSize: "1.5vw" },
          }}
          gap="13.12%"
          direction="row"
        >
          <Grid2 width="20%">
            <Typography>{t("GoodIdeaDetails")}</Typography>
          </Grid2>

          <Grid2 width="20%">
            <Typography>{t("IncreaseDetails")}</Typography>
          </Grid2>

          <Grid2 width="20%">
            <Typography>{t("InnovationDetails")}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default TimeLine