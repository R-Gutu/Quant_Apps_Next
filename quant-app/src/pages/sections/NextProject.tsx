import { useTranslation } from "react-i18next";
import { Box, Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import { openLetsTalkModal } from "../../utils/modal";
import Hand3d from "../../assets/icons/hand3d.svg";
import Image from "next/image";

const NextProject = () => {
  const { t } = useTranslation("next-project");
  const smallScreen = useMediaQuery("(max-width:600px)");
  const mediumScreen = useMediaQuery("(max-width:1024px)");

  return (
    <Grid2
      container
      size={12}
      sx={{
        mt: "10px",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        paddingBlock: "100px 50px",
        "& h1": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "36px",
        },
        "& p": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          fontSize: "18px",
          lineHeight: "30px",
        },
      }}
    >
      <Grid2
        container
        size={10}
        sx={{
          backgroundColor: "#515DEF",
          borderRadius: "24px",
          height: "459px", // desktop остается без изменений
          alignItems: "center",
          justifyContent: "start",
          pb: "50px",
          px: "50px",
          ...(smallScreen && {
            height: "550px",
            pb: "30px",
            px: "20px",
            textAlign: "center",
          }),
        }}
      >
        <Grid2
          container
          direction="column"
          size={{ xl: 7, lg: 6, md: 5 }}
          gap="20px"
          sx={{
            ml: "100px",
            alignItems: "start",
            ...(smallScreen && {
              ml: 0,
              alignItems: "center",
            }),
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "start",
              ...(smallScreen && {
                mt: "150px",
                fontSize: "28px",
                lineHeight: "32px",
                textAlign: "center",
              }),
            }}
          >
            {t("ExcitedToWorkTogether")}
          </Typography>

          <Typography
            sx={{
              color: "white",
              opacity: "0.75",
              textAlign: "start",
              ...(smallScreen && {
                fontSize: "14px",
                lineHeight: "20px",
                textAlign: "center",
              }),
            }}
          >
            {t("LetsBringIdeasToLife")}
          </Typography>

          <Button
            sx={{
              width: "fit-content",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={() => openLetsTalkModal()}
          >
            <Typography
              sx={{
                color: "black !important",
                textTransform: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              {t("LetsTalk")}
            </Typography>
          </Button>
        </Grid2>
      </Grid2>

      {/* Блок с изображением */}
      <Box
        position="absolute"
        sx={{
          top: "0px",
          right: "0%",
          width: "600px",
          height: "auto",
          ...(smallScreen && {
            top: "0px",
            right: "20%",
            transform: "translateX(50%)",
            width: "300px",
            height: "300px",
          }),
        }}
      >
        <Image
          src={Hand3d}
          alt="Hand"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Grid2>
  );
};

export default NextProject;
