import React from "react";
import { FaHome, FaFolder, FaTasks, FaUser } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-1/3 bg-orange-500 sm:w-1/4 md:w-[30%] lg:w-[17%]">
      {/* Sidebar content */}

      <h1 className="text-white text-2xl font-bold p-4 hidden md:block">
        <FaHome className="text-white text-2xl" />
      </h1>
      <ul className="text-white space-y-6 p-4 flex flex-col items-start">
        {/* Home */}
        <li className="flex items-center space-x-2">
          <svg
            class="h-6 w-6 text-sky-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <line x1="21" y1="10" x2="3" y2="10" />{" "}
            <line x1="21" y1="6" x2="3" y2="6" />{" "}
            <line x1="21" y1="14" x2="3" y2="14" />{" "}
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
          <Link to="/Dashboard">
            <span className="hidden md:block">Dashboard</span>
          </Link>
        </li>
        {/* Portfolio */}
        <li className="flex items-center space-x-2">
          <FaFolder className="text-white text-2xl" />
          <Link to="/Portfolio">
            <span className="hidden md:block">Portfolio</span>
          </Link>
        </li>
        {/* Inputs */}
        <li className="flex items-center space-x-2">
          <FaTasks className="text-white text-2xl" />
          <Link to="/InputPage">
            <span className="hidden md:block">Inputs</span>
          </Link>
        </li>
        {/* Profile */}
        <li className="flex items-center space-x-2">
          <FaUser className="text-white text-2xl" />
          <Link to="/Profile">
            <span className="hidden md:block">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
