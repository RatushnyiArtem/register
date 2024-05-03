import { useMemo } from "react";
import { Box } from "@mui/material";

import Header from "./components/header";
import Subheader from "./components/subheader";
import Poll from "./components/poll";

import useAuth from "@/hooks/use-auth";
import { usePollContext } from "@/hooks/use-poll";

import * as styles from "./PollDetailsPage.styles";

const PollDetailsPage = () => {
  const { poll } = usePollContext();
  const { user } = useAuth();
  const isAuthor = useMemo(
    () => user.id === poll?.authorId,
    [user.id, poll?.authorId]
  );

  if (!poll) return null;

  return (
    <Box sx={styles.container}>
      <Header isAuthor={isAuthor} isUpdatePage={false} />
      <Subheader />
      <Poll />
    </Box>
  );
};

export default PollDetailsPage;
