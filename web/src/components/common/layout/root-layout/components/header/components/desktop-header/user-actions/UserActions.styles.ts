import { SxProps, Theme } from "@mui/material";

export const userActions: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 3,
};

export const userImage: SxProps<Theme> = {
  backgroundColor: "#ccc",
  borderRadius: "100%",
  width: 50,
  height: 50,
};
