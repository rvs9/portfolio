import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded shadow-lg p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link to={link} className="text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
