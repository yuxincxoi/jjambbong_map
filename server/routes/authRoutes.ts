import express from "express";
import { loginUser, registerUser } from "../controllers/authController";

const router = express.Router();

// 로그인
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// 회원가입
router.post("/register", async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export default router;
