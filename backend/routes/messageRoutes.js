import epxress from "express";

const router = epxress.Router();

router.get("/", (req, res) => {
  res.send("Hello Guys");
});

router.get("/send", (req, res) => {
  res.send("Now You Can Chat");
});

router.post("/send", (req, res) => {
  res.send("Message Sent");
});

export default router;
