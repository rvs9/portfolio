import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Blog from "./components/Blog";
import GraphQL from "./components/Blogs/GraphQL";
import Home from "./components/Home";
import ReactHooks from "./components/Blogs/ReactHooks";
import PerformanceOptimizationBlog from "./components/Blogs/PerformanceOptimizationBlog";
import DebouncingAndThrottlingBlog from "./components/Blogs/DebounceAndThrottling";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "graphQL",
        element: <GraphQL />,
      },
      {
        path: "blogs/graphQL",
        element: <GraphQL />,
      },
      {
        path: "reactHooks",
        element: <ReactHooks />,
      },
      {
        path: "blogs/reactHooks",
        element: <ReactHooks />,
      },
      {
        path: "Performance-Optimization-in-React",
        element: <PerformanceOptimizationBlog />,
      },
      {
        path: "blogs/Performance-Optimization-in-React",
        element: <PerformanceOptimizationBlog />,
      },
      {
        path: "/debounce-and-throttle",
        element: <DebouncingAndThrottlingBlog />,
      },
      {
        path: "blogs/debounce-and-throttle",
        element: <DebouncingAndThrottlingBlog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
