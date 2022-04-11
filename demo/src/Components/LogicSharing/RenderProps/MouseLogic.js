import React, { useState } from "react";
const MouseLogic = ({ render, children }) => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setAxis({ x: clientX, y: clientY });
  };
  return (
    <>
      <section
        style={{ height: "100vh", position: "relative" }}
        onMouseMove={handleMouseMove}
      >
        {render(axis)}
      </section>
    </>
  );
};

export default MouseLogic;
