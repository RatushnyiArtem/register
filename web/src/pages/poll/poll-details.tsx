import PollDetailsPage from "@/components/templates/poll-details-page";
import PollProvider from "@/hooks/use-poll/usePoll";
import { useLocation } from "react-router-dom";

const PollDetails = () => {
  const { pathname } = useLocation();
  const pollId = pathname.split("/")[1];

  return (
    <PollProvider id={pollId}>
      <PollDetailsPage />
    </PollProvider>
  );
};

export default PollDetails;
