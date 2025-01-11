const Chat = require('../models/Chat');

// Save a chat message
exports.saveMessage = async (req, res) => {
  const { roomId, userName, message } = req.body;
  try {
    let chat = await Chat.findOne({ roomId });
    if (!chat) {
      chat = new Chat({ roomId, messages: [] });
    }
    chat.messages.push({ userName, message });
    await chat.save();
    res.status(200).json({ message: 'Message saved successfully', chat });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get chat history for a room
exports.getChatHistory = async (req, res) => {
  try {
    const chat = await Chat.findOne({ roomId: req.params.roomId });
    if (!chat) return res.status(404).json({ message: 'No chat history found' });
    res.status(200).json(chat.messages);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
