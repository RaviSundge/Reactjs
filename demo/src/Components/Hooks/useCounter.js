import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = (value = 1) => {
    setCount(count + value);
  };
  const decrement = (value = 1) => {
    setCount(count - value);
  };
  //   return {count,increment,decrement} you can use array or object ,when you return object the in reciving component you need to use same name as given in this but in case of array u can use any name but their sequence matter
  return [count, increment, decrement];
};
export default useCounter;
