import { Link } from "react-router-dom";
import blogImage from "../assets/RPO-image-canva.jpg";

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-100 py-24 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Blog
        </h2>
        <p className="mt-4  text-center text-gray-800">
          Stay up-to-date with the latest trends and insights in web dev tech!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
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
                GraphQL is the developer-friendly query language for the modern web. It transforms how apps fetch data from an API, enabling you to get exactly what you want.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="graphQL"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img src={blogImage} alt="Blog Post" className="rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Introduction to GraphQL
              </h3>
              <p className="mt-2 text-base text-gray-600">
                As a React developer, it's essential to optimize your applications to deliver the best user experience. In this blog post, we will explore various performance optimization techniques in React and provide suitable examples to help you understand and implement them effectively.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="Performance-Optimization-in-React"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
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
                React hooks have revolutionized the way we write React components. They make it easier to write and test reusable code and enhance the performance of our applications.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="reactHooks"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
