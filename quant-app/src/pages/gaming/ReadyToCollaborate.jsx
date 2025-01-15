import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { openLetsTalkModal } from "../../utils/modal";
import CasinoAutomat from "../../assets/images/casino-automat.png";
import MobileCasinoAutomat from "../../assets/images/mobile-casino-automat.png";
import CasinoCards from "../../assets/images/casino-cards.png";
import MobileCasinoCards from "../../assets/images/mobile-casino-cards.png";

const ReadyToCollaborate = () => {
  const { t } = useTranslation("ready-to-collaborate");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2
      container
      sx={{
        mt: "50px",
        overflow: "hidden",
        justifyContent: "center",
        paddingBlock: { xs: "150px 50px", md: "190px 50px" },
        "& h1": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          color: "white",
          fontWeight: 700,
          fontSize: { xs: "32px", md: "40px" },
          lineHeight: { xs: "36px", md: "36px" },
        },
        "& p": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          fontSize: { xs: "18px", md: "18px" },
          lineHeight: { xs: "23.91px", md: "30px" },
        },
      }}
    >
      <Grid2
        container
        size={10}
        sx={{
          backgroundColor: "#515DEF",
          position: "relative",
          borderRadius: "24px",
          height: { xs: "659px", md: "409px" },
          width: { xs: "375px", md: "1301px" },
          alignItems: { xs: "end", md: "center" },
          justifyContent: { xs: "center", md: "start" },
          pb: "50px",
        }}
      >
        <Grid2
          container
          direction="column"
          gap="20px"
          width={{ xs: "428px", md: "1301px" }}
          sx={{
            ml: { xs: "0px", md: "100px" },
            alignItems: { xs: "center", md: "start" },
            justifyContent: { xs: "end", md: "center" },
          }}
        >
          <Typography
            variant="h1"
            textAlign={{ xs: "center", md: "left" }}
            width={{ xs: "305px", md: "582px" }}
          >
            {t("ReadyToCollaborateWithUs")}
          </Typography>

          <Typography
            sx={{
              color: "white",
              opacity: "0.75",
              width: { xs: "303px", md: "609px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t("LetsTurnIdesIntoReality")}
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
                color: "black",
                textTransform: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              {t("LetsTalk")}
            </Typography>
          </Button>
        </Grid2>

        <Box
          position="absolute"
          sx={{
            top: { xs: "-25%", md: 0 },
            height: { xs: "480px", md: "679px" },
            width: { xs: "412px", md: "1362px" },
            right: { xs: "0", md: "-30%" },
          }}
        >
          <img
            width={isSmallScreen ? "412px" : "1362px"}
            height={isSmallScreen ? "480px" : "679px"}
            src={isSmallScreen ? MobileCasinoCards : CasinoCards}
            alt="Cards"
          />
        </Box>

        <Box
          position="absolute"
          overflow="hidden"
          sx={{
            width: { xs: "377.53px", md: "725px" },
            height: { xs: "464px", md: "725px" },
            top: "-23%",
            right: { xs: "-50%", md: "0" },
            transform: { xs: "translateX(-50%)", md: "translateX(20%)" },
          }}
        >
          <img
            src={isSmallScreen ? MobileCasinoAutomat : CasinoAutomat}
            alt="Automat"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ReadyToCollaborate;
