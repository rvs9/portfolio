// const Blog = () => {
//   return (
//     <section id="blog" className="bg-gray-100 py-24 min-h-screen">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
//           Blog
//         </h2>
//         <div className="flex flex-wrap justify-center mt-12">
//           <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md">
//               <img
//                 src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg"
//                 alt="Blog Post"
//                 className="rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Understanding React Hooks
//                 </h3>
//                 <p className="mt-2 text-base text-gray-600">
//                   React hooks have revolutionized the way we write React
//                   components. They make it easier to write and test reusable cod
//                   and enhance the performance of our applications.
//                 </p>
//                 <div className="mt-4">
//                   <a
//                     href="ReactHooks"
//                     className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <div className="bg-white rounded-lg shadow-md">
//               <img
//                 src="https://www.srijan.net/hubfs/graphql-future-api.png"
//                 alt="Blog Post"
//                 className="rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Introduction to GraphQL
//                 </h3>
//                 <p className="mt-2 text-base text-gray-600">
//                   GraphQL is the developer-friendly query language for the
//                   modern web. It transforms how apps fetch data from an API,
//                   enabling you to get exactly what you want.
//                 </p>
//                 <div className="mt-4">
//                   <a
//                     href="GraphQl"
//                     className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";

import ReactHooks from "./Blogs/ReactHooks";
import GraphQL from "./Blogs/GraphQL";
import ReactContextBlog from "./Blogs/ReactContextBlog";

const Blog = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setActiveBlog(blog);
  };

  const renderBlogContent = () => {
    switch (activeBlog) {
      case "ReactHooks":
        return <ReactHooks />;
      case "GraphQl":
        return <GraphQL />;
      case "ReactContext":
        return <ReactContextBlog />;

      default:
        return null;
    }
  };

  return (
    <section id="blog" className="bg-gray-100 py-24 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Blog
        </h2>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg"
                alt="Blog Post"
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Understanding React Hooks
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  React hooks have revolutionized the way we write React
                  components. They make it easier to write and test reusable cod
                  and enhance the performance of our applications.
                </p>
                <div className="mt-4">
                  <button
                    className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                    onClick={() => handleBlogClick("ReactHooks")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://www.srijan.net/hubfs/graphql-future-api.png"
                alt="Blog Post"
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Introduction to GraphQL
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  GraphQL is the developer-friendly query language for the
                  modern web. It transforms how apps fetch data from an API,
                  enabling you to get exactly what you want.
                </p>
                <div className="mt-4">
                  <button
                    className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                    onClick={() => handleBlogClick("GraphQl")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*MkLBSIsUGuf-ZSqvyCeAHQ.png"
                alt="Blog Post"
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Exploring React Context
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  React Context is a powerful feature in React that allows easy
                  sharing of state and data across comps, eliminating the need
                  for prop drilling. Learn how to leverage React Context
                  effectively.
                </p>
                <div className="mt-4">
                  <button
                    className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                    onClick={() => handleBlogClick("ReactContext")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-12">{renderBlogContent()}</div>
      </div>
    </section>
  );
};

export default Blog;
