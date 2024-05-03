import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import SearchBox from "../search-box";
import UserActions from "./user-actions";

import * as styles from "../../Header.styles";

const DesktopHeader = () => {
  const navigate = useNavigate();

  return (
    <Box component="header" sx={styles.header}>
      <Typography
        variant="h2"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Decisioner
      </Typography>
      <SearchBox />
      <UserActions />
    </Box>
  );
};

export default DesktopHeader;
