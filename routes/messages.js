const express = require("express");
const router = express.Router({ mergeParams: true });
const Message = require("../models/Message");
const axios = require("axios");

// GET /api/chats/:chatId/messages
router.get("/", async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId }).sort(
    "timestamp"
  );
  res.json(messages);
});

// POST /api/chats/:chatId/messages
router.post("/", async (req, res) => {
  const { text } = req.body;

  // Зберігаємо повідомлення користувача
  const userMsg = await Message.create({
    chatId: req.params.chatId,
    sender: "user",
    text,
  });

  // Отримуємо відповідь від API (бота)
  let botText = "Не вдалося отримати цитату";
  try {
    const { data } = await axios.get("https://api.quotable.io/random");
    botText = data.content;
  } catch (e) {
    console.error("Quote API error:", e);
  }

  const botMsg = await Message.create({
    chatId: req.params.chatId,
    sender: "bot",
    text: botText,
  });

  res.status(201).json({ userMsg, botMsg });
});

// DELETE /api/chats/:chatId/messages/:messageId
router.delete("/:messageId", async (req, res) => {
  const { chatId, messageId } = req.params;
  await Message.deleteOne({ _id: messageId, chatId });
  res.sendStatus(204);
});

module.exports = router;