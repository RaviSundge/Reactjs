import React from "react";
const TotalBikes = ({ count, inc, dec }) => {
  return (
    <>
      <h1>Total Bikes:{count}</h1>
      <button onClick={inc}>++</button>
      <button onClick={dec}>--</button>
    </>
  );
};

export default TotalBikes;
