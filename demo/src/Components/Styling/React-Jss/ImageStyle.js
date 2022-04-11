import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  image: ({ blurval, gray, opa }) => ({
    filter: `blur(${blurval}px) grayscale(${gray}) opacity(${opa})`,
  }),
});

const ImageStyle = () => {
  const [styles, setStyle] = useState({
    blurval: 10,
    gray: 0,
    opa: 1,
  });
  const classes = useStyles();
  return (
    <>
      <h1>Image Styling</h1>
      <img
        src="./car.jpg"
        alt="car"
        height={500}
        width={500}
        className={classes.image}
      />
      <input
        type="range"
        onChange={(e) =>
          setStyle({ ...styles, blurval: parseInt(e.target.value) })
        }
        min={1}
        max={10}
      />
    </>
  );
};

export default ImageStyle;
