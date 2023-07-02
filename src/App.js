import React from "react";
import { Outlet } from "react-router-dom";
import "./styles/tailwind.css";

import NavBar from "./components/Navbar";

import Footer from "./components/Footer";

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
