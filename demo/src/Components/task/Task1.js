import React, { useState } from "react";
// import TextField from "@mui/icons-material/TextFields";
// import { Button, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/DeleteForeverSharp";

const Task1 = () => {
  const [image, setImage] = useState(["assets/car.jpg"]);
  const [albumImage, setAlbumImage] = useState("");
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    // const { value } = e.target;
    setPhoto([...image, e.target.value]);
  };
  const handleImage = (i) => {
    // console.log(image[i]);
    setAlbumImage(image[i]);
    // console.log(albumImage);
    // alert("clicked");
  };
  const addImage = () => {
    if (photo) setImage(photo);
    // alert("added");
  };
  const handleBlur = (e) => {
    e.target.value = "";
  };
  const removeClick = (i) => {
    const arr = image.filter((val, index) => {
      return index !== i;
    });
    // const pic = [...image];
    // const arr = pic.splice(i, 1);
    // // console.log(image);
    setImage(arr);
  };
  return (
    <>
      <div style={{}}>
        <div
          style={{
            width: "30%",
            height: 300,
            margin: "auto",
            border: "2px solid cyan",
            borderRadius: 10,
          }}
        >
          <img src={albumImage} height="280" width="100%" alt="Loading..." />
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div>
            <input
              type={"text"}
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              width="600"
              color="cyan"
              placeholder="feed image url.."
            />
          </div>
          <div className="ms-4">
            <button onClick={addImage} className="btn btn-outline-danger">
              Add Image
            </button>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "98%",
              height: 200,
              margin: "auto",
              border: "2px solid cyan",
              borderRadius: 10,
              marginTop: 30,
              display: "flex",
              overflow: "auto",
            }}
          >
            {Array.isArray(image) &&
              image.map((val, i) => {
                return (
                  <span key={val + i} style={{ position: "relative" }}>
                    <Fab
                      color="primary"
                      aria-label="add"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: 5,
                        width: 30,
                        padding: 2,
                        margin: 1,
                        color: "darkgray",
                      }}
                      onClick={() => removeClick(i)}
                    >
                      <AddIcon />
                    </Fab>
                    <img
                      style={{ borderRight: "1px solid cyan", padding: 5 }}
                      src={val}
                      width="190"
                      height="100%"
                      alt="wait"
                      onClick={() => handleImage(i)}
                      value={val}
                    />
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task1;
