import { Box, Typography } from "@mui/material";

import RegisterForm from "./register-form";
import Link from "@/components/common/ui/link";

import * as styles from "./RegisterPage.styles";

const RegisterPage = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h2">
        We need just a little information about you
      </Typography>
      <Typography variant="body1" color="gray.200">
        All this information is used to identify you in the system
      </Typography>
      <Box sx={styles.form}>
        <RegisterForm />
        <Typography variant="body1" sx={{ display: "flex" }} color="gray.200">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
