import React, { useState } from "react";
const BasicForm = () => {
  const [user, setUser] = useState({
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user:", user);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type={"text"} name={"name"} onChange={handleChange} />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input type={"tel"} name={"mobile"} onChange={handleChange} />
          </dd>
          <dt>Email</dt>
          <dd>
            <input type={"email"} name={"email"} onChange={handleChange} />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type={"password"}
              name={"password"}
              onChange={handleChange}
            />
          </dd>
          <dt>DOB</dt>
          <dd>
            <input type={"date"} name={"date"} onChange={handleChange} />
          </dd>
          <dt>Gender</dt>
          <dd>
            <input
              type={"radio"}
              name="gender"
              value={"male"}
              onChange={handleChange}
            />
            Male
            <input
              type={"radio"}
              name="gender"
              value={"female"}
              onChange={handleChange}
            />
            FeMale
          </dd>
          <dt>Status</dt>
          <dd>
            <select onChange={handleChange} name={"status"}>
              <option value={"active"}>Active</option>
              <option value={"inactive"}>Inactive</option>
            </select>
          </dd>
          <dt>
            <label>Agree terms and condition</label>
          </dt>
          <dd>
            <input
              type={"checkbox"}
              name={"agree"}
              onChange={() => {
                setUser({ ...user, agree: !user.agree });
              }}
            />
          </dd>
          <dd>
            <input type={"submit"} />
          </dd>
        </dl>
      </form>
    </>
  );
};

export default BasicForm;
