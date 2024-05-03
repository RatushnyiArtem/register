import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, TextField, Typography } from "@mui/material";

import { Plus } from "@/components/common/icons/Plus";
import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";
import { Trash } from "@/components/common/icons/Trash";

import { PollFormFields } from "../../types";

import * as styles from "./Options.styles";

const Options = ({
  initialOptions,
}: {
  initialOptions: { id: string; title: string }[];
}) => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<PollFormFields>();

  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    setValue("options", options);
  }, [options, setValue]);

  const addOption = () => {
    if (options.length < 10) {
      const newOption = { id: "", title: "" };
      const prevOptions = getValues("options");
      setOptions([...prevOptions, newOption]);
    }
  };

  const handleDelte = (index: number) => {
    const prevOptions = getValues("options");
    const newOptions = prevOptions.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.row}>
        <Typography variant="h2">Options</Typography>
        <Typography variant="body1" color="gray.200">
          {options.length}/10
        </Typography>
        <Box>
          <Button
            icon={<Plus />}
            color={ButtonColor.GRAY}
            onClick={addOption}
          />
        </Box>
        <Typography variant="body1" color="red.main">
          {errors.options && errors.options.message?.toString()}
        </Typography>
      </Box>
      {options.map((option, index) => (
        <Controller
          name={`options.${index}.title`}
          key={index}
          control={control}
          defaultValue={option.title}
          render={({ field: { onChange, value } }) => (
            <Box sx={styles.row} key={index}>
              <Box>
                <Button
                  color={ButtonColor.RED}
                  icon={<Trash />}
                  onClick={() => handleDelte(index)}
                />
              </Box>
              <TextField
                id={`option-${index}`}
                name={`options[${index}]`}
                value={value}
                onChange={onChange}
                variant="outlined"
                sx={styles.textField}
                fullWidth
              />
              <Typography
                variant="body1"
                color={option.title.length > 50 ? "red.main" : "gray.200"}
                fontWeight={option.title.length > 50 ? "bold" : "normal"}
              >
                {value.length}/50
              </Typography>
              {errors?.options && errors?.options[index] && (
                <Typography variant="body1" color="red.main">
                  {errors.options[index].title?.message!.toString()}
                </Typography>
              )}
            </Box>
          )}
        />
      ))}
    </Box>
  );
};

export default Options;
