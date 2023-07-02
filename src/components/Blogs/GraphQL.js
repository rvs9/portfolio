import React from "react";
import { Link } from "react-router-dom";
import graphQLBlogImage from "../../assets/graphQL-blog-image.png";

const GraphQL = () => {
  return (
    <section id="graphql-blog" className="bg-gray-100 py-24 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Introduction to GraphQL
        </h2>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="w-full md:w-2/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex justify-center">
                <img
                  src={graphQLBlogImage}
                  alt="graphQL logo"
                  className="rounded-t-lg"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="p-4">
                <p className="mt-2 text-base text-gray-600">
                  GraphQL is a developer-friendly query language for the modern
                  web. It has gained significant popularity in recent years as
                  an alternative to traditional RESTful APIs. By providing a
                  more efficient and flexible way to fetch data from an API,
                  GraphQL has revolutionized the way we think about data
                  fetching in web applications.
                </p>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  The Problem with REST
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  While RESTful APIs have served us well over the years, they
                  often suffer from over-fetching or under-fetching of data.
                  When building a RESTful API, the server defines specific
                  endpoints that return fixed data structures. This means that
                  clients have limited control over the data they receive. In
                  many cases, clients end up making multiple requests to fetch
                  the necessary data, resulting in performance bottlenecks and
                  increased network overhead.
                </p>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  How GraphQL Solves the Problem
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  GraphQL addresses the limitations of REST by allowing clients
                  to define the structure of the data they need. Instead of
                  relying on fixed endpoints, clients can send a single GraphQL
                  query specifying the fields they require. The server then
                  responds with precisely the data requested, minimizing
                  over-fetching and reducing the number of round trips.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  With GraphQL, clients can retrieve multiple resources in a
                  single request, eliminating the need for additional API calls.
                  This feature is particularly useful in scenarios where
                  components require data from multiple sources. Additionally,
                  GraphQL provides a powerful type system, allowing clients to
                  validate their queries against a schema defined by the server.
                  This ensures that only valid queries are executed, reducing
                  the likelihood of runtime errors.
                </p>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Code Examples
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Let's take a look at some code examples to understand how
                  GraphQL works:
                </p>

                {/* Query Example */}
                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    Query Example
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`query {
  user(id: "123") {
    name
    email
    posts {
      title
      content
    }
  }
}`}
                    </code>
                  </pre>
                  <p className="p-4 text-base text-gray-600">
                    This query requests the name and email of a user with ID
                    "123" along with the titles and content of their posts.
                  </p>
                </div>

                {/* Mutation Example */}
                <div className="border rounded-lg overflow-hidden mt-4">
                  <h4 className="bg-gray-200 p-3 text-lg font-bold text-gray-800">
                    Mutation Example
                  </h4>
                  <pre className="p-4">
                    <code className="text-gray-800">
                      {`mutation {
  createPost(input: {
    title: "New Post"
    content: "This is a blog post about GraphQL."
    author: "Rajat Saraswat"
  }) {
    id
    title
    content
  }
}`}
                    </code>
                  </pre>
                  <p className="p-4 text-base text-gray-600">
                    This mutation creates a new post with the specified title,
                    content, and author, and returns the ID, title, and content
                    of the created post.
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  How to Use and Implement GraphQL
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Implementing GraphQL in your application involves both
                  server-side and client-side components. Here's a step-by-step
                  guide to using and implementing GraphQL:
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  1. Define Your GraphQL Schema
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  The first step is to define your GraphQL schema. The schema
                  acts as a contract between the client and server, defining the
                  available data types, queries, mutations, and subscriptions.
                  It serves as the blueprint for the data that clients can
                  request from the server.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  2. Set Up a GraphQL Server
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Next, you'll need a server-side implementation to handle
                  incoming GraphQL queries and return the requested data. There
                  are various server frameworks and libraries available for
                  different programming languages, such as Apollo Server for
                  Node.js, Graphene for Python, and Prisma for TypeScript.
                  Choose the one that best suits your tech stack and set up your
                  GraphQL server.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  3. Define Resolvers
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Resolvers are functions that determine how the data is fetched
                  and returned in response to GraphQL queries. Each field in the
                  schema needs a corresponding resolver function that fetches
                  the data from your data source or database and returns it to
                  the client.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  4. Handle Mutations and Subscriptions
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  In addition to queries, GraphQL supports mutations for
                  modifying data and subscriptions for real-time updates. Define
                  the necessary mutations and subscriptions in your schema, and
                  implement the corresponding resolver functions to handle the
                  business logic and data updates.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  5. Set Up a GraphQL Client
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  On the client-side, you'll need a library or framework that
                  allows you to send GraphQL queries to the server and handle
                  the responses. Popular GraphQL client libraries include Apollo
                  Client, Relay, and urql. Choose the client library that fits
                  your needs and set it up in your application.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  6. Write GraphQL Queries and Mutations
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  Now that your server and client are set up, you can start
                  writing GraphQL queries and mutations to fetch and modify data
                  from your API. GraphQL queries allow you to specify the exact
                  data you need, avoiding over-fetching or under-fetching. Use
                  the client library to send the queries to the server and
                  process the responses.
                </p>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  7. Handle Real-Time Updates with Subscriptions
                </h4>
                <p className="mt-2 text-base text-gray-600">
                  If you've implemented subscriptions on the server, you can
                  leverage them on the client-side to receive real-time updates.
                  Set up event listeners using the client library and handle the
                  incoming subscription data to keep your UI in sync with the
                  server.
                </p>
                <h3 className="mt-4 text-xl font-bold text-gray-800">Pros</h3>
                <p className="mt-2 text-base text-gray-600">
                  GraphQL comes with several benefits that make it a popular
                  choice for modern APIs:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>
                    Efficient Data Fetching: With GraphQL, clients can request
                    only the data they need, reducing over-fetching and
                    under-fetching of data.
                  </li>
                  <li>
                    Single Endpoint: GraphQL APIs have a single endpoint, making
                    it simpler to manage and avoiding versioning issues.
                  </li>
                  <li>
                    Strongly Typed Schema: GraphQL uses a schema to define the
                    data types and operations, providing clear documentation and
                    validation.
                  </li>
                  <li>
                    Real-time Data: GraphQL supports real-time data with
                    subscriptions, allowing clients to receive updates when data
                    changes.
                  </li>
                  <li>
                    Tooling and Ecosystem: GraphQL has a rich ecosystem of tools
                    and libraries that facilitate development and integration.
                  </li>
                </ul>

                {/* Disadvantages of GraphQL */}
                <h3 className="mt-4 text-xl font-bold text-gray-800">Cons</h3>
                <p className="mt-2 text-base text-gray-600">
                  While GraphQL offers numerous advantages, it may not be the
                  best fit for every use case:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>
                    Overfetching: In certain situations, GraphQL may return more
                    data than needed, leading to unnecessary data transfer.
                  </li>
                  <li>
                    Learning Curve: Developers who are new to GraphQL may face a
                    learning curve in understanding its concepts and best
                    practices.
                  </li>
                  <li>
                    Server Complexity: Implementing a GraphQL server may require
                    additional complexity compared to a traditional RESTful API.
                  </li>
                  <li>
                    Cache Management: Properly managing caching can be
                    challenging due to the flexibility of queries in GraphQL.
                  </li>
                </ul>

                {/* Conclusion */}
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Conclusion
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  GraphQL is a powerful and flexible alternative to traditional
                  RESTful APIs. Its ability to allow clients to specify exactly
                  what data they need and its real-time capabilities make it an
                  excellent choice for modern applications. However, it's
                  essential to consider your project's specific requirements and
                  the learning curve before adopting GraphQL.
                </p>
                <p className="mt-2 text-base text-gray-600">
                  In summary, GraphQL can significantly improve the efficiency
                  and flexibility of your API interactions, making it worth
                  considering for your next project.
                </p>

                {/* Call to Action */}
                {/* <div className="flex justify-center mt-8">
                  <Link
                    to="/contact"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                  >
                    Contact Us to Learn More
                  </Link>
                </div> */}
                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Conclusion
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  GraphQL is a powerful and flexible alternative to traditional
                  RESTful APIs. Its ability to allow clients to specify exactly
                  what data they need and its real-time capabilities make it an
                  excellent choice for modern applications. However, it's
                  essential to consider your project's specific requirements and
                  the learning curve before adopting GraphQL.
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
  );
};

export default GraphQL;
