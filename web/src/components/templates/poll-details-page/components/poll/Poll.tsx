import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, RadioGroup, Typography } from "@mui/material";

import Option from "./option";
import Button from "@/components/common/ui/button";

import { validationSchema } from "./validation";
import { PollFormFields } from "./types";

import PollAPI from "@/lib/api/poll/PollAPI";
import { State } from "@/types/state";
import { usePollContext } from "@/hooks/use-poll";

import * as styles from "./Poll.styles";

const Poll: React.FC = () => {
  const { id, poll } = usePollContext();
  const isOpened = useMemo(() => poll?.state === State.OPEN, [poll?.state]);

  const { data, refetch } = useQuery({
    queryKey: ["haveVoted", id],
    queryFn: () => PollAPI.haveVoted(id as string),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: results, refetch: resultsRefetch } = useQuery({
    queryKey: ["results", id],
    queryFn: () => PollAPI.getResults(id as string),
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !isOpened || !!data?.haveVoted,
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<PollFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async ({ option }) => {
    if (isOpened) {
      await PollAPI.vote(id as string, option);
      await refetch();
      await resultsRefetch();
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={styles.formControl}>
        <RadioGroup sx={styles.radioGroup} {...register("option")}>
          {poll?.options.map((option) => (
            <Option
              results={
                !isOpened || data?.haveVoted
                  ? results?.filter((result) => result.id === option.id)[0]
                  : undefined
              }
              checkedId={data?.option}
              key={option.id}
              id={option.id}
              title={option.title}
              {...register("option")}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {!data?.haveVoted && isOpened && (
        <Button
          type="submit"
          text="Vote"
          onClick={onSubmit}
          disabled={!isValid}
        />
      )}
      <Typography variant="body1" color="red.main">
        {errors.option?.message}
      </Typography>
    </form>
  );
};

export default Poll;
