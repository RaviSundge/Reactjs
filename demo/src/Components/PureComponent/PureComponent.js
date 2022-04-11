import React, { useState } from "react";
import ClassComp from "./ClassComponent";
import FuncComp from "./FuncComp";
const PureComponents = () => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  console.log("PureComponent");
  return (
    <>
      <h3>PureComponents-{city}</h3>
      <input type={"text"} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={() => setCity(location)}>Add city </button>
      {/* <ClassComp city={city} />
      <hr />
      <FuncComp city={city} /> */}
      <ClassComp add={{ city }} />
      <hr />
      <FuncComp add={{ city }} />
    </>
  );
};

export default PureComponents;
