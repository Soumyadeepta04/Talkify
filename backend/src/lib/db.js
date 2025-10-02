import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        mongoose.connection.on('connected', () => {
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        });

        // Import models here to ensure they're registered
        await import('../models/User.js');
        await import('../models/FriendRequest.js');
        
        return conn;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Let the server.js handle the error
    }
}