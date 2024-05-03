import { Color } from "@mui/material";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor extends Color {}

  interface Palette {
    primary: Palette["primary"];
    gray: Palette["primary"];
    green: Palette["primary"];
    red: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}
