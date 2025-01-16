'use client'
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Box, Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Hand3d from "../../assets/icons/hand3d.svg";
import TalkModal from "@/src/components/TalkPopup/TalkPopup"; // Import the TalkModal component

const NextProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("next-project");
  const smallScreen = useMediaQuery("(max-width:900px)");
  const mediumScreen = useMediaQuery("(max-width:1324px)");
  // const bigScreen = useMediaQuery("(max-width:1424px)");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            height: "459px",
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
              onClick={handleOpenModal} // Changed to use the new handler
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

        <Box
          position="absolute"
          sx={{
            top: "0px",
            right: "0%",
            width: "600px",
            height: "auto",
            ...(mediumScreen && {
              width: "500px",
              top: "0%",
              right: "0%",
            }),
            ...(smallScreen && {
              top: "0px",
              right: "20%",
              transform: "translateX(50%)",
              width: "330px",
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

      {/* Modal component */}
      <TalkModal 
        open={isModalOpen} 
        onClose={handleCloseModal}
      />
    </>
  );
};

export default NextProject;