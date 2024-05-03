import CreatePollPage from "@/components/templates/create-poll-page";
import { useLocation } from "react-router-dom";

const UpdatePoll = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];

  return <CreatePollPage id={id} isUpdatePage />;
};

export default UpdatePoll;
