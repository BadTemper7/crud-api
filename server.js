// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);
app.get("/", (req, res) => res.send("✅ API is running..."));

// Connect DB (only once)
connectDB();

export default app; // Important: do not use app.listen() for Vercel
