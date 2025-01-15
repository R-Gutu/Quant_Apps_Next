import {
  Grid2,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import Image from "next/image";

import CommentBubble from "../assets/images/comment-bubble.png";
import MobileCommentBubble from "../assets/images/mobile-comment-bubble.png";

const ClientStory = (props : any) => {
  const { clientName, clientDescription, text } = props;

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
        position="relative"
        width={{ xs: "270px", md: "414px" }}
        height={{ xs: "326px", md: "220px" }}
        marginInline={{ xs: "30px", md: "43px" }}
      >
        <Image
          style={{
            width: isSmallScreen ? "330px" : "500px",
            height: isSmallScreen ? "326px" : "220px",
            position: "absolute",
            zIndex: "-1",
            top: "1.5%",
            left: "50%",
            transform: `translateX(-50%)`,
          }}
          src={isSmallScreen ? MobileCommentBubble : CommentBubble}
          alt="bubble"
        />

        <Grid2 container minHeight="120px" alignContent="center">
          <Typography
            height="100%"
            sx={{
              fontSize: "26.41px",
              lineHeight: "39.62px",
            }}
          >
            {text}
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2
          sx={{
            mt: "20px",
            ml: "60px",
          }}
        >
          <Link>{clientName}</Link>

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

ClientStory.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientDescription: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ClientStory;
