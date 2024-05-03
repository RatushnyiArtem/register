import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";

import Button from "@/components/common/ui/button";
import Textarea from "./components/textarea";
import Options from "./components/options";

import { validationSchema } from "./validation";
import { PollFormFields } from "./types";
import { usePollContext } from "../../../../hooks/use-poll";
import PollAPI from "@/lib/api/poll/PollAPI";
import { UpdatePollBody } from "@/lib/api/poll/types/UpdatePollBody";
import { CreatePollBody } from "@/lib/api/poll/types/CreatePollBody";

import styles from "./PollForm.module.scss";

const PollForm = () => {
  const { poll, id, isUpdatePage } = usePollContext();

  const methods = useForm<PollFormFields>({
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const requestData = {
      ...data,
      options: data.options.map((option) =>
        isUpdatePage
          ? { id: option.id, title: option.title }
          : { title: option.title }
      ),
    };

    const poll = isUpdatePage
      ? await PollAPI.updatePoll(id!, requestData as UpdatePollBody)
      : await PollAPI.createPoll(requestData as CreatePollBody);

    return navigate(`/${poll.id}`);
  });

  if (poll) {
    methods.setValue("title", poll.title);
    methods.setValue("description", poll.description || "");
    methods.setValue(
      "options",
      poll.options.map((option) => ({
        id: option.id,
        title: option.title,
      }))
    );
  }

  if (!poll && id) return null;

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Textarea title="title" maxLength={50} />
        <Textarea title="description" maxLength={500} isTextarea />
        <Options
          initialOptions={
            poll
              ? poll.options.map((option) => ({
                  id: option.id,
                  title: option.title,
                }))
              : [
                  { id: "", title: "" },
                  { id: "", title: "" },
                ]
          }
        />
        <Button type="submit" text={isUpdatePage ? "Update" : "Create"} />
      </form>
      <Typography variant="body1" color="red.main">
        {methods.formState.errors.root && methods.formState.errors.root.message}
      </Typography>
    </FormProvider>
  );
};

export default PollForm;
