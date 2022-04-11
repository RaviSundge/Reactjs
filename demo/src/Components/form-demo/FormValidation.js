import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const FormValidation = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("user:", user);
  };
  //   const validate = () => {
  //     const { firstName, lastName, mobile, email, password } = user;
  //     let err = {};
  //     if (firstName?.length <= 3) {
  //       err = { ...err, firstName: "FirstName should be atleast 4 char" };
  //     }
  //     if (lastName?.length < 3) {
  //       err = { ...err, lastName: "LastName should be atleast 3 char" };
  //     }
  //     if (mobile && !/^[0-9]{10,12}$/.test(mobile)) {
  //       err = { ...err, mobile: "Please enter valid mobile number" };
  //     }
  //     setErrors(err);
  //   };
  //   const validate = () => {
  //     const { firstName, lastName, mobile, email, password } = user;
  //     setErrors({});
  //     if (firstName?.length <= 3) {
  //       return setErrors({ firstName: "FirstName should be atleast 4 char" });
  //     }
  //     if (lastName?.length < 3) {
  //       return setErrors({ lastName: "LastName should be atleast 3 char" });
  //     }
  //     if (mobile &&!/^[0-9]{10,12}$/.test(mobile)) {
  //       return setErrors({ mobile: "Please enter valid mobile number" });
  //     }
  //   };
  const validate = () => {
    const { firstName, lastName, mobile, email, password } = user;
    setErrors({});
    if (firstName?.length <= 3) {
      return setErrors({
        ...user,
        firstName: "FirstName should be atleast 4 char",
      });
    }
    if (lastName?.length < 3) {
      return setErrors({
        ...user,
        lastName: "LastName should be atleast 3 char",
      });
    }
    if (mobile && !/^[0-9]{10,12}$/.test(mobile)) {
      return setErrors({ ...user, mobile: "Please enter valid mobile number" });
    }
  };
  useEffect(() => {
    validate();
  }, [user]);

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
              error={errors?.firstName ? true : false}
              helperText={errors?.firstName}
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
              error={errors?.lastName ? true : false}
              helperText={errors?.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="mobile"
              type={"tel"}
              variant="outlined"
              onChange={handleChange}
              label="Mobile"
              fullWidth
              error={errors?.mobile ? true : false}
              helperText={errors?.mobile}
            />
          </Grid>
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

export default FormValidation;
