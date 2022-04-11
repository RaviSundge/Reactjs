import React, { forwardRef, useImperativeHandle } from "react";
const FuncComp = (props, ref) => {
  const mycity = (City) => {
    alert("My City is " + City);
  };
  useImperativeHandle(ref, () => {
    return {
      mycity: mycity,
    };
  });
  return (
    <>
      <h3>Child FuncComp</h3>
    </>
  );
};

export default forwardRef(FuncComp);
