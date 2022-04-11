import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Conatct from "./Conatct";
import Home from "./Home";
import Layout from "./Layout";
import Post from "./Post";
const RoutingDemo = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Conatct />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutingDemo;
