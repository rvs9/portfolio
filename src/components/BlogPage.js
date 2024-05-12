import { Link } from "react-router-dom";
import blogImage from "../assets/RPO-image-canva.jpg";
import datBlogImage from "../assets/DAT-blog-Image.png";
import graphQLBlogImage from "../assets/graphQL-blog-image.png";
import reactHooksImage from "../assets/reactHooks-Image2.jpg";

const Blog = () => {
  return (
    <section
      id="blogs"
      className="py-24 min-h-screen w-full bg-gray-100 sm:px-6 md:px-8 lg:px-16  flex flex-col items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Blog
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-center text-gray-800">
          Welcome to my blog series, whether you're a seasoned React developer
          or just starting out, you'll find valuable insights and practical
          examples to level up your React skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-12 mx-10">
          <div className="bg-white rounded-lg shadow-md">
            <img
              src={reactHooksImage}
              alt="Blog Post"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Understanding React Hooks
              </h3>
              <p className="mt-2 text-base text-gray-600">
                React Hooks provide a more elegant and functional approach to
                managing state, side effects, and other React features within
                functional components. Let's dive in and discover how React
                Hooks can offer a cleaner and more concise way to write React
                code, making it easier to understand, maintain, and test.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="/blog/react-hooks"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <img
              src={graphQLBlogImage}
              alt="Blog Post"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Introduction to GraphQL
              </h3>
              <p className="mt-2 text-base text-gray-600">
                GraphQL is the developer-friendly query language for the modern
                web development. It transforms how apps fetch data from an API,
                enabling you to get exactly what you want by By providing a more
                efficient and flexible way to fetch the required resources.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="/blog/graphQL"
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
                Top Performance Optimizing Techniques
              </h3>
              <p className="mt-2 text-base text-gray-600">
                As a React developer, it's essential to optimize your
                applications to deliver the best user experience. In this blog
                post, we will explore various performance optimization
                techniques in React to help you understand and implement them
                effectively.
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
            <img src={datBlogImage} alt="Blog Post" className="rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Debouncing and Throttling in JavaScript
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Whether you're dealing with frequent events or
                resource-intensive operations, debouncing and throttling can be
                powerful techniques to optimize performance and enhance the user
                experience. So, let's dive in and master these JS concepts.
              </p>
              <div className="mt-4">
                <Link
                  className="py-2 px-4 bg-blue-600 text-white rounded-md font-bold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                  to="/blog/debounce-and-throttle"
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
