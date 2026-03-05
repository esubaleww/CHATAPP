import epxress from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/messageController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { arcjetMiddleware } from "../middleware/arcjetMiddleware.js";

const router = epxress.Router();

router.use(arcjetMiddleware, authMiddleware);

router.get("/contacts", getAllContacts);

router.get("/chats", getChatPartners);

router.get("/:id", getMessagesByUserId);

router.post("/send/:id", sendMessage);

export default router;
