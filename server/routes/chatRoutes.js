const express = require("express");
const router = express.Router();

// Basic chatbot route (no external API required)
router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message || "";

    let reply = "";

    // Simple response logic
    if (userMessage.toLowerCase().includes("hello")) {
      reply = "Hello! How can I help you?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
      reply = "I am doing great! How about you?";
    } else if (userMessage.toLowerCase().includes("bye")) {
      reply = "Goodbye! Have a great day!";
    } else {
      reply = `You said: ${userMessage}`;
    }

    res.json({ reply });

  } catch (error) {
    res.status(500).json({ reply: "Internal server error" });
  }
});

module.exports = router;
