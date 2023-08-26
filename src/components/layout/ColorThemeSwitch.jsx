import React from "react";

/* 
To display the button use the classes below after the "hidden" class
md:flex items-center space-x-3

*/

const ColorThemeSwitch = ({ onClick }) => (
  <button onClick={onClick} className="hidden">
    <div className="flex items-center w-16 h-8 rounded-full bg-red-500">
      <div className="bg-white h-6 w-6 mx-1 rounded-full"></div>
    </div>
  </button>
);

export default ColorThemeSwitch;
