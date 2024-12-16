import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa"; // Importing Icons

const Navbar = () => {
  return (
    <div className="fixed top-0 left-30 w-full bg-white h-16 flex items-center justify-end px-4 shadow-md z-10">
      <h1 className="absolute -top-0 -left-0 ">
        {" "}
        <svg
          class="h-10 w-10 text-cyan-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          {" "}
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />{" "}
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>{" "}
        Logo
      </h1>
      {/* Notification Bell */}
      <div className="relative mr-4 cursor-pointer">
        <FaBell className="text-gray-700 text-3xl" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          3
        </span>
      </div>

      {/* Profile Icon */}
      <FaUserCircle className="text-gray-700 text-4xl cursor-pointer" />
    </div>
  );
};

export default Navbar;
