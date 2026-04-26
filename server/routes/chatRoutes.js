const express = require("express");
const axios = require("axios");
const router = express.Router();

// 🔐 Put your OpenRouter API key here
const API_KEY = "PASTE_YOUR_API_KEY_HERE";

router.post("/", async (req, res) => {
  try {
    const userMessage = req.body?.message || "";

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const reply =
      response.data.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({ reply });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      reply: "Error fetching AI response"
    });
  }
});

module.exports = router;
