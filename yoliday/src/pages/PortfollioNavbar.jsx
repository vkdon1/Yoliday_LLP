import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const PortfollioNavbar = ({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
}) => {
  return (
    <div className="bg-white text-orange-500 p-6 shadow-md fixed top-36 right-40 w-70% z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-lg font-bold px-4">Portfolio</div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6 px-4">
          <Link to="/Pojects" className="text-md hover:underline">
            Project
          </Link>
          <Link to="/Save" className="text-md hover:underline">
            Save
          </Link>
          <Link to="/Shared" className="text-md hover:underline">
            Shared
          </Link>
          <Link to="/Achivements" className="text-md hover:underline">
            Achievements
          </Link>
        </div>

        {/* Search Bar and Filter */}
        <div className="flex items-center space-x-6 px-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Projects..."
            className="p-2 border border-orange-500 rounded focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filter Dropdown */}
          <select
            className="p-2 border border-orange-500 rounded focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Al-Baij Sammaan">Al-Baij Sammaan</option>
            <option value="Jane Doe">Jane Doe</option>
            <option value="John Smith">John Smith</option>
            <option value="Anna Lee">Anna Lee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PortfollioNavbar;
