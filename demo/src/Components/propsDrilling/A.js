import React from "react";
import B from "./B";
const A = ({ city }) => {
  return (
    <>
      <h1>A component</h1>
      <B city={city} />
    </>
  );
};

export default A;
