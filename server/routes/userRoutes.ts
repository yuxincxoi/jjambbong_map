import express from "express";
import { updateUser } from "../controllers/userController";

const router = express.Router();

// 회원정보 수정
router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await updateUser(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
