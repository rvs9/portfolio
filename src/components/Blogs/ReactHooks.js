import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";

const ReactHooks = () => {

  return (
    <>
      <section id="react-hooks-blog" className="bg-gray-100 py-24 min-h-screen">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
            Understanding React Hooks
          </h2>
          <div className="flex flex-wrap justify-center mt-12">
            <div className="w-full md:w-2/3 p-4">
              <div className="bg-white rounded-lg shadow-md">
                <div className="flex justify-center">
                  <img
                    src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg"
                    alt="React hooks logo"
                    className="rounded-t-lg"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="p-4">
                  <p className="mt-2 text-base text-gray-600">
                    React Hooks have revolutionized the way we handle state and
                    side effects in React components. They provide a more
                    concise and intuitive way to manage component state, make
                    API calls, and share data between components. In this blog
                    post, we will explore some of the most commonly used React
                    Hooks and how they can improve your React development
                    experience.
                  </p>

                  <h3 className="mt-4 text-xl font-bold text-gray-800">
                    useState: Managing Component State
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The useState hook allows you to add state to your functional
                    components. It takes an initial value as an argument and
                    returns an array with two elements: the current state value
                    and a function to update the state. Let's see an example:
                  </p>

                  {/* useState Example */}
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useState Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`const [count, setCount] = useState(0);

// Updating the state
const handleIncrement = () => {
  setCount(count + 1);
};`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      In this example, we initialize the count state with a
                      value of 0. The handleIncrement function updates the count
                      state by incrementing its value. The useState hook takes
                      care of preserving the state between re-renders and
                      triggering the component to update when the state changes.
                    </p>
                  </div>

                  {/* useEffect Example */}
                  <h3 className="mt-8 text-xl font-bold text-gray-800">
                    useEffect: Managing Side Effects
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The useEffect hook enables you to perform side effects in
                    functional components. It takes two arguments: a function to
                    run after rendering, and an optional array of dependencies
                    to control when the effect should run. Let's consider an
                    example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useEffect Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`useEffect(() => {
  fetchData();
}, []);`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      In this example, we use the useEffect hook to fetch data
                      from an API. The empty dependency array ensures that the
                      effect runs only once, immediately after the component is
                      mounted. You can specify dependencies to control when the
                      effect should run, such as when certain props or state
                      values change.
                    </p>
                  </div>

                  {/* useContext Example */}
                  <h3 className="mt-8 text-xl font-bold text-gray-800">
                    useContext: Sharing Data Between Components
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The useContext hook allows you to access the value of a
                    context directly within a functional component. It
                    eliminates the need for intermediate components to pass down
                    props. Let's look at an example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useContext Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`const theme = useContext(ThemeContext);

return (
  <div style={{ background: theme.background, color: theme.text }}>
    // Component content
  </div>
);`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      In this example, we access the theme value from the
                      ThemeContext directly within a component. The useContext
                      hook makes it easy to share data or state between
                      components without having to pass props through multiple
                      layers.
                    </p>
                  </div>

                  {/* useMemo Example */}
                  <h3 className="mt-8 text-xl font-bold text-gray-800">
                    useMemo: Optimizing Expensive Computations
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    The useMemo hook allows you to memoize the result of an
                    expensive computation and cache it for subsequent renders.
                    It helps optimize performance by avoiding unnecessary
                    computations. Let's see an example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useMemo Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`const expensiveOperation = useMemo(() => {
  // Expensive computation
  return result;
}, [dependency]);`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      In this example, we memoize the result of an expensive
                      operation based on a dependency. If the dependency value
                      remains the same, the useMemo hook returns the cached
                      result without recomputing it. This optimization can be
                      useful when dealing with heavy computations or complex
                      calculations.
                    </p>
                  </div>

                  <p className="mt-8 text-base text-gray-600">
                    React Hooks have transformed the way we develop React
                    applications. They provide a more concise and readable
                    syntax for managing state and side effects in functional
                    components. By leveraging hooks like useState, useEffect,
                    useContext, and useMemo, you can improve code reusability,
                    performance, and developer productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/blogs"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Read More Blog Posts
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReactHooks;
