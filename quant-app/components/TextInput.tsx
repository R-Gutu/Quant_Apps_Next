import { Grid2 } from "@mui/material";
import PropTypes from "prop-types";

import CustomOutlinedTextField from "./CustomOutlinedTextField";

const TextInput = (props : any) => {
  const {
    label,
    placeholder,
    placeholderSx,
    value,
    onChange,
    inputSx,
    frameColor,
  } = props;

  const inputSxWithPlaceholderReset = [
    {
      padding: 0,
      "&::placeholder": placeholderSx,
    },
    ...(Array.isArray(props.inputSx) ? inputSx : [inputSx]),
  ];

  return (
    <Grid2 container direction="column" gap="8px">
      {label}

      <CustomOutlinedTextField
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        inputSx={inputSxWithPlaceholderReset}
        frameSx={{
          borderRadius: "6.24px",
          borderColor: frameColor,
          boxShadow: "0px 1px 5px #19213D14",
        }}
        frameOnHoverSx={{ borderColor: frameColor }}
      />
    </Grid2>
  );
};

TextInput.propTypes = {
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  placeholderSx: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string,
  inputSx: PropTypes.any,
  frameColor: PropTypes.string,
};

export default TextInput;
