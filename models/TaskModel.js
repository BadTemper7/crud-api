// models/taskModel.js
import mongoose from "mongoose";

// Define the schema (structure of task)
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
); // adds createdAt & updatedAt fields

// Export model
export const Task = mongoose.model("Task", taskSchema);
