import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count + 1)}>--</button>
    </>
  );
};

export default UseEffect;
