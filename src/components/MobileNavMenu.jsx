import React from "react";
import { Link } from "gatsby";

const MobileNavMenu = ({ show }) => (
  <div className={show ? "" : "hidden"}>
    <ul className="">
      <li>
        <Link
          to="/"
          className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/fumos"
          className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
        >
          Fumo List
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block text-sm px-2 py-4 text-white bg-red-500 font-semibold"
        >
          About
        </Link>
      </li>
    </ul>
  </div>
);

export default MobileNavMenu;
