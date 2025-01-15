import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import PropTypes from "prop-types";

const AppLink = (props) => {
  const { to, children } = props;
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        fontFamily: `"ClashDisplay", "Inter", sans-serif`,
        fontSize: "14px",
        lineHeight: "34px",
        color: "white",
        textAlign: "center",
        opacity: "0.75",
        fontWeight: "400",
        cursor: "pointer",
        position: "relative",
        width: "fit-content",
        transition: "all var(--transition)",
        "&:hover": {
          opacity: 1,
          transform: "translateX(5px)",
        },
      }}
    >
      {children}
    </MuiLink>
  );
};

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppLink;
