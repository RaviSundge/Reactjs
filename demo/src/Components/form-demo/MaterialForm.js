import React, { useState } from "react";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
const MaterialForm = () => {
  const [user, setUser] = useState({ mobiles: [""] });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = () => {
    console.log("user:", user);
  };

  const addMobile = () => {
    // if (user.mobiles.length === 5) {
    //   alert("Maximum 5 numbers can be added");
    // }
    const mobiles = [...user.mobiles, ""];
    setUser({ ...user, mobiles: mobiles });
  };
  const deleteMobile = (index) => {
    const mobiles = [...user.mobiles];
    mobiles.splice(index, 1);
    setUser({ ...user, mobiles: mobiles });
  };
  const handleMobileChange = (e) => {
    const { name, value } = e.target;
    const mobiles = [...user.mobiles];
    mobiles[name] = value;
    setUser({ ...user, mobiles: mobiles });
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "2px solid cyan",
          width: 600,
          padding: 10,
        }}
      >
        <Grid container spacing={2} justifyContent="center" maxWidth={500}>
          <Grid item xs={12} md={6}>
            <TextField
              name="firstName"
              type={"text"}
              variant="outlined"
              onChange={handleChange}
              label="FirstName"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="lastName"
              type={"text"}
              variant="outlined"
              onChange={handleChange}
              label="LastName"
              fullWidth
            />
          </Grid>
          {user.mobiles &&
            user.mobiles.map((val, i) => {
              return (
                <Grid item xs={12} key={i}>
                  <Box display={"flex"}>
                    <TextField
                      name={i.toString()}
                      type={"tel"}
                      variant="outlined"
                      onChange={handleMobileChange}
                      label="Mobile"
                      fullWidth
                      value={val}
                    />
                    {i === user.mobiles.length - 1 && user.mobiles.length < 5 && (
                      <Button onClick={addMobile} variant={"outlined"}>
                        +
                      </Button>
                    )}
                    {i !== 0 && (
                      <Button
                        onClick={() => deleteMobile(i)}
                        variant={"outlined"}
                      >
                        x
                      </Button>
                    )}
                  </Box>
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <TextField
              name="email"
              type={"email"}
              variant="outlined"
              onChange={handleChange}
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              type={"password"}
              variant="outlined"
              onChange={handleChange}
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleClick}
              variant={"contained"}
              color={"warning"}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MaterialForm;
