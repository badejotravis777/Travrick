const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  messages: [
    {
      userName: { type: String, required: true },
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Chat', ChatSchema);
