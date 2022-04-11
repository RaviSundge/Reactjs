import React from "react";
import withCounter from "./withCounter";
const TotalMobile = ({ count, increment, decrement }) => {
  return (
    <>
      <h4>Total Mobile:{count}</h4>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};

export default withCounter(TotalMobile);
