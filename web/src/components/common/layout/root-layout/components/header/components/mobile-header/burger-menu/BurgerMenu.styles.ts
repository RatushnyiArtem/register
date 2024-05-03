import { SxProps, Theme } from "@mui/material";

export const burgerMenu: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "absolute",
  top: "84px",
  left: 0,
  width: "100%",
  padding: 2,
  backgroundColor: "primary.light",
  height: "calc(100vh - 84px)",
  zIndex: 9999,
};

export const links: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
