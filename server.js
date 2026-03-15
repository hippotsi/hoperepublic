





require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));

// API Routes
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);

// API 404 protection
app.use("/api", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// Catch-all route for frontend navigation
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






