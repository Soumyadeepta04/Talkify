import express from "express";
import "dotenv/config"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.route.js"
import cors from "cors";
import { connectDB } from "./lib/db.js";

// Import models explicitly
import "./models/User.js";
import "./models/FriendRequest.js";

// dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.use(cors({
//     // origin: "http://localhost:5173",
//     origin: "https://talkify-frontend-69npl03wa-soumyadeepta-mannas-projects.vercel.app",
//     credentials: true // allow frontend to send cookies
// }));
// Dynamic CORS for any frontend
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin); // echo back the incoming origin
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Add error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Connect to DB first, then start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1);
    });



