import { useEffect, useState } from "react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { Button, Grid2, Typography, useMediaQuery } from "@mui/material";

import NextProject from "./sections/NextProject";
import { getRoadMapByLanguage } from "../utils/languageUtils";

import AppPhone from "../assets/images/app-phone.png";

import "../style/main.css";

const AboutUs = () => {
  const { t } = useTranslation("about-us");

  const mediumScreen = useMediaQuery("(max-width:900px)");
  const [expandAboutUsText, setExpandAboutUsText] = useState(false);
  const [roadMap, setRoadMap] = useState(
    getRoadMapByLanguage(i18next.language)
  );

  const toggleExpand = () => {
    setExpandAboutUsText(!expandAboutUsText);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    i18next.on("languageChanged", (lng) =>
      setRoadMap(getRoadMapByLanguage(lng))
    );

    return () => {
      i18next.off("languageChanged", (lng) =>
        setRoadMap(getRoadMapByLanguage(lng))
      );
    };
  }, []);

  return (
    <>
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
              <img
                style={{
                  maxWidth: "400px",
                  width: "140%",
                  objectFit: "contain",
                }}
                src={AppPhone}
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

        <img width="100%" src={roadMap} alt="RoadMap" key={roadMap} />

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

      <NextProject />
    </>
  );
};

export default AboutUs;
