import React from "react";
import { useNavigate } from "react-router-dom";

const AchievementsPage = () => {
  const navigate = useNavigate();

  // Simulate no achievements
  const achievements = [];

  return (
    <div className="min-h-screen bg-gray-100 fixed flex-col items-center p-64">
      <h1 className="text-4xl font-bold text-gray-800 mb-1">Achievements</h1>

      {achievements.length === 0 ? (
        <div className="text-center mt-16">
          <div className="text-7xl text-orange-500 mb-5">★</div>
          <p className="text-xl font-semibold text-gray-600">
            No achievements yet!
          </p>
          <p className="text-gray-500 mt-2">
            Start your journey to earn your first achievement.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/Pojects")}>
            Explore Challenges
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl grid grid-cols-1 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-64 bg-white shadow rounded-lg flex items-center justify-between">
              <p className="text-gray-700 font-medium">{achievement.name}</p>
              <span className="text-yellow-400 text-2xl">★</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;
