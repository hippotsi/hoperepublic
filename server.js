





require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// 🔥 Serve Frontend from /public
app.use(express.static(path.join(__dirname, "public")));

// Routes
const quizRoutes = require("./routes/quizRoutes");

app.use("/api/quizzes", quizRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


