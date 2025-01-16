import { useTranslations } from "next-intl";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

import Blur from "@/src/components/Blur";

import CloudStorage from "@/src/assets/images/cloud-storage.png";
import ItemsInNetBg from "@/src/assets/images/items-net-bg.png";
import Vector from "@/src/assets/icons/vector.svg";
import Apple from "@/src/assets/icons/apple.svg";
import Android from "@/src/assets/icons/android.svg";
import CrossPlatform from "@/src/assets/icons/cross-platform.svg";
import Settings from "@/src/assets/icons/settings.svg";

const WhatWeOffer = () => {
  const t = useTranslations("what-we-offer");
  
  return (
    <div className="offer" id="services">
      <Grid2>
        <Typography
          sx={{
            fontSize: "64px",
            fontFamily: "ClashDisplay, Inter, sans-serif",
            fontWeight: "600",
            "@media (max-width:960px)": {
              fontSize: "40px",
              lineHeight: "50px",
              textAlign: "center", // по центру для мобильных
            },
            "@media (max-width:600px)": {
              mt: "-55px",
              fontSize: "30px",
              lineHeight: "40px",
            },
          }}
          variant="h1"
        >
          {t("WhatWeOffer")}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: `"ClashDisplay", "Inter", sans-serif`,
            opacity: 0.75,
            textAlign: {
              xs: "center", // Center-aligned for all screens
            },
          }}
        >
          {t("CustomMobileApps")}
        </Typography>
      </Grid2>


      <Grid2 container justifyContent="end" width="100%" alignItems="center">
        <Box
          sx={{
            position: "absolute",
            left: {
              xs: "-10%", // Extra-small screens
              lg: "8%", // Large screens
              xl: "5%", // Extra-large screens
            },
            width: {
              xs: "218px", // Extra-small screens
              sm: "350px", // Small screens
              md: "474px", // Medium screens
            },
          }}
        >
          <Image
            src={CloudStorage}
            alt="CloudStorage"
            style={{
              maxWidth: "100%",
              height: "auto",
              position: "relative",
              zIndex: 1,
            }}
          />

          <Image
            src={ItemsInNetBg}
            alt=""
            style={{
              maxWidth: "150%",
              height: "auto",
              position: "absolute",
              top: "60%",
              left: "40%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <Blur
            sx={{
              opacity: {
                xs: 0, // скрыть на мобильных
                sm: 0, // скрыть на планшетах
                md: 1, // показать на экранах от 900px и больше
              },
              visibility: {
                xs: "hidden", // скрыть на мобильных
                sm: "hidden", // скрыть на планшетах
                md: "visible", // показать на экранах от 900px и больше
              },
            }}
            color="rgba(156, 8, 255, 0.8156512605042017)"
            left="-20%"
            width="400px"
            height="400px"
            filter="blur(160px)"
          />
        </Box>

        <Grid2
          container
          direction="column"
          gap="12px"
          size={{ xs: 6, lg: 7 }}
          sx={{
            zIndex: 2,
            justifyContent: "space-between",
            //  ml: "200px",
            // ml: { sm: "250px", md: "250px", lg: "250px", s: "200px" },
            "& img": {
              maxWidth: { xs: "22px", md: "100%" },
              height: { xs: "22px", md: "auto" },
            },
            "& h3": {
              fontFamily: "ClashDisplay, Inter, sans-serif",
              fontSize: { xs: "9px", md: "20px" },
              fontWeight: "500",
              lineHeight: { xs: "12px", md: "25px" },
            },
            "& p": {
              fontFamily: "Poppins, Inter, sans-serif",
              fontSize: { xs: "7.37px", md: "16px" },
              lineHeight: { xs: "12px", md: "25px" },
              opacity: "0.75",
              textAlign: "justify",
              maxWidth: "397px",
            },
          }}
        >

          <Grid2
            container
            gap={{ xs: "12px", md: "24px" }}
            sx={{
              ml: { md: "120px", xs: "0px" },
            }}
          >

            <Grid2
              container
              sx={{
                width: { xs: "30px", md: "64px" },
                height: { xs: "30px", md: "64px" },
                minWidth: { xs: "30px", md: "64px" },
                minHeight: { xs: "30px", md: "64px" },
                borderRadius: "8px",
                backgroundColor: "#6A65FF",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0px", md: "4px" },
              }}
            >
              <Image src={Vector} alt="Vector" />
            </Grid2>

            <Grid2 container direction="column" size={8}>
              <Typography variant="h3">
                {t("TailoredMobileAppDesign")}
              </Typography>

              <Typography>{t("TailoredMobileAppDesignDetails")}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container gap={{ xs: "12px", md: "24px" }}
            sx={{
              ml: { md: "120px", xs: "0px" },
            }}
          >
            <Grid2
              container
              sx={{
                width: { xs: "30px", md: "64px" },
                height: { xs: "30px", md: "64px" },
                minWidth: { xs: "30px", md: "64px" },
                minHeight: { xs: "30px", md: "64px" },
                borderRadius: "8px",
                backgroundColor: "#6A65FF",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0px", md: "4px" },
              }}
            >
              <Image src={Apple} alt="Apple" />
            </Grid2>

            <Grid2 container direction="column" size={8}>
              <Typography variant="h3">{t("IosAppDevelopment")}</Typography>

              <Typography>{t("IosAppDevelopmentDetails")}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container gap={{ xs: "12px", md: "24px" }}
            sx={{
              ml: { md: "120px", xs: "0px" },
            }}
          >
            <Grid2
              container
              sx={{
                width: { xs: "30px", md: "64px" },
                height: { xs: "30px", md: "64px" },
                minWidth: { xs: "30px", md: "64px" },
                minHeight: { xs: "30px", md: "64px" },
                borderRadius: "8px",
                backgroundColor: "#6A65FF",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0px", md: "4px" },
              }}
            >
              <Image src={Android} alt="Android" />
            </Grid2>

            <Grid2 container direction="column" size={8}>
              <Typography variant="h3">{t("AndroidAppDevelopment")}</Typography>

              <Typography>{t("AndroidAppDevelopmentDetails")}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container gap={{ xs: "12px", md: "24px" }}
            sx={{
              ml: { md: "120px", xs: "0px" },
              mt: { md: "20px", xs: "10px" },
            }}
          >
            <Grid2
              container
              sx={{
                width: { xs: "30px", md: "64px" },
                height: { xs: "30px", md: "64px" },
                minWidth: { xs: "30px", md: "64px" },
                minHeight: { xs: "30px", md: "64px" },
                borderRadius: "8px",
                backgroundColor: "#6A65FF",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "0px", md: "4px" },
              }}
            >
              <Image src={CrossPlatform} alt="CrossPlatform" />
            </Grid2>

            <Grid2 container direction="column" size={8}>
              <Typography variant="h3">
                {t("CrossPlatformReactNative")}
              </Typography>

              <Typography sx={{ fontSize: "16px" }}>
                {t("CrossPlatformReactNativeDetails")}
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 container gap={{ xs: "12px", md: "24px" }}
            sx={{
              ml: { md: "120px", xs: "0px" },
              mt: { md: "20px", xs: "0px" },
            }}
          >
            <Grid2
              container
              sx={{
                width: { xs: "30px", md: "64px" },
                height: { xs: "30px", md: "64px" },
                minWidth: { xs: "30px", md: "64px" },
                minHeight: { xs: "30px", md: "64px" },
                borderRadius: "8px",
                backgroundColor: "#6A65FF",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              <Image src={Settings} alt="Settings" />
            </Grid2>

            <Grid2 container direction="column" size={8}>
              <Typography variant="h3">
                {t("OngoingSupportMaintenance")}
              </Typography>

              <Typography sx={{ fontSize: "16px" }}>
                {t("OngoingSupportMaintenanceDetails")}
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default WhatWeOffer;
