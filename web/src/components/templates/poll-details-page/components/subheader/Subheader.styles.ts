import { SxProps, Theme } from "@mui/material";

export const subheader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 4,
};

export const title: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const titleInfo: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  "&>svg": {
    fill: (theme) => theme.palette.gray["100"],
  },
};
