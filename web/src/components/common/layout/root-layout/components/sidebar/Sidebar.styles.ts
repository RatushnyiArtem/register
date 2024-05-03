import { SxProps, Theme } from "@mui/material";

export const sidebar: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "calc(100vh - 124px)",
};

export const links: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export const logout: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
};
