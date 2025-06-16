const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// GET /api/chats?q=search
router.get("/", async (req, res) => {
  const { q } = req.query;
  const chats = q
    ? await Chat.find({
        $or: [
          { firstName: { $regex: q, $options: "i" } },
          { lastName: { $regex: q, $options: "i" } },
        ],
      })
    : await Chat.find();
  res.json(chats);
});

// POST /api/chats
router.post("/", async (req, res) => {
  const chat = new Chat(req.body);
  await chat.save();
  res.status(201).json(chat);
});

// PUT /api/chats/:id
router.put("/:id", async (req, res) => {
  const updatedChat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedChat);
});

// DELETE /api/chats/:id
router.delete("/:id", async (req, res) => {
  await Chat.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;


