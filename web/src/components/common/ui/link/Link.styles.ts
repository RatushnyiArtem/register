import { SxProps, Theme } from "@mui/material";

export const link: SxProps<Theme> = {
  color: "primary.main",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "primary.600",
  },
};
