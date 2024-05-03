import { SxProps, Theme } from "@mui/material";

export const poll: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 2,
  backgroundColor: "white.main",
  borderRadius: 2,
  padding: 2,
  gridColumn: {
    xs: "span 12",
    md: "span 3",
  },
  cursor: "pointer",
};

export const content: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const user: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid",
  borderColor: "gray.200",
  paddingTop: 1,
};

export const author: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  alignItems: "center",
  "&>svg": {
    fill: (theme) => theme.palette.gray["100"],
  },
};
