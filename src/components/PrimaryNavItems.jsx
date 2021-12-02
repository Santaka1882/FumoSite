import React from "react";
import { Link } from "gatsby";

const PrimaryNavItems = () => (
  <div className="hidden md:flex items-center space-x-1">
    <Link
      to="/"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
    >
      Home
    </Link>
    <Link
      to="/fumos"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
    >
      Fumo list
    </Link>
    <Link
      to="/about"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500"
    >
      About
    </Link>
  </div>
);

export default PrimaryNavItems;
