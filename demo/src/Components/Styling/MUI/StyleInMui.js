import React from "react";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
const useStyles = makeStyles({
  title: {
    backgroundColor: ({ bgcolor }) => bgcolor,
    color: "black",
    padding: "5px 10px", //like jss
    textAlign: "center",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
});

const CustomDiv = styled("div")({
  width: 200, //by creating custom component ,here internally
  height: 200, // it will create div
  backgroundColor: "cyan",
  "&:hover": {
    backgroundColor: "black",
  },
});

const StyleInMui = () => {
  const classes = useStyles({ bgcolor: "cyan" });
  return (
    <>
      <h1 className={classes.title}>Hello how are you?</h1>
      <CustomDiv>
        <Box
          component={"h1"}
          sx={{
            color: "red",
          }}
        >
          Ravi
        </Box>
      </CustomDiv>

      <Box
        component={"section"}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: { md: "Highlight", sm: "black", xs: "red" },
        }}
      ></Box>
    </>
  );
};

export default StyleInMui;
