const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// In-memory storage for messages (in production, use a database)
let messages = [
    "You are amazing! ✨",
    "Today is going to be great! 🌟",
    "You make the world better just by being you 💖",
    "Keep shining your light! 🌟",
    "You've got this! 💪",
    "Sending you positive vibes! 🌈",
    "You are loved and appreciated! 💕",
    "Your smile brightens someone's day! 😊"
];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Get all messages
app.get('/api/messages', (req, res) => {
    res.json({ messages });
});

// Add a new message
app.post('/api/messages', (req, res) => {
    const { message } = req.body;
    
    if (!message || message.trim().length === 0) {
        return res.status(400).json({ error: 'Message cannot be empty' });
    }
    
    if (message.length > 500) {
        return res.status(400).json({ error: 'Message too long (max 500 characters)' });
    }
    
    const newMessage = message.trim();
    messages.unshift(newMessage);
    
    // Keep only the last 100 messages
    if (messages.length > 100) {
        messages = messages.slice(0, 100);
    }
    
    res.json({ 
        success: true, 
        message: newMessage,
        totalMessages: messages.length 
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        messageCount: messages.length
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 The Pause Corner server is running on port ${PORT}`);
    console.log(`✨ Visit http://localhost:${PORT} to experience the magic`);
    console.log(`💝 Uplift Wall API: http://localhost:${PORT}/api/messages`);
});
