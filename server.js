
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const chatsRoutes = require("./routes/chats");
const messagesRoutes = require("./routes/messages");

app.use("/api/chats", chatsRoutes);
app.use("/api/chats/:chatId/messages", messagesRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`✅ Server on http://localhost:${process.env.PORT}`)
    )
  )
    .catch((err) => console.error("❌ Mongo error:", err));
      

