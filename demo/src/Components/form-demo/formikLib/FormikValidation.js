import React from "react";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const FormikValidation = () => {
  return (
    <>
      <h2>Formik Validation</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          password: "",
        }}
        validate={({ firstName, lastName, mobile, email, password }) => {
          let errors = {};
          if (firstName && firstName?.length < 3)
            errors = {
              ...errors,
              firstName: "First name must have atleast 3 character",
            };
          if (lastName && lastName?.length < 3)
            errors = {
              ...errors,
              lastName: "First name must have atleast 3 character",
            };
          if (!mobile) errors = { ...errors, mobile: "Mobile is required" };
          else if (!/^[0-9]{10,10}$/.test(mobile))
            errors = {
              ...errors,
              mobile: "Mobile number must be 10 digits",
            };

          return errors;
        }}
        onSubmit={(values) => {
          console.log("Users: ", values);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={2}
                sx={{
                  width: "50%",
                  margin: "auto",
                }}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    label="First Name"
                    value={values?.firstName}
                    error={touched?.firstName && errors?.firstName}
                    helperText={touched?.firstName && errors?.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastName"
                    value={values?.lastName}
                    error={touched?.lastName && errors?.lastName}
                    helperText={touched?.lastName && errors?.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="mobile"
                    value={values?.mobile}
                    error={touched?.mobile && errors?.mobile}
                    helperText={touched?.mobile && errors?.mobile}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    value={values?.email}
                    error={errors?.email}
                    helperText={errors?.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    value={values?.password}
                    error={errors?.password}
                    helperText={errors?.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikValidation;
