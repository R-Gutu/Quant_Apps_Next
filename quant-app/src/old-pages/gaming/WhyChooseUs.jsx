import { useTranslation } from "react-i18next";

import { Grid2, Typography } from "@mui/material";

import Gear from "../../assets/icons/gear.svg";
import Luggage from "../../assets/icons/luggage.svg";
import Marker from "../../assets/icons/marker.svg";
import Diamond from "../../assets/icons/diamond.svg";

const WhyChooseUs = () => {
  const { t } = useTranslation("why-choose-us");

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      gap="50px"
      sx={{
        mt: "30px",
        "& h1": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
        },
        "& p": { fontFamily: "Poppins", color: "white", opacity: "0.75" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "35.2px", md: "52.8px" },
          fontWeight: "600",
        }}
      >
        {t("WhyChooseUs")}
      </Typography>

      <Grid2
        container
        spacing={2}
        rowGap={{ xs: 6, md: 12 }}
        justifyContent="space-evenly"
        sx={{
          "& img": {
            width: { xs: "48.24px", md: "75.09px" },
          },
          "& h1": {
            fontWeight: "500",
            lineHeight: { xs: "16.06px", md: "25px" },
            fontSize: { xs: "12.85px", md: "20px" },
          },
          "& p": {
            textAlign: "justify",
            width: { xs: "291px", md: "466px" },
            fontSize: { xs: "10.28px", md: "16px" },
            lineHeight: { xs: "16.45px", md: "25.6px" },
          },
        }}
      >
        <Grid2
          container
          direction="row"
          width={{ xs: "357px", md: "569px" }}
          alignItems="start"
        >
          <img src={Gear} alt="Gear" />

          <Grid2 container direction="column">
            <Typography variant="h1">
              {t("HighQualityCustomization")}
            </Typography>

            <Typography>{t("HighQualityCustomizationDetails")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="row"
          width={{ xs: "357px", md: "569px" }}
          alignItems="start"
        >
          <img src={Marker} alt="Marker" />

          <Grid2 container direction="column">
            <Typography variant="h1">{t("GlobalReach")}</Typography>

            <Typography>{t("GlobalReachDetails")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="row"
          width={{ xs: "357px", md: "569px" }}
          alignItems="start"
        >
          <img src={Luggage} alt="Luggage" />

          <Grid2 container direction="column">
            <Typography variant="h1">{t("FlexibleCollaboration")}</Typography>

            <Typography>{t("FlexibleCollaborationDetails")}</Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="row"
          width={{ xs: "357px", md: "569px" }}
          alignItems="start"
        >
          <img src={Diamond} alt="Diamond" />

          <Grid2 container direction="column">
            <Typography variant="h1">{t("ExceptionalQuality")}</Typography>

            <Typography>{t("ExceptionalQualityDetails")}</Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WhyChooseUs;
