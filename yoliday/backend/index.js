import express from "express";
import cors from "cors";
import { apiRoutes } from "./routes/api.js"; // Named import ✅

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use("/api", apiRoutes); // Register the API routes

app.get("/", (req, res) => {
  res.send("Welcome to the Backend API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
