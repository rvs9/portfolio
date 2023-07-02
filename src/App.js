import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GraphQL from "./components/Blogs/GraphQL";
import Main from "./components/Main";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
