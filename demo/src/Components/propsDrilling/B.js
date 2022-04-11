import React from "react";
import C from "./C";
const B = ({ city }) => {
  return (
    <>
      <h1>B component</h1>
      <C city={city} />
    </>
  );
};

export default B;
