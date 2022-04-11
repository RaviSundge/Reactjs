import React, { useContext } from "react";
import CountryContext from "./CountryContext";
const C = ({ city }) => {
  const Desh = useContext(CountryContext);

  return (
    <>
      <h1>C component city:{city}</h1>
      <h1>C component country:{Desh}</h1>
      {/* <CountryContext.Consumer>
        {(country) => {
          return <h1>country:{country}</h1>;
        }}
      </CountryContext.Consumer> */}
    </>
  );
};

export default C;
