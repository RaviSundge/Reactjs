import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <h1>React router v6</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Conatct</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
