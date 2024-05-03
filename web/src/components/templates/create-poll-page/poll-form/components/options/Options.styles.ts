import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const row: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const textField: SxProps<Theme> = {
  backgroundColor: "primary.light",
  borderRadius: 2,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
};
