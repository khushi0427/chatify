
import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("log in ");
});

router.get("/logout", (req, res) => {
  res.send("log out");
});

router.get("/signup", (req, res) => {
  res.send("sign up");
});

export default router;