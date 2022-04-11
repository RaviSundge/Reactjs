import React from "react";
import { Formik } from "formik";
const BasicFormik = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        border: "2px solid cyan",
      }}
    >
      <Formik
        initialValues={{ name: "", email: "", mobile: "", password: "" }}
        onSubmit={(values) => {
          console.log("users:", values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <dl>
                <dt>Name:</dt>
                <dd>
                  <input onChange={handleChange} type={"text"} name={"name"} />
                </dd>
                <dt>Mobile:</dt>
                <dd>
                  <input onChange={handleChange} type={"tel"} name={"mobile"} />
                </dd>
                <dt>Email:</dt>
                <dd>
                  <input
                    onChange={handleChange}
                    type={"email"}
                    name={"email"}
                  />
                </dd>
                <dt>Password:</dt>
                <dd>
                  <input
                    onChange={handleChange}
                    type={"password"}
                    name={"password"}
                  />
                </dd>
                <dd>
                  <input type={"submit"} value={"Register"} />
                </dd>
              </dl>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BasicFormik;
