import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);
router.put("/update-profile", authMiddleware, updateProfile);
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json(req.user);
});

export default router;
