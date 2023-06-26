import React from "react";

const ReactHooks = () => {
  return (
    <div>
      <article className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Understanding React Hooks</h3>
        <p className="mb-4">
          React hooks are a powerful feature introduced in React 16.8 that
          allows us to use state and other React features without writing a
          class component. Hooks provide a simpler and more intuitive way to
          manage state and lifecycle in functional components.
        </p>
        <p className="mb-4">
          There are several built-in hooks in React, such as useState,
          useEffect, useContext, and more. These hooks enable us to write
          cleaner and more reusable code by separating concerns and
          encapsulating stateful logic.
        </p>
        <p className="mb-4">
          The useState hook, for example, allows us to add state to our
          functional components. We can declare a state variable and a function
          to update it using array destructuring:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          {`import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`}
        </pre>
        <p className="mb-4">
          The useEffect hook allows us to perform side effects, such as fetching
          data or subscribing to events, in a functional component. We can use
          it to replace lifecycle methods like componentDidMount,
          componentDidUpdate, and componentWillUnmount:
        </p>
        <pre className="bg-gray-200 p-4 rounded">
          {`import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
};`}
        </pre>
        <p>
          React hooks have revolutionized the way we write React components.
          They make it easier to write and test reusable code, improve code
          organization, and enhance the performance of our applications.
          Learning and using React hooks is a valuable skill for any React
          developer.
        </p>
      </article>
    </div>
  );
};

export default ReactHooks;
