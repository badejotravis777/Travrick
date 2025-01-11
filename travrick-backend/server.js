const http = require('http');
const { Server } = require('socket.io');

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Real-time socket events
io.on('connection', (socket) => {
    console.log('New client connected');
  
    // Join room
    socket.on('joinRoom', ({ roomId, userName }) => {
      socket.join(roomId);
      io.to(roomId).emit('message', `${userName} has joined the room`);
    });
  
    // Handle chat messages
    socket.on('sendMessage', ({ roomId, userName, message }) => {
      const chatMessage = {
        userName,
        message,
        timestamp: new Date().toISOString(),
      };
      io.to(roomId).emit('receiveMessage', chatMessage);
    });
  
    // Pause and play events
    socket.on('pause', (roomId) => {
      io.to(roomId).emit('pause');
    });
  
    socket.on('play', (roomId) => {
      io.to(roomId).emit('play');
    });
  
    // Leave room
    socket.on('leaveRoom', ({ roomId, userName }) => {
      socket.leave(roomId);
      io.to(roomId).emit('message', `${userName} has left the room`);
    });
  
    // Disconnect
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  