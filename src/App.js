import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";

import NavBar from "./components/Navbar";

import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import About from "./components/About";
import GraphQL from "./components/Blogs/GraphQL";
import RPOBlog from "./components/Blogs/PerformanceOptimizationBlog";
import DBTBlog from "./components/Blogs/DebounceAndThrottling";
import ReactHooks from "./components/Blogs/ReactHooks";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="about" element={<About />} />
        <Route path="/blog/graphQL" element={<GraphQL />} />
        <Route
          path="/blog/Performance-Optimization-in-React"
          element={<RPOBlog />}
        />
        <Route path="/blog/react-hooks" element={<ReactHooks />} />
        <Route path="/blog/debounce-and-throttle" element={<DBTBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
