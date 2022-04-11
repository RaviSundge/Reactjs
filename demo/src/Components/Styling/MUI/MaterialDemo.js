import React from "react";
// import Basic from "./Basic";
// import Layout from "./Layout";
// import StyleInMui from "./StyleInMui";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import MuiTheme from "./MuiTheme";
const MaterialDemo = () => {
  const mytheme = createTheme({
    palette: {
      primary: {
        main: "#00FFFF",
      },
      secondary: {
        main: "#FFA500",
      },
    },
  });
  return (
    <>
      {/* <Basic />
      <hr />
      <Layout />
      <hr />
      <StyleInMui /> */}
      <ThemeProvider theme={mytheme}>
        <MuiTheme />
      </ThemeProvider>
    </>
  );
};

export default MaterialDemo;
