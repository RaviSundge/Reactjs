import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Button, Container } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
// import { TextareaAutosize } from "@mui/material";

const MaterialChips = () => {
  const [skills, setSkills] = useState([""]);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, skills]);
    setSkills([""]);
  };
  const handleChange = (e) => {
    setSkills(e.target.value);
  };
  const handleDelete = (i) => {
    const Data = [...data];
    Data.splice(i, 1);
    setData(Data);
  };
  return (
    <>
      <Container>
        <Grid container display={"flex"} justifyContent={"center"} spacing={2}>
          <Grid item>
            <TextField
              name="InternSkills"
              type={"text"}
              variant="outlined"
              onChange={handleChange}
              label="Skills"
              fullWidth
              onBlur={(e) => (e.target.value = "")}
            />
            <Button onClick={handleSubmit}>Add Skills</Button>
          </Grid>
          <Grid item>
            <Stack direction="row-reverse" spacing={1}>
              {Array.isArray(data) &&
                data.map((val, i) => {
                  return (
                    <div key={i}>
                      <Chip
                        label={val}
                        sx={{ marginTop: 1 }}
                        onDelete={() => handleDelete(i)}
                        color={"primary"}
                      />
                    </div>
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MaterialChips;
