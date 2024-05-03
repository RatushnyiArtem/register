import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  Typography,
  useRadioGroup,
} from "@mui/material";

import { Check } from "@/components/common/icons/Check";
import { Eye } from "@/components/common/icons/Eye";

import { OptionResults } from "@/lib/api/poll/types/PollResults";
import mergeSx from "@/lib/utils/mergeSx";

import * as styles from "./Option.styles";

interface OptionProps {
  id: string;
  title: string;
  checkedId?: string;
  results?: OptionResults;
}

const Option = React.forwardRef<HTMLButtonElement, OptionProps>(
  ({ id, title = false, checkedId, results }, ref) => {
    const radioGroup = useRadioGroup();

    const isCheckedLocally =
      checkedId && checkedId?.length > 0
        ? checkedId === id
        : radioGroup?.value === id;

    return (
      <Box sx={styles.optionContainer}>
        <FormControlLabel
          value={id}
          control={
            <Radio
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
              ref={ref}
              value={id}
              icon={
                results ? (
                  <EyeIcon />
                ) : (
                  <CheckIcon isChecked={isCheckedLocally} />
                )
              }
              checkedIcon={
                results ? (
                  <EyeIcon />
                ) : (
                  <CheckIcon isChecked={isCheckedLocally} />
                )
              }
            />
          }
          label={title}
          ref={ref}
          sx={mergeSx(
            styles.option,
            results
              ? styles.optionResults(results.percentFromTotal)
              : styles.optionWithoutResults(isCheckedLocally)
          )}
        />
        {results && (
          <Typography variant="body1" color="gray.100" sx={styles.votes}>
            {results?.percentFromTotal}%
          </Typography>
        )}
      </Box>
    );
  }
);

export default Option;

const CheckIcon = ({ isChecked = false }: { isChecked?: boolean }) => {
  return (
    <Box sx={styles.checkIcon(isChecked)}>
      <Check />
    </Box>
  );
};

const EyeIcon = () => {
  return (
    <Box sx={styles.checkIcon(true)}>
      <Eye />
    </Box>
  );
};
