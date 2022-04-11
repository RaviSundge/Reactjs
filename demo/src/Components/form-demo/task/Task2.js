import React from "react";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Task2 = () => {
  return (
    <>
      <h2 className="text-center bg-danger text-white p-1 w-50 m-auto rounded-3 mt-5">
        BookMy Show
      </h2>
      <Formik
        initialValues={{
          movies: "",
          cinema: "",
          seats: "",
          date: "",
          total: "",
          classticket: "",
          mobile: "",
          email: "",
        }}
        validate={({
          movies,
          cinema,
          mobile,
          email,
          seats,
          date,
          total,
          classticket,
        }) => {
          let errors = {};
          // if (firstName && firstName?.length < 3)
          //   errors = {
          //     ...errors,
          //     firstName: "First name must have atleast 3 character",
          //   };
          // if (lastName && lastName?.length < 3)
          //   errors = {
          //     ...errors,
          //     lastName: "First name must have atleast 3 character",
          //   };

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
            <form
              onSubmit={handleSubmit}
              style={{ backgroundImage: "url(assets/bms.jpg)" }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  width: "50%",
                  margin: "auto",
                }}
              >
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Movie
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.movies}
                      onBlur={handleBlur}
                      label="Movie"
                      name="movies"
                      onChange={handleChange}
                      error={touched?.movies && errors?.movies}
                      helperText={touched?.movies && errors?.movies}
                      variant="outlined"
                    >
                      <MenuItem value={"PavanKhind"}>PavanKhind</MenuItem>
                      <MenuItem value={"Kashmir Files"}>Kashmir Files</MenuItem>
                      <MenuItem value={"RRR"}>RRR</MenuItem>
                      <MenuItem value={"The BatMan"}>The BatMan</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Cinema
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.cinema}
                      onBlur={handleBlur}
                      name="cinema"
                      onChange={handleChange}
                      error={touched?.cinema && errors?.cinema}
                      helperText={touched?.cinema && errors?.cinema}
                      variant="outlined"
                    >
                      <MenuItem value={"Abhiruchi CityPride"}>
                        Abhiruchi CityPride
                      </MenuItem>
                      <MenuItem value={"FunTime"}>FunTime</MenuItem>
                      <MenuItem value={"PVR"}>PVR</MenuItem>
                      <MenuItem value={"INOX"}>INOX</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    // label="Select Date"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="date"
                    value={values?.date}
                    error={touched?.date && errors?.date}
                    helperText={touched?.date && errors?.date}
                    type="date"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="No.of Seats"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="seats"
                    value={values?.seats}
                    error={touched?.seats && errors?.seats}
                    helperText={touched?.seats && errors?.seats}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Class
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.classticket}
                      onBlur={handleBlur}
                      label="classticket"
                      onChange={handleChange}
                      error={touched?.classticket && errors?.classticket}
                      helperText={touched?.classticket && errors?.classticket}
                      variant="outlined"
                      name="classticket"
                    >
                      <MenuItem value={`500`}>
                        VIP Lounge - &#8377; -500/
                      </MenuItem>
                      <MenuItem value={`300`}>
                        Platinum - &#8377; -300/
                      </MenuItem>
                      <MenuItem value={`200`}>Gold - &#8377; -200/</MenuItem>
                      <MenuItem value={`120`}>Silver - &#8377; -120/</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Amount to pay"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="total"
                    value={values?.classticket * values.seats}
                    // type="text"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
                  <Button
                    type="submit"
                    // className="btn-danger"
                    fullWidth
                    color="error"
                    sx={{
                      // color: "white",
                      // backgroundColor: "#d9534f",
                      padding: 1,
                      borderRadius: 5,
                    }}
                    variant="contained"
                  >
                    Proceed,to pay..
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

export default Task2;
