import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/150" // Replace this with your actual image URL
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500"
        />

        {/* Name */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Vallabh Dongre
        </h1>

        {/* Additional Info (Optional) */}
        <p className="text-gray-600 text-lg">Web Developer | Student</p>
      </div>
    </div>
  );
};

export default ProfilePage;
