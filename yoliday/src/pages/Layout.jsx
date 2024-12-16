import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import PortfollioNavbar from "./PortfollioNavbar"; // Import your Navbar component

const Layout = ({ searchQuery, setSearchQuery, filter, setFilter }) => {
  return (
    <div>
      {/* Always render the Portfolio Navbar */}
      <PortfollioNavbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Render the current page content here */}
      <main className="pt-24">
        {" "}
        {/* Added padding to avoid overlap with fixed navbar */}
        <Outlet /> {/* This renders the child route's component */}
      </main>
    </div>
  );
};

export default Layout;
