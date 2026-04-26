const express = require("express");
const router = express.Router();

// POST: chatbot response
router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  // Temporary response (AI baad me add karenge)
  const botReply = `You said: ${userMessage}`;

  res.json({ reply: botReply });
});

module.exports = router;
