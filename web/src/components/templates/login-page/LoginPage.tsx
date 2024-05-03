import { Box, Typography } from "@mui/material";

import LoginForm from "./login-form";
import Link from "@/components/common/ui/link";

import * as styles from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h2">
        Welcome back, we’ve been waiting on you!
      </Typography>
      <Box sx={styles.form}>
        <LoginForm />
        <Typography variant="body1" sx={{ display: "flex" }} color="gray.200">
          Don’t have an account? <Link to="/register">Register</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
