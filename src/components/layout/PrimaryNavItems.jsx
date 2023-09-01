import React from "react";
import { Link } from "gatsby";

const PrimaryNavItems = () => (
  <div className="hidden md:flex items-center space-x-1">
    <Link
      to="/"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      Home
    </Link>
    <Link
      to="/fumos"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      Fumo list
    </Link>
    <Link
      to="/helpfulPhrases"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      Helpful Phrases
    </Link>
    <Link
      to="/proxiesAndFowarders"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      Proxies
    </Link>
    <Link
      to="/resellers"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      Resellers
    </Link>
    {/* <Link
      to="/about"
      className="py-4 px-2 text-gray-500 border-b-4 hover:border-red-500 transition duration-300 hover:text-red-500 2xl:text-xl"
    >
      About
    </Link> */}
    
  </div>
);

export default PrimaryNavItems;
