import React, { memo } from "react";
const FuncComp = ({ add }) => {
  console.log("FuncComponent");
  return (
    <>
      <h3>Function Component-{add.city}</h3>
    </>
  );
};

export default memo(FuncComp, (prevProps, nextProps) => {
  if (prevProps.add.city === nextProps.add.city) return true;
  else return false;
});
