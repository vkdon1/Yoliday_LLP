import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Projects from "./pages/Pojects"; // Fixed typo here
import InputPage from "./pages/InputPage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/DashbordPage"; // Ensure your filename is correct
import PortfollioNavbar from "./pages/PortfollioNavbar";
import Save from "./pages/Save";
import Shared from "./pages/Shared";
import Achivements from "./pages/Achivements";
// Layout Component
const Layout = ({ children, showPortfolioNavbar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* General Navbar */}
      <Navbar />
      {/* Portfolio Navbar only for the Portfolio page */}
      {showPortfolioNavbar && <PortfollioNavbar />}
      {/* Main Content */}
      <div className="ml-64 w-full">
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route
          path="/Dashboard"
          element={
            <Layout showPortfolioNavbar={false}>
              <Dashboard />
            </Layout>
          }
        />

        {/* Portfolio Route */}
        <Route
          path="/Portfolio"
          element={
            <Layout showPortfolioNavbar={true}>
              <div>Portfolio Content Goes Here</div>
            </Layout>
          }
        />

        {/* Projects Route */}
        <Route
          path="/Pojects"
          element={
            <Layout showPortfolioNavbar={false}>
              <Projects /> {/* Fixed typo */}
            </Layout>
          }
        />
        <Route
          path="/Save"
          element={
            <Layout showPortfolioNavbar={true}>
              <Save /> {/* Fixed typo */}
            </Layout>
          }
        />
        <Route
          path="/Shared"
          element={
            <Layout showPortfolioNavbar={true}>
              <Shared /> {/* Fixed typo */}
            </Layout>
          }
        />
        <Route
          path="/Achivements"
          element={
            <Layout showPortfolioNavbar={true}>
              <Achivements /> {/* Fixed typo */}
            </Layout>
          }
        />

        {/* InputPage Route */}
        <Route
          path="/InputPage"
          element={
            <Layout showPortfolioNavbar={false}>
              <InputPage />
            </Layout>
          }
        />

        {/* Default Route */}
        <Route
          path="/InputPage"
          element={
            <Layout showPortfolioNavbar={false}>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
