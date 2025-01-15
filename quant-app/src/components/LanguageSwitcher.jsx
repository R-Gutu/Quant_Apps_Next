import { useState } from "react";
import i18next from "i18next";

import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";

const LanguageSwitcher = (props) => {
  const { mobile } = props;

  const [activeLng, setActiveLng] = useState(i18next.options.lng ?? "en");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangeLanguage = (value) => {
    i18next.changeLanguage(value);

    localStorage.setItem("lng", value);
    setActiveLng(value);
  };

  return (
    <Box
      sx={{
        "& .MuiInputBase-formControl": {
          marginTop: "0 !important",
        },
        "& .MuiSelect-standard": {
          paddingRight: "0 !important",
        },
      }}
    >
      {mobile ? (
        <Grid2 container direction="column">
          {i18next?.options?.preload?.map((language) => (
            <Button
              key={language}
              value={language}
              onClick={() => handleChangeLanguage(language)}
              sx={{ paddingBlock: "5px", paddingInline: "2px" }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: activeLng === language ? "#6A65FF" : "white",
                }}
              >
                {language}
              </Typography>
            </Button>
          ))}
        </Grid2>
      ) : (
        <FormControl sx={{ m: 1, textAlign: "center" }}>
          <InputLabel sx={visuallyHidden}>Language</InputLabel>

          <Select
            variant="standard"
            disableUnderline
            slotProps={{
              input: { sx: { margin: 0, padding: 0 } },
              root: { sx: { margin: 0, padding: 0 } },
            }}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={i18next.language}
            onChange={(e) => handleChangeLanguage(e.target.value)}
            IconComponent={() => {}}
            autoWidth
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                style: {
                  backgroundColor: "#080404",
                  zIndex: 9999,
                },
              },
            }}
            renderValue={(value) => (
              <Typography
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                {value}
              </Typography>
            )}
          >
            {i18next?.options?.preload?.map((language) => (
              <MenuItem
                key={language}
                value={language}
                sx={{ paddingBlock: "5px", paddingInline: "2px" }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: activeLng === language ? "#6A65FF" : "white",
                  }}
                >
                  {language}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

LanguageSwitcher.propTypes = {
  mobile: PropTypes.bool,
};

export default LanguageSwitcher;
