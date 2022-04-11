import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
const LiftingStateUp = () => {
  const [users, setUsers] = useState([]);
  const getUser = (user) => {
    setUsers([...users, user]);
    localStorage.setItem("users", JSON.stringify(users));
  };
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) setUsers(users);
  }, []);
  // console.log("getItem:", users);

  return (
    <>
      <CreateUser getUser={getUser} />
      <hr />
      <UserList users={users} />
    </>
  );
};

export default LiftingStateUp;
