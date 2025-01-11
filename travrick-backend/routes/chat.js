const express = require('express');
const { saveMessage, getChatHistory } = require('../controllers/chatController');
const router = express.Router();

router.post('/save', saveMessage); // Save a chat message
router.get('/:roomId', getChatHistory); // Get chat history for a room

module.exports = router;
