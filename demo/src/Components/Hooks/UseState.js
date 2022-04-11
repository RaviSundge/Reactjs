import React, { useState } from "react";
const UseState = () => {
  const [state, dispatch] = useState(0);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const addClick = () => {
    // cities.push(city);   by doing this cities will updtate but UI will no render
    setCities([...cities, city]);
    setCity("");
  };
  const increment = () => {
    dispatch((state) => state + 5);
    dispatch((count) => count + 5);
    dispatch((ravi) => ravi + 5);
  };
  const decrement = () => {
    dispatch(state - 5);
    dispatch(state - 5);
    dispatch(state - 5);
    dispatch(state - 5);
    dispatch(state - 5); //here it will decrement with 5 only coz as we know state update async.to decrement by 25 we have to pass callback like increment method
  };
  return (
    <>
      <h3>Count:{state}</h3>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
      <h4>Enter city:</h4>
      <input
        type={"text"}
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={addClick}>Add City</button>
      <ul>
        {Array.isArray(cities) &&
          cities.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
      </ul>
    </>
  );
};

export default UseState;
