import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Weather-APP</h1>
      <ul className="hidden md:flex">
        <Link to="/home" className="p-4">
          HOME
        </Link>
        <Link to="/main" className="p-4">
          MAIN
        </Link>
        <Link to="/resources" className="p-4">
          RESOURCES
        </Link>
        <Link to="/profile" className="p-4">
          PROFILE
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Weather-APP
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">MAIN</li>
          <li className="p-4 border-b border-gray-600">RESOURCES</li>
          <li className="p-4 ">PROFILE</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
