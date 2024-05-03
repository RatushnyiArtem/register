import { Box } from "@mui/material";

import Header from "../poll-details-page/components/header";
import PollForm from "./poll-form";
import PollProvider from "../../../hooks/use-poll";

import * as styles from "./CreatePollPage.styles";

interface CreatePollPageProps {
  id?: string;
  isUpdatePage?: boolean;
}

const CreatePollPage: React.FC<CreatePollPageProps> = ({
  id,
  isUpdatePage = false,
}) => {
  return (
    <Box sx={styles.container}>
      <PollProvider id={id} isUpdatePage={isUpdatePage}>
        <Header isAuthor />
        <PollForm />
      </PollProvider>
    </Box>
  );
};

export default CreatePollPage;
