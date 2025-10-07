# 💬 Talkify

<div align="center">
  <p><strong>A Modern Real-Time Communication Platform</strong></p>
  <p>Connect, Chat, and Call with ease using cutting-edge web technologies</p>
</div>

---

## 📸 Screenshots

| Login Page | Home Page |
|------------|-----------|
| ![Login](https://github.com/user-attachments/assets/fbf9f704-e077-478d-9112-672e343c96b5) | ![Home](https://github.com/user-attachments/assets/7fdbfed2-e442-40f1-be8c-503159909faf) |

| Chat Page | Notifications Page |
|-----------|--------------------|
| ![Chat](https://github.com/user-attachments/assets/b4b45983-cf46-4a45-8dda-32a12a56a225) | ![Notifications](https://github.com/user-attachments/assets/3249d21d-d976-43d7-a615-803a5706517d) |

| Video Call Page |  |
|-----------------|--|
| ![Video Call](URL_TO_YOUR_VIDEO_CALL_PAGE_IMAGE) |  |

---

## 🤖 Introduction

**Talkify** is a modern, feature-rich real-time messaging and video calling platform built to connect people across the globe. Combining the power of instant messaging with high-quality video communication, Talkify offers a seamless and engaging user experience.

### What Makes Talkify Special?

- **Real-Time Communication**: Experience instant messaging with typing indicators, message reactions, and live updates
- **Video Calling**: Enjoy crystal-clear 1-on-1 video calls with screen sharing and recording capabilities
- **Secure & Private**: Built with JWT authentication and secure data handling practices
- **Customizable Experience**: Choose from 32+ beautiful UI themes to personalize your interface
- **Friend Management**: Add friends, send requests, and manage your connections easily
- **Profile Customization**: Create and customize your profile with avatars and personal information
- **Notifications**: Stay updated with real-time notifications for messages and friend requests
- **Responsive Design**: Works flawlessly across desktop and mobile devices

Whether you're catching up with friends, collaborating with colleagues, or having professional meetings, Talkify provides a smooth, secure, and enjoyable communication environment.

## 🌍 **Live Demo**

🔗 **Visit the live application:** [https://talkify-frontend-sepia.vercel.app/](https://talkify-frontend-sepia.vercel.app/)

---

## ✨ Key Features

### 🌐 **Real-Time Messaging**
- Instant message delivery powered by Stream Chat SDK
- Typing indicators to see when others are typing
- Message reactions and emojis
- Message history and persistence
- Online/offline status indicators

### 📹 **Video Calling**
- High-quality 1-on-1 video calls using Stream Video SDK
- Screen sharing capabilities
- Call recording support
- Camera and microphone controls
- Responsive video layout

### 🔐 **Authentication & Security**
- Secure JWT-based authentication
- HTTP-only cookie sessions
- Protected routes and API endpoints
- Password encryption with bcrypt
- Secure token management

### 👥 **Friend Management**
- Send and receive friend requests
- Accept or decline friend requests
- View all your friends in one place
- Search and discover users
- Real-time friend status updates

### 🎨 **Customizable UI**
- 32+ beautiful themes powered by DaisyUI
- Persistent theme selection with localStorage
- Responsive design with Tailwind CSS
- Modern and intuitive interface
- Smooth animations and transitions

### 📱 **User Profile**
- Customizable user profiles
- Avatar upload and management
- Profile information editing
- Onboarding flow for new users
- Profile visibility settings

### 🔔 **Notifications**
- Real-time notification system
- Friend request notifications
- Message notifications
- In-app notification center
- Toast notifications for instant feedback

### 🚀 **Performance & Optimization**
- Fast page loads with Vite
- Efficient data caching with TanStack Query
- Optimized bundle size
- Lazy loading of components
- Smooth navigation with React Router

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| ⚛️ **React.js 18.2** | Core UI library for building interactive components |
| ⚡ **Vite 7.1** | Lightning-fast build tool and dev server |
| 🎨 **Tailwind CSS 3.4** | Utility-first CSS framework for responsive design |
| 🌈 **DaisyUI 4.12** | Beautiful UI components and 32+ themes |
| 📡 **Stream Chat React 13.7** | Real-time chat infrastructure and UI components |
| 📹 **Stream Video SDK 1.23** | Video calling and conferencing capabilities |
| 🔄 **TanStack Query 5.90** | Data fetching, caching, and synchronization |
| 🧠 **Zustand 5.0** | Lightweight state management solution |
| 🚦 **React Router 6.21** | Client-side routing and navigation |
| 🌐 **Axios 1.12** | HTTP client for API requests |
| 🔥 **React Hot Toast 2.6** | Beautiful toast notifications |
| 📅 **date-fns 4.1** | Modern date utility library |
| 🎯 **Lucide React 0.544** | Beautiful and consistent icons |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| 🚀 **Express.js 4.21** | Fast and minimalist web framework |
| 🗄️ **MongoDB 8.13** | NoSQL database for flexible data storage |
| 🔗 **Mongoose 8.13** | Elegant MongoDB object modeling |
| 🔑 **JWT 9.0** | JSON Web Tokens for authentication |
| 🔒 **bcryptjs 3.0** | Password hashing and security |
| 📡 **Stream Chat 8.60** | Backend SDK for real-time messaging |
| 🍪 **Cookie Parser 1.4** | Cookie parsing middleware |
| 🌐 **CORS 2.8** | Cross-Origin Resource Sharing |
| 🔧 **dotenv 16.5** | Environment variable management |
| 🔄 **Nodemon 3.1** | Auto-restart during development |

---

## 📁 Detailed Project Structure

```
📦 Talkify/
│
├── 📂 frontend/                    # React frontend application
│   ├── 📂 public/                  # Static assets
│   │   ├── 🖼️ i.png               # Icon images
│   │   ├── 🖼️ logo.png            # Application logo
│   │   ├── 🖼️ Signup.png          # Signup page image
│   │   ├── 🖼️ try1.png            # Additional images
│   │   └── 🖼️ vite.svg            # Vite logo
│   │
│   ├── 📂 src/                     # Source code
│   │   │
│   │   ├── 📂 components/          # Reusable React components
│   │   │   ├── 📄 CallButton.jsx           # Video call button component
│   │   │   ├── 📄 ChatLoader.jsx           # Loading state for chat
│   │   │   ├── 📄 FriendCard.jsx           # Friend display card
│   │   │   ├── 📄 Layout.jsx               # Main layout wrapper
│   │   │   ├── 📄 Navbar.jsx               # Navigation bar component
│   │   │   ├── 📄 NoFriendsFound.jsx       # Empty state for friends
│   │   │   ├── 📄 NoNotificationsFound.jsx # Empty state for notifications
│   │   │   ├── 📄 PageLoader.jsx           # Full page loading indicator
│   │   │   ├── 📄 ProfileCard.jsx          # User profile card
│   │   │   ├── 📄 Sidebar.jsx              # Navigation sidebar
│   │   │   └── 📄 ThemeSelector.jsx        # Theme selection component
│   │   │
│   │   ├── 📂 constants/           # Application constants
│   │   │   └── 📄 index.js         # Constant values and configurations
│   │   │
│   │   ├── 📂 hooks/               # Custom React hooks
│   │   │   ├── 📄 useAuthUser.js   # Authentication state hook
│   │   │   ├── 📄 useLogin.js      # Login functionality hook
│   │   │   └── 📄 useLogout.js     # Logout functionality hook
│   │   │
│   │   ├── 📂 lib/                 # Utility libraries
│   │   │   ├── 📄 api.js           # API endpoint definitions
│   │   │   ├── 📄 axios.js         # Axios configuration and interceptors
│   │   │   └── 📄 utils.js         # Helper utility functions
│   │   │
│   │   ├── 📂 pages/               # Page components (Routes)
│   │   │   ├── 📄 CallPage.jsx             # Video call page
│   │   │   ├── 📄 ChatPage.jsx             # Chat interface page
│   │   │   ├── 📄 FriendPage.jsx           # Friends list and management
│   │   │   ├── 📄 HomePage.jsx             # Landing/Home page
│   │   │   ├── 📄 LoginPage.jsx            # User login page
│   │   │   ├── 📄 NotificationsPage.jsx    # Notifications center
│   │   │   ├── 📄 OnboardingPage.jsx       # New user onboarding
│   │   │   ├── 📄 ProfilePage.jsx          # User profile page
│   │   │   └── 📄 SignUpPage.jsx           # User registration page
│   │   │
│   │   ├── 📂 store/               # State management
│   │   │   └── 📄 useThemeStore.js # Theme state with Zustand
│   │   │
│   │   ├── 📄 App.jsx              # Main application component with routing
│   │   ├── 📄 index.css            # Global styles and Tailwind imports
│   │   └── 📄 main.jsx             # Application entry point
│   │
│   ├── 📄 .env                     # Environment variables (not in git)
│   ├── 📄 .gitignore               # Git ignore rules
│   ├── 📄 eslint.config.js         # ESLint configuration
│   ├── 📄 index.html               # HTML entry point
│   ├── 📄 package.json             # Frontend dependencies and scripts
│   ├── 📄 postcss.config.js        # PostCSS configuration
│   ├── 📄 README.md                # Frontend documentation
│   ├── 📄 tailwind.config.js       # Tailwind CSS configuration
│   ├── 📄 vercel.json              # Vercel deployment config
│   └── 📄 vite.config.js           # Vite build configuration
│
├── 📂 backend/                     # Express.js backend application
│   ├── 📂 src/                     # Source code
│   │   │
│   │   ├── 📂 controllers/         # Request handlers
│   │   │   ├── 📄 auth.controller.js   # Authentication logic (signup, login, logout)
│   │   │   ├── 📄 chat.controller.js   # Chat functionality (messages, channels)
│   │   │   └── 📄 user.controller.js   # User operations (profile, friends, requests)
│   │   │
│   │   ├── 📂 lib/                 # Utility libraries
│   │   │   ├── 📄 db.js            # MongoDB connection setup
│   │   │   └── 📄 stream.js        # Stream Chat/Video SDK initialization
│   │   │
│   │   ├── 📂 middleware/          # Express middleware
│   │   │   └── 📄 auth.middleware.js   # JWT authentication middleware
│   │   │
│   │   ├── 📂 models/              # Database models
│   │   │   ├── 📄 FriendRequest.js     # Friend request schema
│   │   │   └── 📄 User.js              # User schema
│   │   │
│   │   ├── 📂 routes/              # API routes
│   │   │   ├── 📄 auth.route.js        # Authentication endpoints
│   │   │   ├── 📄 chat.route.js        # Chat endpoints
│   │   │   └── 📄 user.routes.js       # User management endpoints
│   │   │
│   │   └── 📄 server.js            # Express server setup and configuration
│   │
│   ├── 📄 .gitignore               # Git ignore rules
│   ├── 📄 package.json             # Backend dependencies and scripts
│   └── 📄 vercel.json              # Vercel deployment config
│
├── 📄 README.md                    # Main project documentation
└── 📄 .gitignore                   # Root git ignore rules
```

---

## 📋 API Endpoints

### **Authentication Routes** (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | ❌ |
| POST | `/login` | User login | ❌ |
| POST | `/logout` | User logout | ✅ |
| GET | `/me` | Get current user | ✅ |

### **User Routes** (`/api/users`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all users | ✅ |
| GET | `/:id` | Get user by ID | ✅ |
| PUT | `/profile` | Update user profile | ✅ |
| POST | `/friend-request/:id` | Send friend request | ✅ |
| POST | `/friend-request/:id/accept` | Accept friend request | ✅ |
| POST | `/friend-request/:id/decline` | Decline friend request | ✅ |
| GET | `/friends` | Get all friends | ✅ |
| GET | `/notifications` | Get notifications | ✅ |

### **Chat Routes** (`/api/chat`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/token` | Get Stream Chat token | ✅ |
| GET | `/channels` | Get user channels | ✅ |
| POST | `/channel` | Create new channel | ✅ |

---

## 🔧 Environment Variables

### **Backend Environment Variables** (`backend/.env`)

Create a `.env` file in the `backend` directory with the following variables:

```bash
# Server Configuration
PORT=5000                                    # Port number for the backend server
NODE_ENV=development                         # Environment: development or production

# Database Configuration
MONGO_URI=mongodb://localhost:27017/talkify  # MongoDB connection string
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/talkify

# JWT Configuration
JWT_SECRET_KEY=your_super_secret_jwt_key     # Secret key for JWT token signing
JWT_EXPIRES_IN=7d                            # Token expiration time

# Stream API Configuration
STREAM_API_KEY=your_stream_api_key           # Stream API key
STREAM_API_SECRET=your_stream_api_secret     # Stream API secret

# CORS Configuration
CLIENT_URL=http://localhost:5173             # Frontend URL for CORS
```

### **Frontend Environment Variables** (`frontend/.env`)

Create a `.env` file in the `frontend` directory with the following variables:

```bash
# Stream API Configuration
VITE_STREAM_API_KEY=your_stream_api_key      # Stream API key (must match backend)

# Backend API URL
VITE_API_URL=http://localhost:5000           # Backend API URL
```

### **Getting Stream API Credentials**

1. Visit [GetStream.io](https://getstream.io/) and create a free account
2. Create a new app in the Stream dashboard
3. Navigate to your app dashboard to find your API Key and Secret
4. Copy the credentials to your `.env` files

---

## 🚀 Installation & Setup

### **Prerequisites**

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### **Step 1: Clone the Repository**

```bash
# Clone the repository
git clone https://github.com/Soumyadeepta04/Talkify.git

# Navigate to the project directory
cd Talkify
```

### **Step 2: Backend Setup**

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the environment variables from the section above and add your credentials

# Start the development server
npm run dev
```

The backend server will start on `http://localhost:5000`

### **Step 3: Frontend Setup**

Open a new terminal window and run:

```bash
# Navigate to the frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file
# Copy the environment variables from the section above and add your credentials

# Start the development server
npm run dev
```

The frontend application will start on `http://localhost:5173`

### **Step 4: Access the Application**

Open your browser and navigate to `http://localhost:5173`

---

## 🎯 Usage Guide

### **1. Registration & Login**
- Navigate to the signup page to create a new account
- Provide your email, username, and password
- After registration, complete the onboarding process
- Login with your credentials

### **2. Profile Setup**
- Upload your profile picture
- Add your personal information
- Customize your profile

### **3. Finding Friends**
- Browse the friends page to discover users
- Send friend requests to connect
- Accept incoming friend requests from notifications

### **4. Messaging**
- Select a friend from your friends list
- Start chatting in real-time
- Use emojis and reactions
- See typing indicators

### **5. Video Calling**
- Click the call button on a friend's profile or chat
- Allow camera and microphone permissions
- Enjoy high-quality video calls
- Use screen sharing when needed

### **6. Customization**
- Click on the theme selector
- Choose from 32+ available themes
- Your theme preference is saved automatically

---

## 📦 Available Scripts

### **Frontend Scripts**

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### **Backend Scripts**

```bash
npm run dev       # Start development server with nodemon
npm start         # Start production server
```

---

## 🚀 Deployment

### **Frontend Deployment (Vercel)**

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/) and sign in
3. Import your repository
4. Set the root directory to `frontend`
5. Add environment variables in Vercel dashboard
6. Deploy!

### **Backend Deployment (Render/Railway)**

1. Push your code to GitHub
2. Create an account on [Render](https://render.com/) or [Railway](https://railway.app/)
3. Create a new Web Service
4. Connect your GitHub repository
5. Set the root directory to `backend`
6. Add environment variables
7. Deploy!

### **Database (MongoDB Atlas)**

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add a database user
4. Whitelist your IP or use `0.0.0.0/0` for all IPs
5. Get your connection string and add it to your environment variables

---

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/AmazingFeature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
5. **Push to the branch** (`git push origin feature/AmazingFeature`)
6. **Open a Pull Request**

### **Development Guidelines**

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Keep pull requests focused and small

---

## 🐛 Known Issues & Troubleshooting

### **Common Issues**

**Issue 1: MongoDB Connection Error**
- **Solution**: Check your MongoDB URI and ensure MongoDB is running

**Issue 2: Stream API Error**
- **Solution**: Verify your Stream API credentials are correct in both frontend and backend

**Issue 3: CORS Error**
- **Solution**: Ensure the `CLIENT_URL` in backend `.env` matches your frontend URL

**Issue 4: Video Call Not Working**
- **Solution**: Check browser permissions for camera and microphone

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Soumyadepta**

- GitHub: [@Soumyadeepta04](https://github.com/Soumyadeepta04)
- Project Link: [https://github.com/Soumyadeepta04/Talkify](https://github.com/Soumyadeepta04/Talkify)

---

## 🙏 Acknowledgments

- [Stream](https://getstream.io/) for providing excellent real-time communication APIs
- [DaisyUI](https://daisyui.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All contributors and users of this project

---

## 📧 Contact & Support

If you have any questions, suggestions, or issues, please:

- Open an issue on [GitHub](https://github.com/Soumyadeepta04/Talkify/issues)
- Star ⭐ this repository if you find it helpful!

---

<div align="center">
  <p>Made with ❤️ by Soumyadepta</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
