import React from "react";
import { Link } from "react-router-dom";
import datBlogImage from "../../assets/DAT-blog-Image.png";

const DebouncingAndThrottlingBlog = () => {
  return (
    <section
      id="debouncing-throttling-blog"
      className="bg-gray-100 py-24 min-h-screen"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Debouncing and Throttling in JavaScript
        </h2>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-2/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex justify-center">
                <img
                  src={datBlogImage}
                  alt="Blog Post"
                  className="rounded-t-lg"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="p-4">
                <p className="mt-2 text-base text-gray-600">
                  Debouncing and throttling are two important concepts in
                  JavaScript that help manage and optimize event handling and
                  function execution. They are especially useful in scenarios
                  where frequent events occur or when executing
                  resource-intensive operations. In this blog post, we will
                  explore the concepts of debouncing and throttling, their
                  differences, and when to use each technique.
                </p>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  What is Debouncing?
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Debouncing is a technique used to limit the rate at which a
                  function is invoked. It ensures that a function is executed
                  only after a specified period of inactivity following the last
                  invocation. Debouncing is commonly used in scenarios where an
                  event handler needs to be triggered only once after a series
                  of rapid-fire events.
                </p>

                <p className="mt-2 text-base text-gray-600">
                  Let's take an example of a search input field. When a user
                  types in the search box, an event is triggered for every
                  keystroke. Without debouncing, this can lead to excessive API
                  calls or unnecessary processing. By debouncing the event
                  handler, we can ensure that the search function is called only
                  after the user has finished typing or paused for a specified
                  duration.
                </p>

                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  Debouncing Example
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Here's an example of how to implement debouncing in
                  JavaScript:
                </p>

                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    Debouncing Function Example
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`function debounce(func, delay) {
  let timeoutId;
  
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  }
}

const searchInput = document.getElementById('search-input');

function handleSearch() {
  // Perform search operation
}

const debouncedSearch = debounce(handleSearch, 300);

searchInput.addEventListener('input', debouncedSearch);`}
                    </code>
                  </pre>
                </div>

                <p className="mt-2 text-base text-gray-600">
                  In the example, we have an input field with an input event
                  listener attached to it. Whenever the user types in the input
                  field, the handleSearch function is triggered. However,
                  instead of executing the handleSearch function immediately, we
                  debounce it using the debounce function.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  The debounce function takes two parameters: the func (the
                  function to be debounced) and the delay (the delay time in
                  milliseconds). It returns a new function that wraps the
                  original function and ensures that it is only invoked after
                  the specified delay has passed since the last invocation.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  In this example, the debouncedSearch function is created by
                  calling debounce(handleSearch, 300). This means that the
                  handleSearch function will be invoked only after 300
                  milliseconds have passed since the last invocation of
                  debouncedSearch.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  By using debouncing, we can prevent the handleSearch function
                  from being called too frequently while the user is still
                  typing. This helps improve performance and avoids unnecessary
                  API requests or other resource-intensive operations.
                </p>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  What is Throttling?
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Throttling is a technique used to limit the rate at which a
                  function is invoked. It ensures that a function is executed at
                  regular intervals, regardless of how frequently the event
                  triggering the function occurs. Throttling is commonly used to
                  prevent performance issues caused by excessive function
                  invocations or to limit resource usage.
                </p>

                <p className="mt-2 text-base text-gray-600">
                  For example, imagine a scenario where a scroll event listener
                  triggers a function that performs some heavy computations or
                  updates the UI. Without throttling, the function may be
                  executed too frequently, leading to performance degradation
                  and potential UI freezes. By throttling the event handler, we
                  can ensure that the function is invoked at a fixed interval,
                  reducing the number of times it is executed.
                </p>

                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  Throttling Example
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Here's an example of how to implement throttling in
                  JavaScript:
                </p>

                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    Throttling Function Example
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`function throttle(func, limit) {
  let inThrottle = false;
  
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }
}

function handleScroll() {
  // Perform scroll-related operations
}

const throttledScroll = throttle(handleScroll, 200);

window.addEventListener('scroll', throttledScroll);`}
                    </code>
                  </pre>
                </div>

                <p className="mt-2 text-base text-gray-600">
                  In the example, we have a scroll event listener attached to
                  the window object. Whenever the user scrolls the page, the
                  handleScroll function is triggered. However, instead of
                  executing the handleScroll function every time the scroll
                  event occurs, we throttle it using the throttle function.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  The throttle function takes two parameters: the func (the
                  function to be throttled) and the limit (the minimum time
                  interval between invocations in milliseconds). It returns a
                  new function that wraps the original function and ensures that
                  it is invoked at regular intervals, with a minimum delay of
                  the specified limit between invocations.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  In this example, the throttledScroll function is created by
                  calling throttle(handleScroll, 200). This means that the
                  handleScroll function will be invoked at most once every 200
                  milliseconds, regardless of how frequently the user scrolls.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  By using throttling, we can prevent the handleScroll function
                  from being executed too frequently, which can help improve
                  performance and prevent UI freezes or other issues caused by
                  excessive function invocations.
                </p>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Debounce vs Throttle
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  While both debouncing and throttling are techniques used to
                  limit the rate at which a function is invoked, there are
                  differences in how they achieve this.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Debouncing delays the invocation of a function until a
                  specified period of inactivity has passed since the last
                  invocation. It ensures that the function is called only once
                  after a series of rapid-fire events. For example, in a search
                  input field, debouncing can be used to trigger the search
                  function only after the user has finished typing or paused for
                  a specified duration. Debouncing helps prevent excessive
                  function invocations when events occur rapidly, improving
                  performance and avoiding unnecessary operations.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Throttling, on the other hand, limits the rate at which a
                  function is invoked by ensuring it is executed at regular
                  intervals, regardless of how frequently the event occurs.
                  Throttling is useful when you want to execute a function
                  regularly, but not too frequently. For example, in a scroll
                  event handler, throttling can be used to ensure that the
                  handleScroll function is invoked at a fixed interval, reducing
                  the number of times it is executed. Throttling helps prevent
                  performance issues caused by excessive function invocations
                  and can limit resource usage.
                </p>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Debounce vs Throttle Implementation Example
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  The provided code example demonstrates the implementation of
                  debounce and throttle functions to handle input events on an
                  input field. The purpose of these functions is to control how
                  frequently the input events are processed to optimize
                  performance.
                </p>

                <p className="mt-2 text-base text-gray-600">
                  This can be implemented to optimize performance for fetching
                  data from APIs, for example, search boxes in e-commerce
                  websites where users make search request by typing product
                  name in search box, which if not optimized then could lead to
                  excessive API calls and resource-intensive operations, which
                  could result in unnecessary load on the server.
                </p>
                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    index.html
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`<!DOCTYPE html>
<html>
  <head>
    <title>Debounce VS Throttle</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="container">
      <input type="text" />
      <div>
        <b>Default Text:</b>
        <span id="defaultText"></span>
      </div>
      <div>
        <b>Debounce Text:</b>
        <span id="debounceText"></span>
      </div>
      <div>
        <b>Throttle Text:</b>
        <span id="throttleText"></span>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
`}
                    </code>
                  </pre>
                </div>

                <p className="mt-2 text-base text-gray-600">
                  The code starts by selecting the necessary HTML elements using
                  "document.getElementById" and "document.querySelector":
                  <ul>
                    <li>
                      input: Represents the input field where the user types
                      text.
                    </li>
                  </ul>
                </p>

                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    index.js
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`const input = document.querySelector("input");
const defaultText = document.getElementById("defaultText");
const debounceText = document.getElementById("debounceText");
const throttleText = document.getElementById("throttleText");

const updatedDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 500);

const updatedThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 500);

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updatedDebounceText(e.target.value);
  updatedThrottleText(e.target.value);
});

function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunction = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunction, delay);
  };
}
`}
                    </code>
                  </pre>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <iframe
                    src="https://codesandbox.io/embed/javascript-forked-ckwf3p?fontsize=14&hidenavigation=1&theme=dark"
                    style={{
                      width: "100%",
                      height: "500px",
                      border: "0",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                    title="JavaScript (forked)"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Explanation
                </h3>
                <ul className="list-disc list-inside mt-2 text-base text-gray-600">
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      The JavaScript code starts by selecting the relevant HTML
                      elements using "document.getElementById" and
                      "document.querySelector."
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      defaultText, debounceText, throttleText: Represent the
                      "span" elements with IDs "defaultText", "debounceText",
                      and "throttleText," respectively, where the text outputs
                      will be displayed.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      Two functions, debounce and throttle, are defined. These
                      functions will wrap the callback functions and control the
                      timing of their execution.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      The updatedDebounceText and updatedThrottleText functions
                      are created by passing the respective callback functions
                      and the desired delay time (in milliseconds) to the
                      debounce and throttle functions. These functions will be
                      used to update the contents of the "Debounce Text" and
                      "Throttle Text" elements, respectively.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      An event listener is added to the input field to listen
                      for input events. When the user types in the input field,
                      the event listener updates the "Default" text immediately
                      and uses the updatedDebounceText and updatedThrottleText
                      functions to update the "Debounce Text" and "Throttle
                      Text" elements with a delay of 500 milliseconds.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      The debounce function is implemented to delay the
                      execution of a function until after a certain time period
                      has passed since the last time the debounced function was
                      invoked. This helps prevent rapid, repeated calls to the
                      function during user input.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 mr-2">•</span>
                    <span>
                      The throttle function is implemented to control how often
                      a function can be called during a specific time period. It
                      allows the function to execute at most once within the
                      specified time interval, helping to limit the frequency of
                      function calls during continuous events like scrolling or
                      input.
                    </span>
                  </li>
                </ul>

                <p className="mt-2 text-base text-gray-600">
                  In summary, debouncing delays the invocation of a function
                  until a period of inactivity has passed, while throttling
                  limits the rate of function invocation by ensuring it is
                  executed at regular intervals. The choice between debounce and
                  throttle depends on the specific use case and the desired
                  behavior of the function.
                </p>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Conclusion
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Debouncing and throttling are powerful techniques that can
                  improve the performance and responsiveness of JavaScript
                  applications. Understanding when and how to use them can help
                  optimize event handling and prevent resource-intensive
                  operations from impacting the user experience. By applying
                  debouncing and throttling, you can create smoother and more
                  efficient web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            to="/blog"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DebouncingAndThrottlingBlog;
