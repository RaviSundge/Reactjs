import React, { useState } from "react";
import TotalBoys from "./TotalBoys";
import TotalGirls from "./TotalGirls";
import UseEffect from "./UseEffect";
const HooksDemo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>HooksDemo</h1>
      {show && <UseEffect />}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <TotalBoys />
      <hr />
      <TotalGirls />
    </>
  );
};

export default HooksDemo;
