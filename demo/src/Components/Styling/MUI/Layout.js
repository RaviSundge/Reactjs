import React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Layout = () => {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="red">
              One
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="green">
              Two
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="blue">
              Three
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box style={{ height: 100 }} bgcolor="cyan">
              Four
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
