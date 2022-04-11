import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));
const MuiTheme = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Hello How Are You?</h1>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "secondary.main",
        }}
      >
        Hiiii
      </Box>
    </>
  );
};

export default MuiTheme;
