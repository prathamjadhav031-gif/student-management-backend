import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use("/api/students", studentRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });