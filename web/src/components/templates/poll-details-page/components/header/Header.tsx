import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Button from "@/components/common/ui/button";
import {
  ButtonColor,
  ButtonVariant,
} from "@/components/common/ui/button/types";
import { ArrowLeft } from "@/components/common/icons/ArrowLeft";
import { Bookmark } from "@/components/common/icons/Bookmark";
import { Trash } from "@/components/common/icons/Trash";
import { Settings } from "@/components/common/icons/Settings";

import PollAPI from "@/lib/api/poll/PollAPI";
import { State } from "@/types/state";
import { usePollContext } from "../../../../../hooks/use-poll";

import * as styles from "./Header.styles";

interface HeaderProps {
  isAuthor?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthor = false }) => {
  const navigate = useNavigate();
  const { poll, id, update, isUpdatePage } = usePollContext();
  const isOpened = useMemo(() => poll?.state === State.OPEN, [poll?.state]);

  const handlePollUpdate = async () => {
    if (!id) return;

    await PollAPI.updatePoll(id, {
      state: isOpened ? State.CLOSED : State.OPEN,
    });
    await update();
  };

  return (
    <Box sx={styles.header}>
      <Box>
        <Button
          icon={<ArrowLeft />}
          color={ButtonColor.GRAY}
          onClick={() => navigate(-1)}
        />
      </Box>
      {isUpdatePage && !isOpened && (
        <Typography variant="h2" color="gray.200">
          Poll closed
        </Typography>
      )}
      <Box sx={styles.row}>
        {isAuthor ? (
          <AuthorButton
            id={id!}
            handlePollUpdate={handlePollUpdate}
            isOpened={isOpened}
            isUpdatePage={isUpdatePage}
          />
        ) : (
          !isUpdatePage && (
            <Button
              sx={{ "&>*>svg": { fill: "white" } }}
              icon={<Bookmark />}
              onClick={() => console.log(`Bookmarking poll with id: ${id}`)}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default Header;

const AuthorButton = ({
  id,
  isUpdatePage,
  isOpened,
  handlePollUpdate,
}: {
  id: string;
  isUpdatePage?: boolean;
  isOpened: boolean;
  handlePollUpdate: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Button
          color={isOpened ? ButtonColor.RED : ButtonColor.GREEN}
          variant={isOpened ? ButtonVariant.OUTLINE : ButtonVariant.FILLED}
          text={isOpened ? "Close Poll" : "Open Poll"}
          onClick={handlePollUpdate}
        />
      </Box>
      {!isUpdatePage ? (
        <Box>
          <Button
            icon={<Settings />}
            onClick={() => navigate(`/${id}/update-poll`)}
          />
        </Box>
      ) : (
        <Box>
          <Button
            color={ButtonColor.RED}
            icon={<Trash />}
            onClick={() => PollAPI.delete(id!).then(() => navigate("/"))}
          />
        </Box>
      )}
    </>
  );
};
