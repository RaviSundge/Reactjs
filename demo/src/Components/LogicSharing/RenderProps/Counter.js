import React, { useState } from "react";
const Counter = ({ render, children }) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return render
    ? render(counter, increment, decrement)
    : children(counter, increment, decrement);
};

export default Counter;
