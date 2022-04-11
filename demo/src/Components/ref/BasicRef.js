//ref are used to access nodes of virtual dom.
import React, { useEffect } from "react";
import ClassComp from "./ClassComp";
import FuncComponent from "./FuncComponent";
const BasicRef = () => {
  const inputRef = React.createRef(); //creating ref using React.createRef()
  const classCompRef = React.createRef();
  const funcCompRef = React.createRef();
  let inputRef2;

  const refCB = (element) => {
    //creating ref using callback
    inputRef2 = element;
  };
  useEffect(() => {
    // inputRef.current.focus();
    inputRef2.focus();
    console.log("ClassRef:", classCompRef);
    console.log("FunRef:", funcCompRef);
  }, []);
  return (
    <>
      <input type={"text"} ref={inputRef} />
      <input type={"text"} ref={refCB} />
      <hr />
      <ClassComp ref={classCompRef} />
      <button onClick={() => classCompRef.current.focusInput()}>focus</button>
      <FuncComponent ref={funcCompRef} />
      <button onClick={() => funcCompRef.current.focus()}>Focus</button>
    </>
  );
};

export default BasicRef;
