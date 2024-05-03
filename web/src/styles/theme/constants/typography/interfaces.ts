import { CSSProperties } from "react";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h2Bold: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h2Bold?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h2Bold: true;
  }
}
