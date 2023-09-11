import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-19 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Weather-APP</h1>
      <ul className="flex">
        <li className="p-4">HOME</li>
        <li className="p-4">MAIN</li>
        <li className="p-4">CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
