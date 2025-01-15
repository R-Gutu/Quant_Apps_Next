import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useParams } from "next/navigation";
import { routing } from "@/i18n/routing";

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

const LanguageSwitcher = (props: { mobile?: boolean }) => {
  const { mobile } = props;
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [activeLng, setActiveLng] = useState(currentLocale);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangeLanguage = (value: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${value}`);
    router.push(newPathname);
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
          {routing.locales.map((language) => (
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
            IconComponent={() => null}
            slotProps={{
              input: { sx: { margin: 0, padding: 0 } },
              root: { sx: { margin: 0, padding: 0 } },
            }}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={currentLocale}
            onChange={(e) => handleChangeLanguage(e.target.value)}
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
            {routing.locales.map((language) => (
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