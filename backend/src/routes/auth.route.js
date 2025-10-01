import express from "express";
import { signup,login,logout, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding",protectRoute ,onboard);

// routes/auth.js
router.get("/me", protectRoute, (req,res) => {
    const { _id, email, FullName, profilepic, isOnboarded = false } = req.user;
    res.status(200).json({
        success: true,
        user: { _id, email, FullName, profilepic, isOnboarded }
    });
});



export default router;

