
import {
  Grid2,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ClientStoryType from "@/lib/types/ClientStoryType";


const ClientStory = ({ clientName, clientDescription, text } : ClientStoryType) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid2
      container
      direction="column"
      width="fit-content"
      sx={{
        "& p": {
          fontFamily: `${isSmallScreen ? "Space Grotesk" : "ClashDisplay"}, "Inter", sans-serif`,
          color: "white",
        },
        "& a": {
          fontFamily: `"ClashDisplay", "Inter", sans-serif`,
          fontSize: "16.51px",
          fontWeight: "500",
          lineHeight: "20.3px",
          color: "#515DEF",
          textDecoration: "none",
        },
      }}
    >
      <Grid2
        container
        alignItems="center"
        // textAlign="center"
        position="relative"
        width={{ xs: "330px", md: "500px" }}
        height={{ xs: "360px", md: "270px" }}
        marginInline={{ xs: "0px", md: "0px" }}
        paddingBottom="50px"
        paddingX="30px"
      >
        <Image
        width={520}
        height={0}
          style={{
            width: isSmallScreen ? "330px" : "520px",
            height: isSmallScreen ? "326px" : "220px",
            position: "absolute",
            zIndex: "-1",
            top: "1.5%",
            left: "50%",
            transform: `translateX(-50%)`,
          }}
          src={isSmallScreen ? "/images/mobile-comment-bubble.png" : "/images/comment-bubble.png"}
          alt="bubble"
        />

        <Grid2 container minHeight="120px" alignContent="center">
          <Typography
            height="100%"
            sx={{
              fontSize: "26.41px",
              lineHeight: "39.62px",
              // paddingX: "20px"
            }}
          >
            {text}
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2
          sx={{
            mt: "-15px",
            ml: "60px",
          }}
        >
          <p className="!font-clash !text-[17px] !text-[#515DEF] !font-medium">{clientName}</p>

          {clientDescription && (
            <Typography
              sx={{
                fontSize: "14.86px",
                lineHeight: "18.27px",
              }}
            >
              {clientDescription}
            </Typography>
          )}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ClientStory;
