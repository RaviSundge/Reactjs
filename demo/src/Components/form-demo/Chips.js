import React, { useState } from "react";

const Chips = () => {
  const [skills, setSkills] = useState([""]);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, skills]);
  };
  return (
    <>
      <form>
        <input
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />
        <input type={"submit"} onClick={handleSubmit} value={"submit"} />
      </form>

      {Array.isArray(data) &&
        data.map((val, i) => {
          return (
            <div key={i}>
              <span>{val}</span>
            </div>
          );
        })}
    </>
  );
};

export default Chips;
