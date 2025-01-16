//talkPopupInput.jsx
import { Typography } from "@mui/material";
import TextInput from "../TextInput";
import PropTypes from "prop-types";

const TalkPopupInput = (props) => {
  const { label, labelDescription, placeholder, value, onChange, height } = props;

  const labelSx = {
    color: "#6D758F",
    fontFamily: `"ClashDisplay", "Inter", sans-serif`,
    fontWeight: "600",
    fontSize: "14.55px",
    lineHeight: "20.78px",
  };

  return (
    <TextInput
      label={
        <Typography sx={labelSx}>
          {label}
          {labelDescription}
        </Typography>
      }
      placeholder={placeholder}
      placeholderSx={{
        color: "#C1C1C1",
        fontFamily: "Inter",
        fontSize: "14.55px",
        lineHeight: "20.78px",
      }}
      onChange={onChange}
      value={value}
      inputSx={{
        height: height,
        fontFamily: `"ClashDisplay", "Inter", sans-serif`,
        fontSize: "14.55px",
        lineHeight: "15.28px",
        color: "rgba(193, 193, 193, 1)",
        paddingInline: "12px",
        paddingTop: "8px"
      }}
      frameColor="rgba(25, 33, 61, 0.08)"
    />
  );
};

TalkPopupInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelDescription: PropTypes.node,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  height: PropTypes.string.isRequired
};

export default TalkPopupInput;
