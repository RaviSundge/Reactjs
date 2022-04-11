import React from "react";
import useCounter from "./useCounter";
const TotalBoys = () => {
  const [count, increment, decrement] = useCounter();
  return (
    <>
      <h3>Total Boys :{count}</h3>
      <button onClick={() => increment(5)}>Add</button>
      <button onClick={() => decrement()}>Remove</button>
    </>
  );
};

export default TotalBoys;
