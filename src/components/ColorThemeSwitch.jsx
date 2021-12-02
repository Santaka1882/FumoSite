import React from "react";

const ColorThemeSwitch = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex items-center space-x-3"
  >
    <div className="flex items-center w-16 h-8 rounded-full bg-red-500">
      <div className="bg-white h-6 w-6 mx-1 rounded-full"></div>
    </div>
  </button>
);

export default ColorThemeSwitch