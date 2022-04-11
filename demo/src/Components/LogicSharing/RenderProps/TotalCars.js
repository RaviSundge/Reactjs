import React from "react";
const TotalCars = ({ count, inc, dec }) => {
  return (
    <>
      <h1>Total Cars:{count}</h1>
      <button onClick={inc}>++</button>
      <button onClick={dec}>--</button>
    </>
  );
};

export default TotalCars;
