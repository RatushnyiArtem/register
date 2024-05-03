import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  gap: "24px",
  paddingBlock: "50px",
};

export const form: SxProps<Theme> = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
};
