import { forwardRef } from "react";
import { Box, TextField, Typography } from "@mui/material";

import * as styles from "./Textarea.styles";
import { Controller, useFormContext } from "react-hook-form";

interface TextareaProps {
  title: string;
  maxLength: number;
  isTextarea?: boolean;
}

const Textarea = forwardRef<HTMLInputElement, TextareaProps>(
  ({ title, maxLength, isTextarea = false }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    return (
      <Box sx={styles.container}>
        <Box sx={styles.row}>
          <Typography variant="h2">
            {title.slice(0, 1).toLocaleUpperCase() + title.slice(1)}
          </Typography>
          <Controller
            name={title}
            control={control}
            defaultValue=""
            render={({ field: { value } }) => (
              <Typography
                variant="body1"
                color={value.length > maxLength ? "red.main" : "gray.200"}
                fontWeight={value.length > maxLength ? "bold" : "normal"}
              >
                {value.length}/{maxLength}
              </Typography>
            )}
          />
          <Typography variant="body1" color="red.main">
            {errors[title] && errors[title].message?.toString()}
          </Typography>
        </Box>
        <Controller
          name={title}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              id={title}
              name={title}
              multiline={isTextarea}
              rows={4}
              value={value}
              onChange={onChange}
              inputRef={ref}
            />
          )}
        />
      </Box>
    );
  }
);

export default Textarea;
