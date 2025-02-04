import { getTranslations } from "next-intl/server";
import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Blur from "@/components/Blur";

const WhatWeOffer = async () => {
  const t = await getTranslations("what-we-offer");
  const offers = [
    {
      icon: "/icons/vector.svg",
      title: t("TailoredMobileAppDesign"),
      description: t("TailoredMobileAppDesignDetails"),
    },
    {
      icon: "/icons/apple.svg",
      title: t("IosAppDevelopment"),
      description: t("IosAppDevelopmentDetails"),
    },
    {
      icon: "/icons/android.svg",
      title: t("AndroidAppDevelopment"),
      description: t("AndroidAppDevelopmentDetails"),
    },
    {
      icon: "/icons/cross-platform.svg",
      title: t("CrossPlatformReactNative"),
      description: t("CrossPlatformReactNativeDetails"),
    },
    {
      icon: "/icons/settings.svg",
      title: t("OngoingSupportMaintenance"),
      description: t("OngoingSupportMaintenanceDetails"),
    },
  ];

  return (
    <div className="offer" id="services">
      <Grid2>
        <Typography
          className="!font-inter"
          sx={{
            fontSize: "64px",
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
        >
          {t("WhatWeOffer")}
        </Typography>

        <Typography
          className="!font-inter"
          variant="h2"
          sx={{
            fontSize: "16px",
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
            // overflow: "hidden",
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
          <Box sx={{ position: "relative" }}>
          <div className="relative top-[0px] left-[0px] w-full h-full -z-10">
          {/* max-[1000px]:left-[-200px] max-[600px]:left-[-400px] */}
            <Blur
                    color="#9C08FFB2"
                    left="0%"
                    top="0%"
                    width="600px"
                    height="600px"
                    filter="blur(150px)"
                    className="absolute"
              />
          </div>    
            <Image
              src="/images/cloud-storage.png"
              width={1000}
              height={0}
              // unoptimized
              alt="CloudStorage"
              style={{
                width: "auto",
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
              }}
            />

            <Image
              src="/images/items-net-bg.png"
              alt="ItemsBg"
              width={1000}
              height={0}
              // unoptimized
              style={{
                width: "auto",
                maxWidth: "150%",
                height: "auto",
                position: "absolute",
                top: "60%",
                left: "40%",
                transform: "translate(-45%, -50%)",
              }}
            />

          </Box>
        </Box>

        <Grid2
          container
          direction="column"
          gap="12px"
          size={7}
          sx={{
            zIndex: 2,
            justifyContent: "space-between",
            "& img": {
              maxWidth: { xs: "22px", md: "100%" },
              height: { xs: "22px", md: "auto" },
            },
            "& h3": {
              fontSize: { xs: "9px", md: "20px" },
              fontWeight: "500",
              lineHeight: { xs: "12px", md: "25px" },
            },
            "& p": {
              fontSize: { xs: "7.37px", md: "16px" },
              lineHeight: { xs: "12px", md: "25px" },
              opacity: "0.75",
              textAlign: "justify",
              maxWidth: "397px",
            },
          }}
        >
          {offers.map((offer, index) => (
            <Grid2
              key={index}
              container
              gap={{ xs: "12px", md: "24px" }}
              sx={{
                ml: { md: "120px", xs: "0px" },
                alignItems: "stretch",
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
                  position: "relative",
                }}
              >
                <Image src={offer.icon} alt={offer.title} width={100} height={0} className='w-auto h-auto' />
              </Grid2>

              <Grid2 container direction="column" size={8} sx={{ flexGrow: 1 }}>
                <Typography className="!font-inter" variant="h3">{offer.title}</Typography>
                <Typography className="!font-inter">{offer.description}</Typography>
              </Grid2>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      
    </div>
  );
};

export default WhatWeOffer;
