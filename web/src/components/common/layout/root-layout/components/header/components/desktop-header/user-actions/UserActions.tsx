import { Box } from "@mui/material";
import * as styles from "./UserActions.styles";

const UserActions = () => {
  return (
    <Box sx={styles.userActions}>
      <Box sx={styles.userImage} />
    </Box>
  );
};

export default UserActions;
