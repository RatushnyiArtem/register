import { SxProps, Theme } from "@mui/material";

export const searchBox: SxProps<Theme> = {
  backgroundColor: "white.main",
  borderWidth: 0,
  borderRadius: 3,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  paddingInline: 2,
  width: "60%",
};
