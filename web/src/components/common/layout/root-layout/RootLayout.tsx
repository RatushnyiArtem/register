import { Outlet } from "react-router-dom";
import { Container, Grid, useMediaQuery } from "@mui/material";

import theme from "@/styles/theme";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

const RootLayout = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} sm={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={12} sm={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RootLayout;
