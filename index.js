const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Store connected users and messages
const connectedUsers = new Map();
const messageHistory = [];

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Handle user joining
  socket.on('join', (userData) => {
    const { username, avatar } = userData;
    connectedUsers.set(socket.id, { username, avatar, id: socket.id });
    
    // Send message history to new user
    socket.emit('messageHistory', messageHistory);
    
    // Notify others about new user
    socket.broadcast.emit('userJoined', { username, avatar, id: socket.id });
    
    // Send updated user list
    const users = Array.from(connectedUsers.values());
    io.emit('userList', users);
    
    console.log(`${username} joined the chat`);
  });

  // Handle new messages
  socket.on('sendMessage', (messageData) => {
    const { content, timestamp } = messageData;
    const user = connectedUsers.get(socket.id);
    
    if (user) {
      const message = {
        id: Date.now().toString(),
        content,
        username: user.username,
        avatar: user.avatar,
        timestamp,
        userId: socket.id
      };
      
      // Store message in history (keep last 100 messages)
      messageHistory.push(message);
      if (messageHistory.length > 100) {
        messageHistory.shift();
      }
      
      // Broadcast message to all clients
      io.emit('newMessage', message);
      console.log(`Message from ${user.username}: ${content}`);
    }
  });

  // Handle typing indicator
  socket.on('typing', (isTyping) => {
    const user = connectedUsers.get(socket.id);
    if (user) {
      socket.broadcast.emit('userTyping', {
        username: user.username,
        isTyping
      });
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    const user = connectedUsers.get(socket.id);
    if (user) {
      connectedUsers.delete(socket.id);
      
      // Notify others about user leaving
      socket.broadcast.emit('userLeft', {
        username: user.username,
        id: socket.id
      });
      
      // Send updated user list
      const users = Array.from(connectedUsers.values());
      io.emit('userList', users);
      
      console.log(`${user.username} left the chat`);
    }
  });
});

// API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Chat server is running' });
});

app.get('/api/users', (req, res) => {
  const users = Array.from(connectedUsers.values());
  res.json(users);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Chat server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for connections`);
});
