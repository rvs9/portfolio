import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/tailwind.css";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
