import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { User } from "@/components/common/icons/User";

import UserAPI from "@/lib/api/user/UserAPI";
import { usePollContext } from "@/hooks/use-poll";

import * as styles from "./Subheader.styles";

const Subheader: React.FC = () => {
  const { poll } = usePollContext();

  const { data: author } = useQuery({
    queryKey: ["author", poll?.authorId],
    queryFn: () => UserAPI.getUserById(poll?.authorId as string),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Box sx={styles.subheader}>
      <Box sx={styles.title}>
        <Typography variant="h2">{poll?.title}</Typography>
        <Box sx={styles.titleInfo}>
          <User />
          <Typography variant="body1" color="gray.100">
            {author?.username}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" color="gray.200">
        {poll?.description ? poll.description : "No description :'("}
      </Typography>
    </Box>
  );
};

export default Subheader;
