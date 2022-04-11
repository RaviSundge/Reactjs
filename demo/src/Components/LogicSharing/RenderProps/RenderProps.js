import React from "react";
import Counter from "./Counter";
import Flag from "./Flag";
import MouseLogic from "./MouseLogic";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";
const RenderProps = () => {
  return (
    <>
      <Counter
        render={(count, inc, dec) => {
          return <TotalBikes count={count} inc={inc} dec={dec} />;
        }}
      />
      <Counter>
        {(total, add, minus) => {
          return <TotalCars count={total} inc={add} dec={minus} />;
        }}
      </Counter>
      <MouseLogic
        render={(axis) => {
          return <Flag {...axis} />;
        }}
      />
    </>
  );
};

export default RenderProps;
