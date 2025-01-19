import React, { FocusEventHandler, ChangeEventHandler } from "react";
import { SxProps } from "@mui/system";
import { TextField, TextFieldProps } from "@mui/material";

interface CustomOutlinedTextFieldProps {
  sx?: SxProps;
  label?: React.ReactNode;
  slotProps?: TextFieldProps["slotProps"];
  type?: string;
  value?: string;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  frameOnHoverSx?: SxProps;
  frameOnFocusSx?: SxProps;
  labelOnFocusedSx?: SxProps;
  frameSx?: SxProps;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputSx?: SxProps;
  inputAdornmentPositionEndSx?: SxProps;
}

const CustomOutlinedTextField: React.FC<CustomOutlinedTextFieldProps> = (props) => {
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
    inputAdornmentPositionEndSx,
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

export default CustomOutlinedTextField;
