import { SxProps, Theme } from "@mui/material";

export const gender = (checked?: boolean): SxProps<Theme> => ({
  backgroundColor: checked ? "primary.300" : "primary.light",
  padding: "8px 12px",
  borderRadius: "8px",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "primary.300",
  },
});

export const radio: SxProps<Theme> = {
  "&:hover": {
    backgroundColor: "transparent",
  },
};
