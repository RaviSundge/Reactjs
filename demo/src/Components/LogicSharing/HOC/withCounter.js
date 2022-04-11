import React, { useState } from "react";
const withCounter = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      if (count > 0) setCount(count - 1);
    };
    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
};
export default withCounter;
