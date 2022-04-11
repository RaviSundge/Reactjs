import { Button, Grid, TextField } from "@mui/material";
import { FieldArray, Formik } from "formik";
import React from "react";
const DynamicField = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", mobiles: [""], email: "", password: "" }}
        onSubmit={(values) => {
          console.log("users:", values);
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => {
          return (
            <form>
              <Grid
                container
                spacing={2}
                maxWidth={500}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                margin="auto"
              >
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    value={values.name}
                    fullWidth
                    onChange={handleChange}
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <FieldArray
                  name="mobiles"
                  render={({ push, remove }) => {
                    return values.mobiles.map((val, i) => {
                      return (
                        <Grid item xs={12} key={i}>
                          <TextField
                            name={`mobiles.${i}`}
                            value={val}
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Mobile"
                            variant="outlined"
                          />
                          {i === 0 && (
                            <Button
                              variant="contained"
                              onClick={() => push("")}
                            >
                              Add
                            </Button>
                          )}
                          {i > 0 && (
                            <Button
                              variant="contained"
                              onClick={() => remove(i)}
                            >
                              Delete
                            </Button>
                          )}
                        </Grid>
                      );
                    });
                  }}
                ></FieldArray>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    value={values.email}
                    fullWidth
                    onChange={handleChange}
                    label="Email"
                    type={"email"}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    value={values.password}
                    fullWidth
                    onChange={handleChange}
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={handleSubmit}>
                    submit
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

export default DynamicField;
