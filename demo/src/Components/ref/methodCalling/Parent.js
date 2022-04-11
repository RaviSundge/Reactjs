import React, { useRef } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
const Parent = () => {
  const classRef = React.createRef();
  const funRef = useRef(null);
  const print = () => {
    alert("Hello from parent");
  };
  return (
    <>
      <h3>Parent Component</h3>
      <button onClick={() => classRef.current.greet("Ravi")}>
        From Parent
      </button>
      <ClassComp print={print} ref={classRef} />
      <FuncComp ref={funRef} />
      <button onClick={() => funRef.current.mycity("Nanded")}>
        From Parent pf FuncComp
      </button>
    </>
  );
};

export default Parent;
