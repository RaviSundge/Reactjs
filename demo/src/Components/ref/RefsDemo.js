import React from "react";
import BasicRef from "./BasicRef";
const RefsDemo = () => {
  return (
    <>
      <BasicRef />
    </>
  );
};

export default RefsDemo;

//note : if you pass the ref to class component then that ref will refer object of that component.
// but if you pass the ref to function component then that ref will refer to null coz an object for the function component will not be created
