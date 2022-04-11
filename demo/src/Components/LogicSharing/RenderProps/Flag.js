import React from "react";
const Flag = ({ x, y }) => {
  //   const { x, y } = axis;
  return (
    <img
      src="./assets/flag.gif"
      alt="wait"
      // height="100"
      // width="100"
      style={{
        position: "absolute",
        height: 100,
        width: 100,
        top: y,
        left: x,
      }}
    />
  );
};

export default Flag;
