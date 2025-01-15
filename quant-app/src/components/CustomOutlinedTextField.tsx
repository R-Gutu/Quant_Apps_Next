import React from "react";

import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const CustomOutlinedTextField = (props) => {
  const {
    sx,
    label,
    slotProps,
    type,
    value,
    onFocus,
    onBlur,
    frameOnHoverSx,
    frameOnFocusSx,
    labelOnFocusedSx,
    frameSx,
    placeholder,
    onChange,
    inputSx,
    inputAdornmentPositionEndSx
  } = props;

  return (
    <TextField
      sx={[
        {
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            frameOnHoverSx,
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            frameOnFocusSx,
          "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root":
            labelOnFocusedSx,
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": frameSx,
          "& input": inputSx,
          "& .MuiInputAdornment-positionEnd": inputAdornmentPositionEndSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      variant="outlined"
      slotProps={slotProps}
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

CustomOutlinedTextField.propTypes = {
  sx: PropTypes.any,
  label: PropTypes.node,
  slotProps: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  frameOnHoverSx: PropTypes.any,
  frameOnFocusSx: PropTypes.any,
  labelOnFocusedSx: PropTypes.any,
  frameSx: PropTypes.any,
  placeholder: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  inputSx: PropTypes.any,
  inputAdornmentPositionEndSx: PropTypes.any
};

export default CustomOutlinedTextField;
