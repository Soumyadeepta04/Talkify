# 💬 Talkify

## 🤖 Introduction
Talkify is a modern real-time messaging & video calling platform built to connect people across the globe.
From instant chats with typing indicators and reactions to 1-on-1 / group video calls with screen sharing & recording, Talkify is designed to make communication seamless, fast, and enjoyable.

Whether for casual conversations, study sessions, or professional meetings, Talkify provides a smooth and secure environment with JWT authentication, global state management, and 32+ customizable UI themes.

## 🌍 **Live Website:** [https://talkify-frontend-sepia.vercel.app/](https://talkify-frontend-sepia.vercel.app/)  

## 🚀 Features
🌐 **Real-time Messaging** – Typing indicators, reactions & instant delivery.

📹 **1-on-1 & Group Video Calls** – Screen sharing + recording support.

🔐 **Secure Auth** – JWT authentication with protected routes.

🎨 **Customizable UI** – 32+ UI Themes powered by Tailwind CSS + DaisyUI

⚡ **Tech Stack** – React + Express + MongoDB + TailwindCSS + TanStack Query.

🧠 **Global State Management** – Powered by Zustand.

🚨 **Error Handling** – On both frontend & backend.

🚀 **Free Deployment Ready** – Works smoothly on platforms like Vercel/Render.

🎯 **Stream Integration** – Scalable real-time messaging infrastructure

# ⚙️ Tech Stack
⚛️ **React.js** – Interactive frontend UI

🎨 **Tailwind CSS + DaisyUI** – Clean, responsive, themed design

⚡ **Vite** – Fast frontend build tool

🗄️ **MongoDB** – NoSQL database for storage

🚀 **Express.js** – Backend REST APIs

🔑 **JWT** – Authentication & authorization

📡 **Stream** – Real-time messaging API

🧠 **Zustand** – Lightweight global state manager

🔄 **TanStack Query** – Data fetching & caching

## 📁 Project Structure
```bash
📦 Talkify
├── 📂 frontend  # React + Vite + Tailwind + DaisyUI + Zustand
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 constants
│   │   ├── 📂 hooks
│   │   ├── 📂 lib
│   │   ├── 📂 pages
│   │   ├── 📂 store
│   │   ├── 📄 App.jsx
│   │   ├── 📄 index.css
│   │   └── 📄 main.jsx
│   ├── 📄 index.html
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
├── 📂 backend  # Express + MongoDB + JWT
│   ├── 📂 src
│   │   ├── 📂 controllers
│   │   ├── 📂 lib
│   │   ├── 📂 middleware
│   │   ├── 📂 models
│   │   └── 📂 routes
│   ├── 📄 server.js
│   ├── 📄 package.json
│   └── 📄 .env
│
├── 📄 README.md
└── 📄 .gitignore
```
## 🧪 Environment Setup
## 🔐 Backend (/backend/.env)
```bash
PORT=5000
MONGO_URI=your_mongo_uri
TALKIFY_API_KEY=your_talkify_api_key
TALKIFY_API_SECRET=your_talkify_api_secret
JWT_SECRET_KEY=your_jwt_secret
```
## 🔐 Frontend (/frontend/.env)
```bash
VITE_TALKIFY_API_KEY=your_talkify_api_key
```
## 🤸 Quick Start
## 📦 Prerequisites
Make sure you have installed:

- [Git](https://git-scm.com/)  
- [Node.js (v16+)](https://nodejs.org/en/download/)  
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  

---

## 🔄 Clone the Repository
```bash
git clone https://github.com/Soumyadeepta04/Talkify.git
cd Talkify
```
## 🔧 Run the Backend
```bash
cd backend
npm install
npm run dev
```
## 💻 Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
