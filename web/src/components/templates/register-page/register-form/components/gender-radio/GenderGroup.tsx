import { forwardRef } from "react";
import { FormControl, RadioGroup, Typography } from "@mui/material";
import Gender from "./gender";

import { Gender as GenderEnum } from "@/types/gender";

interface GenderGroupProps {
  error?: string;
}

const GenderGroup = forwardRef<HTMLButtonElement, GenderGroupProps>(
  ({ error, ...props }, ref) => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={GenderEnum.FEMALE}
          sx={{ display: "flex", flexDirection: "row", gap: 1 }}
          ref={ref}
          {...props}
        >
          <Gender gender={GenderEnum.FEMALE} ref={ref} />
          <Gender gender={GenderEnum.MALE} ref={ref} />
          <Gender gender={GenderEnum.KHOHOL} ref={ref} />
        </RadioGroup>
        <Typography variant="body1" color="red.main">
          {error}
        </Typography>
      </FormControl>
    );
  }
);

export default GenderGroup;
