import React from "react";
import { Link } from "gatsby";

const MobileNavMenu = ({ show }) => (
  <div className={`flex justify-center pb-3 mb-3 w-full ${show ? "" : "hidden"}`}>
    <ul className="grid grid-cols-2 w-4/5 gap-4 pb-2 bg-white">
      <li>
        <Link
          to="/"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/fumos"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          Fumo List
        </Link>
      </li>
      <li>
        <Link
          to="/helpfulPhrases"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          Helpful Phrases
        </Link>
      </li>
      <li>
        <Link
          to="/proxiesAndFowarders"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          Proxies
        </Link>
      </li>
      <li>
        <Link
          to="/resellers"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          Resellers
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block text-sm px-2 py-2 text-red-500 font-semibold border-b-2 border-red-500"
        >
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default MobileNavMenu;
