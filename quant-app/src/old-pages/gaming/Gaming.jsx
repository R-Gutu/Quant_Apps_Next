import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";

import WhyChooseUs from "./WhyChooseUs";
import ReadyToCollaborate from "./ReadyToCollaborate";
import Blur from "../../components/Blur";

import Airplane from "../../assets/images/airplane.png";
import PinkApprove from "../../assets/icons/pink-approve.svg";
import PhonesWithTriangle from "../../assets/images/phones-with-triangle.png";
import PhonesWithGamepad from "../../assets/images/phones-with-gamepad.png";
import PhoenixCasino from "../../assets/images/phoenix-casino.png";
import Philosopher from "../../assets/images/philosopher.png";
import JokerCasino from "../../assets/images/joker-casino.png";
import RedCar from "../../assets/images/red-car.png";
import EmeraldsFruits from "../../assets/images/emerald-fruits.png";
import CasinoCards from "../../assets/images/casino-cards.png";

import "../../style/main.css";

const Gaming = () => {
  const { t } = useTranslation("gaming");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box
        className="container"
        position="relative"
        sx={{
          "& p": {
            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
            color: "white",
          },
          "& h1": {
            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
            color: "white",
          },
          "& h3": {
            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
            color: "white",
          },
        }}
      >
        <Grid2
          container
          direction="row"
          wrap="nowrap"
          sx={{ alignItems: "center" }}
        >
          <Grid2 container size={6}>
            <img
              style={{
                width: isSmallScreen ? "378px" : "1155px",
                top: "10px",
                marginLeft: "-20%",
              }}
              src={Airplane}
              alt="Airplane"
            />

            <Grid2 container direction="row" width="100%" gap="10px">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "32px", md: "64px" },
                  lineHeight: { xs: "11.7px", md: "30px" },
                  fontWeight: "600",
                  textAlign: "justify",
                }}
              >
                Aviator
              </Typography>

              <Grid2 container width="328px">
                <Typography
                  sx={{
                    fontSize: { xs: "7.02px", md: "15px" },
                    lineHeight: { xs: "11.7px", md: "18.45px" },
                    textAlign: "justify",
                  }}
                >
                  {t("AviatorDescription")}
                </Typography>
              </Grid2>
            </Grid2>

            <Blur
              color="blue"
              top="10%"
              left="0"
              width="66.7vw"
              height="66.7vw"
            />

            <Blur
              color="purple"
              width="66.7vw"
              height="66.7vw"
              top="0"
              right="0"
            />
          </Grid2>

          <Grid2
            container
            direction="column"
            wrap="nowrap"
            gap={{ xs: "10px", md: "30px" }}
            size={6}
            sx={{
              alignItems: "start",
              mt: { xs: "10%", md: "20%" },
              transform: `translateY(-20%)`,
              "& h3": {
                fontWeight: "500",
                fontSize: { xs: "6.96px", md: "20px" },
                lineHeight: { xs: "8.7px", md: "25px" },
              },
              "& img": {
                left: { xs: "-5%", md: "-10%" },
                top: "10%",
                width: { xs: "16.19px", md: "46.54px" },
                position: "absolute",
              },
            }}
          >
            <Grid2 container direction="row" rowGap="10px">
              <Typography
                sx={{
                  fontWeight: "600",
                  width: { xs: "75.75px", md: "217px" },
                  fontSize: { xs: "17.39px", md: "50px" },
                  lineHeight: { xs: "10.44px", md: "30px" },
                }}
                variant="h1"
              >
                iGaming
              </Typography>

              <Typography
                sx={{
                  width: { xs: "106.81px", md: "307px" },
                  fontSize: { xs: "5.22px", md: "15px" },
                  lineHeight: { xs: "6.42px", md: "18.45px" },
                }}
              >
                {t("ExceptionalIGamingApps")}
              </Typography>
            </Grid2>

            <Grid2
              container
              direction="row"
              gap="10px"
              width="100%"
              sx={{ position: "relative" }}
            >
              <img src={PinkApprove} alt="approve" />

              <Grid2 container direction="column" gap="0.4vw">
                <Typography variant="h3">
                  {t("GamblingAppsForAnyTheme")}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "5.57px", md: "16px" },
                    lineHeight: { xs: "8.91px", md: "25.6px" },
                    textAlign: "justify",
                    opacity: "0.75",
                  }}
                >
                  {`Aviator, Bonanza, Olympus, ${t("AndMore")}`}
                </Typography>
              </Grid2>
            </Grid2>

            <Grid2
              container
              direction="row"
              gap="10px"
              width="100%"
              sx={{ position: "relative" }}
            >
              <img src={PinkApprove} alt="approve" />

              <Grid2 container direction="column" gap="0.3vw">
                <Typography variant="h3">{t("IntuitiveUiUxDesign")}</Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "5.57px", md: "16px" },
                    lineHeight: { xs: "8.91px", md: "25.6px" },
                    textAlign: "justify",
                    opacity: "0.75",
                  }}
                >
                  {t("IntuitiveUiUxDesignDetails")}
                </Typography>
              </Grid2>
            </Grid2>

            <Grid2
              container
              direction="row"
              gap="10px"
              width="100%"
              sx={{ position: "relative" }}
            >
              <img src={PinkApprove} alt="approve" />

              <Grid2 container direction="column" gap="0.4vw">
                <Typography variant="h3">
                  {t("TailoredGamingSolutions")}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "5.57px", md: "16px" },
                    lineHeight: { xs: "8.91px", md: "25.6px" },
                    textAlign: "justify",
                    opacity: "0.75",
                  }}
                >
                  {t("TailoredGamingSolutionsDetails")}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>

          <img
            style={{
              position: "absolute",
              top: "10px",
              right: 0,
              zIndex: "-1",
              width: isSmallScreen ? "334.5px" : "960px",
              height: isSmallScreen ? "623px" : "1708px",
            }}
            src={PhonesWithGamepad}
            alt="Phone"
          />
        </Grid2>

        <Grid2
          container
          size={6}
          sx={{ mt: { xs: "10px", md: "20px", position: "relative" } }}
          direction="column"
        >
          <Typography
            sx={{
              fontSize: { xs: "7.02px", md: "18px" },
              width: { xs: "134px", md: "582px" },
              lineHeight: { xs: "11.7px", md: "30px" },
              textAlign: "justify",
            }}
          >
            {t("LookingForAppPassesAppStore")}
          </Typography>

          <img
            width={isSmallScreen ? "278px" : "713px"}
            height={isSmallScreen ? "181px" : "509px"}
            src={PhonesWithTriangle}
            alt="phones"
          />

          <Blur
            color="purple"
            width="66.7vw"
            height="66.7vw"
            left="0"
            top="20px"
          />
        </Grid2>

        <Grid2
          container
          sx={{
            marginBlock: { xs: "0 48px", md: "250px 96px" },
            marginInline: "auto",
            backgroundColor: "#6A65FF33",
            height: { xs: "70.88px", md: "246px" },
            maxWidth: { xs: "358px", md: "1242px" },
            borderRadius: { xs: "12.97px", md: "45px" },
            justifyContent: "space-evenly",
            alignItems: "center",
            "& span": { color: "#F192EF", ml: { xs: "1px", md: "10px" } },
            "& h1": {
              fontWeight: "700",
              textAlign: "center",
              fontSize: { xs: "17.87px", md: "62px" },
              lineHeight: { xs: "17.87px", md: "62px" },
            },
            "& p": {
              fontWeight: "500",
              textAlign: "center",
              fontSize: { xs: "6.92px", md: "24px" },
              lineHeight: { xs: "7.59px", md: "26px" },
            },
          }}
        >
          <Grid2 container direction="column">
            <Typography variant="h1">
              200<span>+</span>
            </Typography>
            <Typography>{t("LiveApplications")}</Typography>
          </Grid2>

          <Grid2 container direction="column">
            <Typography variant="h1">
              7<span>M</span>
            </Typography>
            <Typography>{t("Downloads")}</Typography>
          </Grid2>

          <Grid2 container direction="column">
            <Typography variant="h1">
              14<span>+</span>
            </Typography>
            <Typography>{t("TeamMembers")}</Typography>
          </Grid2>

          <Grid2 container direction="column">
            <Typography variant="h1">
              120<span>%</span>
            </Typography>
            <Typography>{t("CompaniesGrowth")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2
          sx={{ backgroundImage: `url(${CasinoCards})`, pb: "80px" }}
          position="relative"
        >
          <Grid2
            container
            width={{ xs: "290px", md: "794px" }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: { xs: "32px", md: "64px" },
                lineHeight: { xs: "39.36px", md: "78.72px" },
              }}
            >
              {t("UniqueAndBoldDesign")}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "8px", md: "18px" },
                lineHeight: { xs: "9.84px", md: "22.14px" },
              }}
            >
              {t("AppsCraftedWithPlatformSpecificPrecision")}
            </Typography>
          </Grid2>

          <Grid2
            container
            direction="row"
            gap="30px"
            justifyContent="end"
            alignItems="center"
            sx={{
              "& img": {
                width: {xs: "82.2px", md: "202px"},
                maxWidth: "300px",
              },
            }}
          >
            <img src={PhoenixCasino} alt="Phoenix" />

            <Grid2 container direction="column" gap="30px">
              <img src={JokerCasino} alt="Joker" />
              <img src={EmeraldsFruits} alt="EmeraldsFruits" />
            </Grid2>

            <Grid2 container direction="column" gap="30px" sx={{ transform: "translateY(-25%)" }}>
              <img src={RedCar} alt="RedCar" />
              <img src={Philosopher} alt="Philosopher" />
            </Grid2>
          </Grid2>

          <Blur
            color="blue"
            width="66.7vw"
            height="66.7vw"
            right="0"
            bottom="0"
          />
        </Grid2>

        <WhyChooseUs />
      </Box>

      <ReadyToCollaborate />
    </>
  );
};

export default Gaming;
