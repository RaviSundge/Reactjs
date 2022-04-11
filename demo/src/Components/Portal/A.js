import React from "react";
import B from "./B";
import { createPortal } from "react-dom";
const A = () => {
  return (
    <>
      <h3>A Component</h3>
      {createPortal(<B />, document.getElementById("root-portal"))}
    </>
  );
};

export default A;
