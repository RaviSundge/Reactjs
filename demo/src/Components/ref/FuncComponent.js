import React from "react";
const FuncComponent = (props, ref) => {
  return (
    <>
      <h4>FuncComponent</h4>
      <input ref={ref} />
    </>
  );
};

export default React.forwardRef(FuncComponent);
