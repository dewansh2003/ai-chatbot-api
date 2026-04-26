// server/server.js

const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("AI Chatbot API Running...");
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
