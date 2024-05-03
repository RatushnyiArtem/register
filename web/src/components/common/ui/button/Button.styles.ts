import { SxProps, Theme } from "@mui/material";
import { ButtonColor, ButtonState, ButtonVariant } from "./types";

import getColors from "./util/get-color";

export const button = (
  color: ButtonColor,
  variant: ButtonVariant
): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  width: "100%",
  gap: 2,
  textTransform: "none",
  padding: "16px",

  border: `2px solid`,
  color: getColors(color, variant, ButtonState.DEFAULT).textColor,
  backgroundColor: getColors(color, variant, ButtonState.DEFAULT)
    .backgroundColor,
  borderColor: getColors(color, variant, ButtonState.DEFAULT).borderColor,
  "&:hover": {
    color: getColors(color, variant, ButtonState.HOVER).textColor,
    backgroundColor: getColors(color, variant, ButtonState.HOVER)
      .backgroundColor,
    borderColor: getColors(color, variant, ButtonState.HOVER).borderColor,
  },
  "&:active": {
    color: getColors(color, variant, ButtonState.ACTIVE).textColor,
    backgroundColor: getColors(color, variant, ButtonState.ACTIVE)
      .backgroundColor,
    borderColor: getColors(color, variant, ButtonState.ACTIVE).borderColor,
  },
  "&:disabled": {
    backgroundColor: getColors(color, variant, ButtonState.DISABLED)
      .backgroundColor,
    borderColor: getColors(color, variant, ButtonState.DISABLED).borderColor,
    color: getColors(color, variant, ButtonState.DISABLED).colorDisabled,
    cursor: "not-allowed",
  },
});

export const icon: SxProps<Theme> = {
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  padding: "0",
  border: "none",
  svg: {
    width: "16px",
    height: "16px",
  },
};
