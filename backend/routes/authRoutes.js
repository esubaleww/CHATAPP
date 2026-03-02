import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Guys");
});

router.get("/login", (req, res) => {
  res.send("Now You Can Chat");
});

router.get("/register", (req, res) => {
  res.send("Now You Can Chat");
});

router.get("/logout", (req, res) => {
  res.send("Now You Can Chat");
});

export default router;
