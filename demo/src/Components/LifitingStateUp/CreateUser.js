import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
const CreateUser = ({ getUser }) => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Users:", user);
    getUser(user);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ maxWidth: "50%", margin: "auto" }}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              onChange={handleChange}
              fullWidth
              type={"text"}
              value={user.name}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="mobile"
              label="Mobile"
              onChange={handleChange}
              fullWidth
              type={"tel"}
              value={user.mobile}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              onChange={handleChange}
              fullWidth
              type={"email"}
              value={user.email}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="city"
              label="City"
              onChange={handleChange}
              fullWidth
              type={"text"}
              value={user.city}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              onChange={handleChange}
              fullWidth
              type={"password"}
              value={user.password}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type={"submit"} variant="contained" color="warning">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default CreateUser;
