import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Weather-APP</h1>
      <ul className="flex hidden">
        <li className="p-4">HOME</li>
        <li className="p-4">MAIN</li>
        <li className="p-4">RESOURCES</li>
        <li className="p-4">PROFILE</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div>
        <ul className="fixed left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00300]">
          <li className="p-4">HOME</li>
          <li className="p-4">MAIN</li>
          <li className="p-4">RESOURCES</li>
          <li className="p-4">PROFILE</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
