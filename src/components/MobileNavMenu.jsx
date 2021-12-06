import React from "react";
import { Link } from "gatsby";

const MobileNavMenu = ({ show }) => (
  <div className={`mb-3 w-full ${show ? "" : "hidden"}`}>
    <ul className="flex items-center justify-center space-x-6 w-full pb-2 bg-white">
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
