"use client"

import { Button, Grid2, Typography, useMediaQuery } from "@mui/material"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { useState } from "react";


const About = () => {
  const t = useTranslations("about-us");
  const mediumScreen = useMediaQuery("(max-width:900px)");
  const [expandAboutUsText, setExpandAboutUsText] = useState(false);


  const toggleExpand = () => {
    setExpandAboutUsText(!expandAboutUsText);
  };
  return (
    <div>
      <div className="about container">
        <div className="about-info">
          <Grid2
            container
            direction="row"
            sx={{
              display: "flex",
              marginTop: "210px",
              position: "relative",
              zIndex: 1,
              justifyContent: "center",
            }}
          >
            <Grid2 container size={3} alignContent="start" height="fit-content">
            <Image
                width={400}
                height={0}
                className=" max-w-[400px] w-[140%] object-contain"
                src="/images/app-phone.png"
                alt="Iphone"
              />
            </Grid2>

            <Grid2
              container
              size={9}
              gap="30px"
              alignContent="start"
              height="fit-content"
            >
              <Grid2
                container
                gap="5px"
                sx={{
                  alignItems: "center",
                  height: "fit-content",
                  "& h1": {
                    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    color: "white",
                    fontSize: "64px",
                    fontWeight: "600",
                  },
                  "& p": {
                    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    color: "white",
                    fontSize: "18px",
                  },
                }}
              >
                <Grid2 width="fit-content">
                  <Typography variant="h1">{t("AboutUs")}</Typography>
                </Grid2>

                <Grid2 size={6}>
                  <Typography>
                    {t("WhereInnovationsMeetsVisionCrafting")}
                  </Typography>
                </Grid2>
              </Grid2>

              <Grid2
                container
                sx={{
                  height: "fit-content",
                  "& p": {
                    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                    color: "white",
                    fontSize: "22px",
                  },
                }}
              >
                <Typography>{t("AboutUsTextStaticParagraph")}</Typography>

                <Typography sx={{ display: mediumScreen ? "none" : "block" }}>
                  {t("ExpandableAboutUsTextParagraphFirstPart")}
                  <br />
                  {t("ExpandableAboutUsTextParagraphSecondPart")}
                  <br />
                  {t("ExpandableAboutUsTextParagraphThirdPart")}
                </Typography>
              </Grid2>
            </Grid2>

            <Grid2
              container
              sx={{
                display: mediumScreen && expandAboutUsText ? "block" : "none",
                "& p": {
                  fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                  color: "white",
                  fontSize: "22px",
                },
              }}
            >
              <Typography>
                {t("ExpandableAboutUsTextParagraphFirstPart")}
              </Typography>

              <Typography>
                {t("ExpandableAboutUsTextParagraphSecondPart")}
              </Typography>

              <Typography>
                {t("ExpandableAboutUsTextParagraphThirdPart")}
              </Typography>
            </Grid2>

            <Grid2
              container
              sx={{
                mt: "20px",
                display: mediumScreen ? "block" : "none",
              }}
            >
              {expandAboutUsText ? (
                <Button
                  onClick={() => toggleExpand()}
                  sx={{
                    border: "1px solid white",
                    backgroundColor: "transparent",
                    width: "136px",
                    height: "40px",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "transparent" },
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                      color: "white",
                      fontSize: "16px",
                    }}
                  >
                    {t("Collapse")}
                  </Typography>
                </Button>
              ) : (
                <Button
                  onClick={() => toggleExpand()}
                  sx={{
                    backgroundColor: "#6A65FF",
                    width: "120px",
                    height: "27px",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "none",
                      fontFamily: `"ClashDisplay", "Inter", sans-serif`,
                      color: "white",
                      fontSize: "10px",
                      width: "fit-content",
                      borderRadius: "5px",
                    }}
                  >
                    {t("ReadMore")}
                  </Typography>
                </Button>
              )}
            </Grid2>
          </Grid2>

          <span className="about-info-img"></span>
          <span className="about-info-img-2"></span>
          <span className="about-info-img-3"></span>
        </div>
      </div>
    </div>
  )
}

export default About