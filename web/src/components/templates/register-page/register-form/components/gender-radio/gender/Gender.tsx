import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, useRadioGroup } from "@mui/material";

import { Female } from "@/components/common/icons/Female";
import { Male } from "@/components/common/icons/Male";
import { Khohol } from "@/components/common/icons/Khohol";

import { Gender as GenderEnum } from "@/types/gender";

import * as styles from "./Gender.styles";

interface GenderProps {
  gender: GenderEnum;
}

const Gender = React.forwardRef<HTMLButtonElement, GenderProps>(
  ({ gender }, ref) => {
    const radioGroup = useRadioGroup();

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      setIsChecked(radioGroup?.value === gender);
    }, [radioGroup?.value, gender]);

    return (
      <FormControlLabel
        value={gender}
        control={
          <Radio
            icon={<GenderIcon gender={gender} />}
            checkedIcon={<GenderIcon gender={gender} />}
            value={gender}
            ref={ref}
            sx={styles.radio}
          />
        }
        sx={styles.gender(isChecked)}
        label={
          gender.slice(0, 1).toLocaleUpperCase() + gender.slice(1).toLowerCase()
        }
      />
    );
  }
);

export default Gender;

const GenderIcon = ({ gender }: { gender: GenderEnum }) => {
  switch (gender) {
    case GenderEnum.FEMALE:
      return <Female />;
    case GenderEnum.MALE:
      return <Male />;
    case GenderEnum.KHOHOL:
      return <Khohol />;
  }
};
