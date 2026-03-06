import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
  mongoose.connect(ENV.MONGO_URI);
});
