import React from "react";
import { Link } from "gatsby";

const Logo = () => (
  <div>
    <Link to="/" className="flex items-center py-4 px-2">
      <h1 className="font-semibold text-red-500 text-3xl">FumoSite</h1>
    </Link>
  </div>
);

export default Logo