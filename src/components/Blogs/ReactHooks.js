import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Link } from "react-router-dom";

const ReactHooks = () => {
  // useState Example
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // useEffect Example
  useEffect(() => {
    // This effect could be used to fetch initial data from an API
    // or perform other side effects when the component mounts.
  }, []);

  // useContext Example
  const ThemeContext = React.createContext();
  const theme = useContext(ThemeContext);

  // useMemo Example
  const [fibonacci, setFibonacci] = useState([]);
  const calculateFibonacci = (n) => {
    if (n <= 1) return 1;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };
  useMemo(() => {
    const fibArray = Array.from({ length: 10 }, (_, i) =>
      calculateFibonacci(i)
    );
    setFibonacci(fibArray);
  }, []);

  // useRef Example
  const inputRef = useRef();

  // useCallback Example
  const handleClick = useCallback(() => {
    // Do something when the button is clicked
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <section className="bg-gray-100 py-12 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Understanding React Hooks
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg"
                alt="React hooks logo"
                className="w-full rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-base text-gray-600">
                  Dive into the world of React Hooks! 💻 From managing component
                  state with <code>useState</code> to optimizing performance
                  with <code>useMemo</code>, Hooks offer a sleek and intuitive
                  way to build dynamic React applications. Let's explore these
                  hooks with examples:
                </p>

                {/* useState Example */}
                <div className="border rounded-lg overflow-hidden mt-4">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    1. useState: Managing Component State
                  </h3>
                  <p className="p-4 text-base text-gray-600">
                    Add state to functional components with ease.{" "}
                    <code>useState</code> is a React hook that allows functional
                    components to manage local state. It returns a stateful
                    value and a function to update that value. The function
                    provided by <code>useState</code> is similar to{" "}
                    <code>this.setState</code> in class components but it does
                    not merge the old state with the new state. Instead, it
                    replaces the old state with the new one. It takes the
                    initial state as an argument and returns an array with the
                    current state value and a function to update it. Here's a
                    simple counter example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useState Example
                    </h4>
                    <div className="p-4 flex items-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-4"
                        onClick={handleIncrement}
                      >
                        Increment
                      </button>
                      <span className="text-xl">{count}</span>
                    </div>
                    <pre className="p-4 bg-gray-200 rounded-lg">
                      <code className="text-gray-800">
                        {`const [count, setCount] = useState(0);
const handleIncrement = () => {
  setCount(count + 1);
};`}
                      </code>
                    </pre>
                  </div>
                </div>
                {/* useEffect Example */}
                <div className="border rounded-lg overflow-hidden mt-8">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    2. useEffect: Managing Side Effects
                  </h3>
                  <p className="p-4 text-base text-gray-600">
                    Perform side effects in functional components. Fetch data
                    from an API when the component mounts:{" "}
                    <code>useEffect</code> is a hook that adds the ability to
                    perform side effects in functional components. It runs after
                    every render by default, but you can also specify when it
                    should run. Common use cases include data fetching,
                    subscriptions, or manually changing the DOM. It can return a
                    cleanup function to perform any necessary cleanup, such as
                    unsubscribing from subscriptions. It takes two arguments: a
                    function that contains the side effect, and an optional
                    array of dependencies. If provided, the effect will only
                    re-run if one of the dependencies has changed.
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useEffect Example
                    </h4>
                    <pre className="p-4 bg-gray-200 rounded-lg">
                      <code className="text-gray-800">
                        {`function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You clicked ${count} times";
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </div>
                {/* useContext Example */}
                <div className="border rounded-lg overflow-hidden mt-8">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    3. useContext: Sharing Data Between Components
                  </h3>
                  <p className="p-4 text-base text-gray-600">
                    Access context values directly within functional components.{" "}
                    <code>useContext</code> is a hook that provides a way to
                    consume values from a React context. It accepts a context
                    object (created by <code>React.createContext</code>) and
                    returns the current context value for that context. It is
                    particularly useful when you have deeply nested components
                    that need to access the same value without prop drilling.
                    Here's an example of using a theme context:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useContext Example
                    </h4>
                    <pre className="p-4 bg-gray-200 rounded-lg">
                      <code className="text-gray-800">
                        {`const theme = useContext(ThemeContext);

return (
  <div style={{ background: theme.background, color: theme.text }}>
    // Component content
  </div>
);`}
                      </code>
                    </pre>
                  </div>
                </div>
                {/* useMemo Example */}
                <div className="border rounded-lg overflow-hidden mt-8">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    4. useMemo: Optimizing Expensive Computations
                  </h3>
                  <p className="p-4 text-base text-gray-600">
                    Memoize the result of an expensive computation.{" "}
                    <code>useMemo</code> is a hook that memoizes the result of a
                    function and returns the memoized value. It is used to
                    optimize performance by avoiding unnecessary re-computation
                    of expensive operations. It takes a function and an array of
                    dependencies. The memoized value will only be recalculated
                    when one of the dependencies changes. Calculate Fibonacci
                    numbers:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useMemo Example
                    </h4>
                    <pre className="p-4 bg-gray-200 rounded-lg">
                      <code className="text-gray-800">
                        {`const expensiveOperation = useMemo(() => {
  // Expensive computation
  return result;
}, [dependency]);`}
                      </code>
                    </pre>
                    <div className="p-4 flex flex-col items-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
                        onClick={() => {
                          setFibonacci([]);
                          const fibArray = Array.from({ length: 10 }, (_, i) =>
                            calculateFibonacci(i)
                          );
                          setFibonacci(fibArray);
                        }}
                      >
                        Calculate Fibonacci
                      </button>
                      <span className="text-gray-800">
                        Result: {fibonacci.join(", ")}
                      </span>
                      <pre className="p-4 bg-gray-200 rounded-lg mt-4">
                        <code className="text-gray-800">
                          {`const [fibonacci, setFibonacci] = useState([]);
const calculateFibonacci = (n) => {
  if (n <= 1) return 1;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};
useMemo(() => {
  const fibArray = Array.from({ length: 10 }, (_, i) => calculateFibonacci(i));
  setFibonacci(fibArray);
}, []);`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                {/* useRef Example */}
                <div className="border rounded-lg overflow-hidden mt-8">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    5. useRef: Accessing DOM Elements
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Access DOM elements or store mutable values between renders.{" "}
                    <code>useRef</code> is a hook that creates a mutable
                    reference that persists across renders. It can be used to
                    access the DOM directly or to persist values between renders
                    without causing a re-render. It returns a mutable ref object
                    with a <code>.current</code> property initialized to the
                    passed argument. Example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useRef Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      Create a reference to an input element to access and
                      manipulate its properties directly.
                    </p>
                  </div>
                </div>

                {/* useCallback Example */}

                <div className="border rounded-lg overflow-hidden mt-8">
                  <h3 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    6. useCallback: Memoizing Event Handlers
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Memoize event handler functions to prevent unnecessary
                    re-renders. <code>useCallback</code> is a hook that memoizes
                    a callback function and returns a memoized version of the
                    function. It is useful when passing callbacks to child
                    components that rely on reference equality to prevent
                    unnecessary re-renders. It takes a callback function and an
                    array of dependencies. The memoized callback will only be
                    recalculated when one of the dependencies changes. Example:
                  </p>
                  <div className="border rounded-lg overflow-hidden mt-4">
                    <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                      useCallback Example
                    </h4>
                    <pre className="p-4">
                      <code className="text-gray-800">
                        {`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Clicked {count} times</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}`}
                      </code>
                    </pre>
                    <p className="p-4 text-base text-gray-600">
                      Memoize the handleClick event handler function to prevent
                      unnecessary re-renders.
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-base text-gray-600">
                  React Hooks offer a powerful way to manage state and side
                  effects in functional components.From managing state with
                  useState to optimizing performance with useMemo, Hooks provide
                  a sleek and intuitive way to handle complex logic within
                  functional components. Master hooks like useState, useEffect,
                  useContext, and useMemo to write cleaner, more efficient React
                  code.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/blog"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Read More Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReactHooks;
