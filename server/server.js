// server/server.js

const express = require("express");
const cors = require("cors");

// 🔹 Routes import
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Health check
app.get("/", (req, res) => {
  res.send("AI Chatbot API Running...");
});

// 🔹 Routes connect (IMPORTANT)
app.use("/api/chat", chatRoutes);

// 🔹 Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
