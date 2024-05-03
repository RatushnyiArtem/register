import PollAPI from "@/lib/api/poll/PollAPI";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Poll from "./poll";

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["polls"],
    queryFn: () => PollAPI.getPolls(),
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {data?.map((poll) => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </Grid>
  );
};

export default HomePage;
