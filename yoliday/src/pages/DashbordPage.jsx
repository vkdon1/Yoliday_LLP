import React, { useState } from "react";

const DashboardPage = () => {
  const [tasksCompleted, setTasksCompleted] = useState(22); // Initial value

  // Function to increment tasks completed
  const handleAddToCard = () => {
    setTasksCompleted(tasksCompleted + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, John!
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700">Total Projects</h2>
          <p className="text-3xl font-bold text-blue-500">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700">Achievements</h2>
          <p className="text-3xl font-bold text-green-500">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700">Tasks Completed</h2>
          <p className="text-3xl font-bold text-yellow-500">{tasksCompleted}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-4 mb-6">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          onClick={handleAddToCard} // Increment task on click
        >
          + Add to Card
        </button>
        <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
          Share Content
        </button>
        <button className="px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition">
          Explore Challenges
        </button>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Recent Activities
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Project A Updated</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Task Completed</span>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>New Comment on Project B</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </li>
        </ul>
      </div>

      {/* Chart (Placeholder) */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Progress Overview
        </h2>
        <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart goes here</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
