const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/data.json");

// Utility function to read data from the JSON file
const readData = () => {
  const rawData = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(rawData);
};

// Route to get all projects
const getProjects = (req, res) => {
  try {
    const data = readData();
    res.status(200).json(data.projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

// Route to get saved projects
const getSavedProjects = (req, res) => {
  try {
    const data = readData();
    const savedProjects = data.projects.filter(
      (project) => project.status === "saved"
    );
    res.status(200).json(savedProjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch saved projects", error });
  }
};

// Route to get shared projects
const getSharedProjects = (req, res) => {
  try {
    const data = readData();
    const sharedProjects = data.projects.filter(
      (project) => project.status === "shared"
    );
    res.status(200).json(sharedProjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch shared projects", error });
  }
};

// Route to get achievements
const getAchievements = (req, res) => {
  try {
    const data = readData();
    res.status(200).json(data.achievements);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch achievements", error });
  }
};

module.exports = {
  getProjects,
  getSavedProjects,
  getSharedProjects,
  getAchievements,
};
