import React, { MouseEventHandler } from "react";
import {
  Box,
  Button as MUIButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

import mergeSx from "@/lib/utils/mergeSx";
import { ButtonColor, ButtonVariant } from "./types";

import * as styles from "./Button.styles";

interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  sx?: SxProps<Theme>;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = ButtonVariant.FILLED,
  color = ButtonColor.PRIMARY,
  icon,
  sx = {},
  disabled = false,
  type = "button",
  ...rest
}) => {
  return (
    <MUIButton
      sx={mergeSx(styles.button(color, variant), sx)}
      type={type}
      {...rest}
      disabled={disabled}
    >
      {text && <Typography variant="body1">{text}</Typography>}
      {icon && <Box sx={styles.icon}>{icon}</Box>}
    </MUIButton>
  );
};

export default Button;
