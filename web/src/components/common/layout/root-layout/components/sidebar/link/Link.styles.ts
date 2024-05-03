import { SxProps, Theme } from "@mui/material";

export const link = (isActive: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  paddingBottom: 2,
  "&>*": {
    fill: isActive ? (theme) => theme.palette.primary.main : "black",
  },
});
