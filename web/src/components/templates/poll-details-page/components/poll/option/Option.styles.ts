import { SxProps, Theme } from "@mui/material";

export const optionContainer: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: 2,
  width: "100%",
  margin: 0,
  backgroundColor: "primary.light",
};

export const option: SxProps<Theme> = {
  display: "flex",
  padding: 1,
  borderRadius: 2,
  width: "100%",
  margin: 0,
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "green.900",
  },
};

export const optionWithoutResults = (isChecked: boolean): SxProps<Theme> => ({
  backgroundColor: isChecked ? "green.900" : "primary.light",
});

export const optionResults = (percentFromTotal: number): SxProps<Theme> => ({
  backgroundColor: "green.900",
  width: `${percentFromTotal}%`,
  transition: "width 0.3s",
});

export const checkIcon = (isChecked: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: 2,
  backgroundColor: "white.main",
  "&>svg": {
    fill: (theme) =>
      isChecked ? theme.palette.primary.main : theme.palette.gray["100"],
  },
});

export const votes: SxProps<Theme> = {
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  marginRight: 4,
};
