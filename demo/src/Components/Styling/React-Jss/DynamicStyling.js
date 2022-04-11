import React, { useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  container: ({ color, height, width }) => ({
    backgroundColor: color,
    height: height,
    width: width,
    border: "2px solid cyan",
    borderRadius: 10,
  }),
});
const DynamicStyling = () => {
  const [styles, setStyles] = useState({
    color: "red",
    height: 200,
    width: 200,
  });
  const classes = useStyles({ ...styles });
  const handleChange = (e) => {
    const width = parseInt(e.target.value);
    //    console.log(width)
    setStyles({ ...styles, width: width });
  };
  return (
    <>
      <div className={classes.container}></div>
      <div>
        <label>Change Width</label>
        <input type={"range"} onChange={handleChange} min="200" max={"1000"} />
      </div>
      <button onClick={() => setStyles({ ...styles, color: "red" })}>
        Red
      </button>
      <button onClick={() => setStyles({ ...styles, color: "blue" })}>
        Blue
      </button>
      <button onClick={() => setStyles({ ...styles, color: "yellow" })}>
        Yellow
      </button>
      <button onClick={() => setStyles({ ...styles, height: 400, width: 400 })}>
        Zoom In
      </button>
      <button onClick={() => setStyles({ ...styles, height: 200, width: 200 })}>
        Zoom Out
      </button>
    </>
  );
};

export default DynamicStyling;
