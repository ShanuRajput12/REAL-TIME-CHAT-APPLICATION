# CODTECH Real-time Chat Application
COMPANY: CODE TECH IT SOLUTIONS

*NAME*: SHANU RAJPUT

*INTERN ID*: CT04DH2707

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

A modern, responsive real-time chat application built with React.js and WebSockets (Socket.IO) for the CODTECH Internship Task 2.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using WebSockets
- **Message History**: Persistent message storage and retrieval
- **User Presence**: Real-time user online/offline status
- **Typing Indicators**: Shows when users are typing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful, intuitive interface with smooth animations
- **User Authentication**: Simple username-based login system
- **Auto-scroll**: Messages automatically scroll to the latest
- **Message Timestamps**: Shows when messages were sent

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time WebSocket communication
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **Styled Components** - CSS-in-JS styling
- **Socket.IO Client** - WebSocket client

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task2
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Start the development servers**
   ```bash
   # Start both server and client (recommended)
   npm run dev
   
   # Or start them separately:
   # Terminal 1 - Start server
   npm run server
   
   # Terminal 2 - Start client
   npm run client
   ```

## 🎯 Usage

1. **Start the application** using the commands above
2. **Open your browser** and navigate to `http://localhost:3000`
3. **Enter a username** to join the chat
4. **Start chatting** with other users in real-time!

## 📱 Features in Action

### Real-time Communication
- Messages are delivered instantly to all connected users
- No page refresh required
- WebSocket connection provides low-latency communication

### Message History
- New users receive the last 100 messages when joining
- Messages persist during the session
- System messages for user join/leave events

### User Experience
- **Typing Indicators**: See when others are typing
- **User List**: View all online users in the sidebar
- **Responsive Design**: Works on all screen sizes
- **Auto-scroll**: Messages automatically scroll to bottom
- **Enter to Send**: Press Enter to send messages quickly

### Visual Design
- **Modern UI**: Clean, professional interface
- **Color-coded Avatars**: Each user gets a unique avatar color
- **Message Bubbles**: Different styles for own vs others' messages
- **Smooth Animations**: Hover effects and transitions
- **Gradient Backgrounds**: Beautiful visual appeal

## 🔧 Project Structure

```
task2/
├── server/
│   └── index.js          # WebSocket server
├── client/
│   ├── public/
│   │   └── index.html    # Main HTML file
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── ChatRoom.js
│   │   │   ├── Header.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── Message.js
│   │   │   ├── MessageInput.js
│   │   │   ├── MessageList.js
│   │   │   └── UserList.js
│   │   ├── utils/
│   │   │   └── avatarGenerator.js
│   │   ├── App.js        # Main app component
│   │   ├── index.js      # React entry point
│   │   └── index.css     # Global styles
│   └── package.json      # Client dependencies
├── package.json          # Server dependencies
└── README.md            # This file
```

## 🌐 API Endpoints

- `GET /api/health` - Server health check
- `GET /api/users` - Get list of connected users

## 🔌 WebSocket Events

### Client to Server
- `join` - User joins the chat
- `sendMessage` - Send a new message
- `typing` - Typing indicator

### Server to Client
- `messageHistory` - Send message history to new user
- `newMessage` - Broadcast new message to all users
- `userList` - Update user list
- `userJoined` - Notify when user joins
- `userLeft` - Notify when user leaves
- `userTyping` - Typing indicator from other users

## 🎨 Customization

### Colors
The application uses a consistent color scheme that can be easily modified in the styled components:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: Various accent colors for avatars
- Background: Light gradients and white surfaces

### Styling
All styling is done with styled-components, making it easy to modify the appearance by editing the component files.

## 🚀 Deployment

### Production Build
```bash
# Build the client
cd client
npm run build

# The built files will be in client/build/
```

### Environment Variables
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## 📝 License

This project is created for CODTECH Internship Task 2.



---

**Note**: This is a real-time chat application that requires multiple users to be connected simultaneously to experience the full functionality. Open multiple browser tabs or have friends join to test the real-time features!

