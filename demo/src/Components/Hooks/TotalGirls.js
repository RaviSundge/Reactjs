import React from "react";
import useCounter from "./useCounter";
const TotalGirls = () => {
  const [count, increment, decrement] = useCounter();
  return (
    <>
      <h3>Total Girls :{count}</h3>
      <button onClick={() => increment()}>Add</button>
      <button onClick={() => decrement()}>Remove</button>
    </>
  );
};

export default TotalGirls;
