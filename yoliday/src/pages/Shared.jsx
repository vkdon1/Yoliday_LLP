import React, { useState } from "react";

const SharedPage = () => {
  const [tab, setTab] = useState("sharedWithMe"); // "sharedWithMe" or "sharedByMe"
  const sharedWithMe = []; // Replace with actual data
  const sharedByMe = []; // Replace with actual data

  const content = tab === "sharedWithMe" ? sharedWithMe : sharedByMe;

  return (
    <div className="min-h-screen bg-gray-100 p-64">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Shared Content</h1>
        <input
          type="text"
          placeholder="Search shared content"
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("sharedWithMe")}
          className={`px-4 py-2 rounded-lg ${
            tab === "sharedWithMe" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Shared with Me
        </button>
        <button
          onClick={() => setTab("sharedByMe")}
          className={`px-4 py-2 rounded-lg ${
            tab === "sharedByMe" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Shared by Me
        </button>
      </div>

      {/* Content */}
      {content.length === 0 ? (
        <div className="text-center mt-16">
          <div className="text-7xl text-gray-300 mb-4">🗂️</div>
          <p className="text-xl font-semibold text-gray-600">
            No shared content yet!
          </p>
          <p className="text-gray-500 mt-2">
            Start sharing with your friends now.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert("Navigate to share content")}>
            Share Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg flex flex-col">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Shared by {item.sharedBy} on {item.date}
              </p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  View
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedPage;
