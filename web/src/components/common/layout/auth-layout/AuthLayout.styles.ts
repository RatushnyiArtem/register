import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  paddingBlock: "50px",
  height: { sm: "100vh" },
  paddingInline: { xs: 2 },
};

export const leftBlock: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginLeft: { sm: "50px" },
};

export const rightBlock: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: (theme) => theme.palette.white.main,
  paddingInline: { xs: 2 },
};

export const subtitle: SxProps<Theme> = {
  color: (theme) => theme.palette.gray[100],
};
