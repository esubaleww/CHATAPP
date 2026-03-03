import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Guys");
});

router.get("/login", (req, res) => {
  res.send("Now You Can Log in");
});

router.post("/register", register);

router.get("/logout", (req, res) => {
  res.send("Now You Can Chat");
});

export default router;
