import {
  ButtonColor,
  ButtonColorsMap,
  ButtonColorsStruct,
  ButtonState,
  ButtonVariant,
} from "../types";

const buttonColorsMap: ButtonColorsMap = {
  [ButtonVariant.FILLED]: {
    [ButtonColor.PRIMARY]: {
      textColor: ["white.main", "white.main", "white.main"],
      backgroundColor: [
        "primary.main",
        "primary.600",
        "primary.700",
        "primary.400",
      ],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "white.main",
    },
    [ButtonColor.GRAY]: {
      textColor: ["primary.main", "primary.main", "primary.main"],
      backgroundColor: [
        "primary.light",
        "primary.100",
        "primary.200",
        "primary.300",
      ],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "gray.100",
    },
    [ButtonColor.WHITE]: {
      textColor: ["primary.main", "primary.main", "primary.main"],
      backgroundColor: [
        "white.main",
        "primary.100",
        "primary.200",
        "primary.300",
      ],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "gray.100",
    },
    [ButtonColor.GREEN]: {
      textColor: ["white.main", "white.main", "white.main"],
      backgroundColor: ["green.main", "green.100", "green.200", "green.light"],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "white.main",
    },
    [ButtonColor.RED]: {
      textColor: ["white.main", "white.main", "white.main"],
      backgroundColor: ["red.main", "red.main", "red.main", "red.main"],
      borderColor: ["transparent", "transparent", "transparent", "transparent"],
      textColorDisabled: "white.main",
    },
  },

  [ButtonVariant.OUTLINE]: {
    [ButtonColor.RED]: {
      textColor: ["red.main", "red.main", "red.main", "red.main"],
      backgroundColor: [
        "transparent",
        "transparent",
        "transparent",
        "transparent",
      ],
      borderColor: ["red.main", "red.main", "red.main", "red.main"],
      textColorDisabled: "red.main",
    },
  },
};

const stateMap: Record<ButtonState, number> = {
  [ButtonState.DEFAULT]: 0,
  [ButtonState.HOVER]: 1,
  [ButtonState.ACTIVE]: 2,
  [ButtonState.DISABLED]: 3,
};

const getColors = (
  color: ButtonColor,
  variant: ButtonVariant,
  state: ButtonState
) => {
  const stateIndex = stateMap[state];
  const variantColors = buttonColorsMap[variant] as Record<
    ButtonColor,
    ButtonColorsStruct
  >;
  return {
    textColor: variantColors[color].textColor[stateIndex],
    backgroundColor: variantColors[color].backgroundColor[stateIndex],
    borderColor: variantColors[color].borderColor[stateIndex],
    colorDisabled: variantColors[color].textColorDisabled,
  };
};

export default getColors;
