import mongoose from "mongoose";
import app from "./app";

console.log("hello world");
const port: Number = 5000;

async function databaseConnection() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log("🥂 Database connection successful!!!🍹")
        app.listen(port || 5000, () => {
            console.log(`🚀 Server ready at http://localhost:${port} 🏎  🚗`);
        });

    } catch (error) {
        console.log("📦database connection failed🤕🦽>> ", error);
    }
}

databaseConnection();
