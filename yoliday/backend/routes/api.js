import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the API");
});

router.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

router.post("/users", (req, res) => {
  const user = req.body; // Access data sent in POST request body
  res.status(201).json({ message: "User created", user });
});

export const apiRoutes = router; // Named export ✅
