import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Main;
