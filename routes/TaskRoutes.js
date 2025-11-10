// routes/taskRoutes.js
import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/TaskController.js";

const router = express.Router();

// Define all CRUD routes
router.post("/", createTask); // Create
router.get("/", getTasks); // Read all
router.get("/:id", getTaskById); // Read single
router.put("/:id", updateTask); // Update
router.delete("/:id", deleteTask); // Delete

export default router;
