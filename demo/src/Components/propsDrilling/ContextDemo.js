import React, { useState } from "react";
import A from "./A";
import CountryContext from "./CountryContext";
const ContextDemo = () => {
  const [country, setCountry] = useState("Hindustan ");
  const [city, setCity] = useState("Pune");
  return (
    <>
      <CountryContext.Provider value={country}>
        <A city={city} />
      </CountryContext.Provider>
    </>
  );
};

export default ContextDemo;
