import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid, Typography } from "@mui/material";
import { User } from "@/components/common/icons/User";

import { Poll as PollType } from "@/types/poll";
import UserAPI from "@/lib/api/user/UserAPI";

import * as styles from "./Poll.styles";

interface PollProps {
  poll: PollType;
}

const Poll: React.FC<PollProps> = ({ poll }) => {
  const { data } = useQuery({
    queryKey: ["pollAuthor", poll.authorId],
    queryFn: () => UserAPI.getUserById(poll.authorId),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${poll.id}`);
  };

  return (
    <Grid item sx={styles.poll} onClick={handleClick}>
      <Box sx={styles.content}>
        <Typography variant="h3" sx={{ wordBreak: "break-word" }}>
          {poll.title}
        </Typography>
        <Typography variant="body1" color="gray.200">
          {poll.description ? poll.description : "No description :'("}
        </Typography>
      </Box>
      <Box sx={styles.user}>
        <Box sx={styles.author}>
          <User />
          <Typography variant="body2" color="gray.100">
            {data?.username}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Poll;
