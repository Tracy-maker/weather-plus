import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Home from "../../page/Home/Home";
import Main from "../../page/Main/Main";
import Resources from "../../page/Resources/Resources";
import Profile from "../../page/Profile/Profile";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/Login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Weather-APP</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <ul className="hidden md:flex">
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
          <li>
          <button
            className="p-4 hover:underline focus:outline-none"
            onClick={handleLogout}
          >
            Log Out
          </button>
          </li>
        </ul>
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
          <Link to="/home" className="p-4 border-b border-gray-600">
            HOME
          </Link>
          <Link
            to="/main"
            element={<Main />}
            className="p-4 border-b border-gray-600"
          >
            MAIN
          </Link>
          <Link to="/resources" className="p-4 border-b border-gray-600">
            RESOURCES
          </Link>
          <Link to="/profile" className="p-4 ">
            PROFILE
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
