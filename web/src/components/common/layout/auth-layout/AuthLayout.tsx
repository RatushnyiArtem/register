import { Box, Grid, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/hooks/use-auth";
import * as styles from "./AuthLayout.styles";

const AuthLayout = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={5} sx={styles.container}>
        <Box sx={styles.leftBlock}>
          <Typography variant="h1">Decisioner</Typography>
          <Typography variant="body1" sx={styles.subtitle}>
            Welcome! Register to get access to all functionality
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7} sx={styles.rightBlock}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
