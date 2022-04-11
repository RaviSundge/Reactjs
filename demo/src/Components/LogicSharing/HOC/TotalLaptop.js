import React from "react";
import withCounter from "./withCounter";
const TotalLaptop = ({ count, increment, decrement }) => {
  return (
    <>
      <h4>Total Laptop:{count}</h4>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};

export default withCounter(TotalLaptop);
